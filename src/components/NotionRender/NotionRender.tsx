"use client";

import { JSX, useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ExtendedRecordMap } from "notion-types";
import "./notion-overrides.css";

// Dynamic imports for Notion components
const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((mod) => mod.Code)
);
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (mod) => mod.Collection
  )
);
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then(
    (mod) => mod.Equation
  )
);
const Pdf = dynamic(() =>
  import("react-notion-x/build/third-party/pdf").then((mod) => mod.Pdf)
);
const Modal = dynamic(() =>
  import("react-notion-x/build/third-party/modal").then((mod) => mod.Modal)
);

// Define types for the Property component
interface PropertyProps {
  propertyName: string;
  defaultRenderer: (props: PropertyProps) => JSX.Element;
  [key: string]: any; // For any additional props
}

// Custom Property component to filter out specific properties
const Property = (props: PropertyProps) => {
  // List of properties to hide
  const hiddenProperties: string[] = [
    "created at",
    "Date",
    "Published",
    "slug",
    "status",
  ];

  // If the property is in our hidden list, don't render it
  if (hiddenProperties.includes(props.propertyName)) {
    return null;
  }

  // Otherwise use the default property renderer
  return props.defaultRenderer(props);
};

interface NotionPageRendererProps {
  recordMap: ExtendedRecordMap;
}

export default function NotionPageRenderer({
  recordMap,
}: NotionPageRendererProps) {
  // Check if recordMap is available
  const [sanitizedRecordMap, setSanitizedRecordMap] =
    useState<ExtendedRecordMap | null>(null);

  useEffect(() => {
    if (recordMap) {
      // Option: You could also manipulate the recordMap here to remove properties
      // This is a more aggressive approach if the CSS doesn't work
      const processed = { ...recordMap };

      // Loop through all pages
      Object.keys(processed.block || {}).forEach((blockId) => {
        const block = processed.block[blockId];
        if (block && block.value && block.value.properties) {
          // Remove specific properties
          const propertiesToRemove: string[] = [
            "created_at",
            "date",
            "published",
            "slug",
            "status",
          ];
          propertiesToRemove.forEach((prop) => {
            if (block.value.properties[prop]) {
              delete block.value.properties[prop];
            }
          });
        }
      });

      setSanitizedRecordMap(processed);
    }
  }, [recordMap]);

  if (!sanitizedRecordMap) {
    return <>Loading...</>;
  }

  console.log(sanitizedRecordMap);

  return (
    <NotionRenderer
      recordMap={sanitizedRecordMap}
      className="notion-custom-renderer"
      fullPage={false}
      darkMode={false}
      components={{
        Code,
        Collection,
        Equation,
        Modal,
        Pdf,
        nextImage: Image,
        nextLink: Link,
      }}
      mapPageUrl={(id: string) => `/blog/${id}`}
      previewImages={true}
    />
  );
}
