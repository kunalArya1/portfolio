import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// Define TypeScript interfaces for the returned data structures
export interface Post {
  id: string;
  title: string;
  coverImage?: string;
  slug: string;
  ReadTime: string;
  Author: string;
  date: string;
  tags: string[];
  description: string;
  Featured: boolean;
}

export interface PostDetail extends Post {
  blocks: any; // Type for recordMap from notion-client
  pageId: string;
  category: string;
}

// Type guard to check if a page is a full page object
function isFullPage(page: any): page is PageObjectResponse {
  return page && "properties" in page;
}

// Helper function to safely get property values
function getPropertyValue(properties: Record<string, any>, key: string): any {
  const property = properties[key];
  if (!property) {
    console.log(`Property ${key} not found`);
    return null;
  }

  console.log(`Getting value for ${key}, type: ${property.type}`, property);

  switch (property.type) {
    case "title":
      return property.title[0]?.plain_text || "";
    case "rich_text":
      return property.rich_text[0]?.plain_text || "";
    case "date":
      return property.date?.start || "";
    case "multi_select":
      return property.multi_select.map((tag: { name: string }) => tag.name);
    case "checkbox":
      return Boolean(property.checkbox);
    case "select":
      return property.select?.name || "";
    default:
      console.log(`Unhandled property type: ${property.type}`);
      return null;
  }
}

// Helper function to get cover image URL
function getCoverImageUrl(page: PageObjectResponse): string | undefined {
  if (!page.cover) return undefined;

  if (page.cover.type === "external") {
    return page.cover.external.url;
  } else if (page.cover.type === "file") {
    return page.cover.file.url;
  }

  return undefined;
}

// Initialize the Notion clients
const notion = new Client({
  auth: process.env.NOTION_API_KEY as string,
});

const notionClient = new NotionAPI();

export async function getAllPosts(): Promise<Post[]> {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    const apiKey = process.env.NOTION_API_KEY;

    if (!databaseId) {
      console.error(
        "NOTION_DATABASE_ID is not defined in environment variables"
      );
      throw new Error("NOTION_DATABASE_ID is not defined");
    }

    if (!apiKey) {
      console.error("NOTION_API_KEY is not defined in environment variables");
      throw new Error("NOTION_API_KEY is not defined");
    }

    console.log("Fetching posts from Notion database:", databaseId);

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    console.log(
      "Notion API response received:",
      response.results.length,
      "pages"
    );

    const posts = response.results
      .filter(isFullPage)
      .map((page) => {
        try {
          const properties = page.properties;
          console.log("Processing page properties:", Object.keys(properties));

          // Try both "Featured" and "featured" property names
          const featuredValue =
            getPropertyValue(properties, "Featured") ||
            getPropertyValue(properties, "featured");

          const post: Post = {
            id: page.id,
            title: getPropertyValue(properties, "title") || "Untitled",
            coverImage: getCoverImageUrl(page),
            slug: getPropertyValue(properties, "slug") || "",
            ReadTime: getPropertyValue(properties, "ReadTime") || "",
            Author: getPropertyValue(properties, "Author") || "",
            date: getPropertyValue(properties, "Date") || "",
            tags: getPropertyValue(properties, "tag") || [],
            description: getPropertyValue(properties, "Description") || "",
            Featured: featuredValue || false,
          };

          console.log("Processed post:", post.title, post.date);
          return post;
        } catch (error) {
          console.error("Error parsing post:", error);
          return null;
        }
      })
      .filter((post): post is Post => post !== null);

    console.log("Successfully processed", posts.length, "posts");
    return posts;
  } catch (error) {
    console.error("Error fetching posts from Notion:", error);
    throw new Error("Failed to fetch posts from Notion");
  }
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      throw new Error("NOTION_DATABASE_ID is not defined");
    }

    if (!slug) {
      throw new Error("Slug is required");
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug,
        },
      },
    });

    if (response.results.length === 0) {
      return null;
    }

    const page = response.results[0];

    if (!isFullPage(page)) {
      throw new Error("Invalid page object received from Notion");
    }

    try {
      // Get the full recordMap for the page
      const recordMap = await notionClient.getPage(page.id);
      const properties = page.properties;

      const post: PostDetail = {
        id: page.id,
        title: getPropertyValue(properties, "title") || "Untitled",
        slug: getPropertyValue(properties, "slug") || "",
        Author: getPropertyValue(properties, "Author") || "",
        ReadTime: getPropertyValue(properties, "ReadTime") || "",
        date: getPropertyValue(properties, "Date") || "",
        blocks: recordMap,
        pageId: page.id,
        description: getPropertyValue(properties, "Description") || "",
        tags: getPropertyValue(properties, "tag") || [],
        coverImage: getCoverImageUrl(page),
        category: getPropertyValue(properties, "category") || "",
        Featured: getPropertyValue(properties, "Featured") || false,
      };

      return post;
    } catch (error) {
      console.error("Error fetching page content from Notion:", error);
      throw new Error("Failed to fetch page content from Notion");
    }
  } catch (error) {
    console.error("Error fetching post by slug from Notion:", error);
    throw new Error("Failed to fetch post from Notion");
  }
}
