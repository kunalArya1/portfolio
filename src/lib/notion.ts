import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";

// Define TypeScript interfaces for the returned data structures
interface Post {
  id: string;
  title: string;
  coverImage?: string;
  slug: string;
  ReadTime: string;
  Author: string;
  date: string;
  tags: string[];
  description: string;
}

interface PostDetail extends Post {
  blocks: any; // Type for recordMap from notion-client
  pageId: string;
  category: string;
}

// Initialize the Notion client
// console.log(process.env.NOTION_DATABASE_ID);

const notion = new Client({
  auth: process.env.NOTION_API_KEY as string,
});

export async function getAllPosts(): Promise<Post[]> {
  const databaseId = process.env.NOTION_DATABASE_ID as string;

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

  console.log(response);

  return response.results.map((page: any) => {
    return {
      id: page.id,
      title: page.properties.title.title[0]?.plain_text || "Untitled",
      coverImage: page.cover?.external?.url,
      slug: page.properties.slug.rich_text[0]?.plain_text || "",
      ReadTime: page.properties.ReadTime.rich_text[0]?.plain_text || "",
      Author: page.properties.Author.rich_text[0]?.plain_text || "",
      date: page.properties.Date.date?.start || "",
      tags: page.properties.tag.multi_select.map((tag: any) => tag.name),
      description: page.properties.Description.rich_text[0]?.plain_text || "",
    };
  });
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  const databaseId = process.env.NOTION_DATABASE_ID as string;

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

  // Import NotionAPI from notion-client for advanced rendering
  const notionClient = new NotionAPI();

  // Get the full recordMap for the page
  const recordMap = await notionClient.getPage(page.id);

  // console.log(page);

  return {
    id: page.id,
    title: page.properties.title.title[0]?.plain_text || "Untitled",
    slug: page.properties.slug.rich_text[0]?.plain_text || "",
    Author: page.properties.Author.rich_text[0]?.plain_text || "",
    ReadTime: page.properties.ReadTime.rich_text[0]?.plain_text || "",
    date: page.properties.Date.date?.start || "",
    blocks: recordMap, // This contains the full recordMap for react-notion-x
    pageId: page.id,
    description: page.properties.Description.rich_text[0]?.plain_text || "",
    tags: page.properties.tag.multi_select.map((tag: any) => tag.name),
    coverImage: page.cover?.external?.url,
    category: page.properties.category.rich_text[0]?.plain_text || "",
  };
}
