'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer as ReactNotionX } from 'react-notion-x';
import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';
import { Equation } from 'react-notion-x/build/third-party/equation';
import { Modal } from 'react-notion-x/build/third-party/modal';

// Core styles shared by all of react-notion-x
import 'react-notion-x/src/styles.css';
// Optional prism syntax highlighting
import 'prismjs/themes/prism-tomorrow.css';
// Optional katex support
import 'katex/dist/katex.min.css';

// Commenting out problematic dynamic imports temporarily
// const Pdf = dynamic(
//   () => import('react-notion-x/build/third-party/pdf').then((mod) => mod.Pdf),
//   {
//     ssr: false,
//     loading: () => (
//       <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
//         <p className="text-gray-600">Loading PDF viewer...</p>
//       </div>
//     ),
//   }
// );

interface NotionRendererProps {
  recordMap: ExtendedRecordMap;
}

const NotionRenderer: React.FC<NotionRendererProps> = ({ recordMap }) => {
  if (!recordMap) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-gray-500">No content available</p>
      </div>
    );
  }

  return (
    <div className="notion-renderer">
      <ReactNotionX
        recordMap={recordMap}
        components={{
          nextImage: Image,
          nextLink: Link,
          Code,
          Collection,
          Equation,
          // Pdf, // Temporarily removed to fix build issue
          Modal
        }}
        darkMode={true}
        previewImages={true}
        showCollectionViewDropdown={false}
        fullPage={false}
        showTableOfContents={false}
        hideBlockId={true}
        disableHeader={true}
        className="notion-container"
        mapPageUrl={(pageId) => `/notion/${pageId}`}
      />

      <style jsx global>{`
        .notion-renderer {
          @apply text-gray-100;
          font-family: inherit;
          width: 100%;
        }
        
        .notion-page {
          padding: 0 !important;
          width: 100% !important;
          margin: 0 !important;
          max-width: none !important;
        }

        .notion-text {
          @apply text-gray-300;
          padding: 0.5em 2px !important;
          font-size: 1.1rem !important;
          line-height: 1.75 !important;
        }

        .notion-h1 {
          @apply text-gray-100;
          font-size: 2.5rem !important;
          font-weight: 700 !important;
          margin: 2rem 0 1rem !important;
        }

        .notion-h2 {
          @apply text-gray-100;
          font-size: 2rem !important;
          font-weight: 600 !important;
          margin: 1.8rem 0 0.8rem !important;
        }

        .notion-h3 {
          @apply text-gray-100;
          font-size: 1.5rem !important;
          font-weight: 600 !important;
          margin: 1.5rem 0 0.6rem !important;
        }

        .notion-asset-caption {
          @apply text-center text-gray-400;
          font-size: 0.9rem !important;
        }

        .notion-bookmark {
          @apply border border-gray-800 rounded-lg;
          color: inherit;
          transition: all 0.2s ease;
        }

        .notion-bookmark:hover {
          @apply border-gray-700 bg-gray-900;
        }

        .notion-viewport {
          z-index: 0;
        }

        .notion-asset-wrapper {
          margin: 1.5rem 0 !important;
          border-radius: 0.5rem !important;
          overflow: hidden !important;
        }

        .notion-asset-wrapper img {
          border-radius: 0.5rem !important;
        }

        .notion-header {
          display: none !important;
        }

        .notion-page-content {
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .notion-code {
          background: #1a1a1a !important;
          border-radius: 0.5rem !important;
          padding: 1rem !important;
          margin: 1rem 0 !important;
        }

        .notion-list {
          @apply text-gray-300;
          padding-left: 1.25rem !important;
          margin: 0.5rem 0 !important;
        }

        .notion-collection {
          @apply max-w-full;
        }

        .notion-collection-header {
          padding: 1rem 0 !important;
        }

        .notion-table {
          width: 100% !important;
          margin: 1rem 0 !important;
          @apply text-gray-300;
        }

        .notion-table-cell {
          padding: 0.5rem !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }

        .notion-quote {
          border-left: 4px solid rgba(255, 255, 255, 0.2) !important;
          padding-left: 1rem !important;
          margin: 1rem 0 !important;
          font-style: italic !important;
          @apply text-gray-300;
        }

        .notion-link {
          color: #3291ff !important;
          text-decoration: underline !important;
          transition: all 0.2s ease !important;
        }

        .notion-link:hover {
          color: #0070f3 !important;
        }

        @media (max-width: 768px) {
          .notion-page-content {
            padding: 0 1rem !important;
          }

          .notion-h1 {
            font-size: 2rem !important;
          }

          .notion-h2 {
            font-size: 1.75rem !important;
          }

          .notion-h3 {
            font-size: 1.25rem !important;
          }

          .notion-text {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NotionRenderer; 