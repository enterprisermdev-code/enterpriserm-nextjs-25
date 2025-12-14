import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/sanity/client";

// Helper to generate image URLs from Sanity
const builder = imageUrlBuilder(sanityClient);

function urlFor(source: any) {
  return builder.image(source);
}

// Custom components for rendering Portable Text
export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8 rounded-xl overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog image"}
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            style={{ maxHeight: 'none' }}
          />
          {value.caption && (
            <p className="text-sm text-gray-500 text-center mt-2 italic">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    table: ({ value }: any) => {
      if (!value?.rows) {
        return null;
      }
      return (
        <div className="my-8 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <tbody>
              {value.rows.map((row: any, rowIndex: number) => (
                <tr 
                  key={rowIndex}
                  className={rowIndex === 0 ? "bg-[#120174] text-white" : "hover:bg-gray-50"}
                >
                  {row.cells.map((cell: string, cellIndex: number) => {
                    const CellTag = rowIndex === 0 ? "th" : "td";
                    return (
                      <CellTag
                        key={cellIndex}
                        className={`border border-gray-300 px-4 py-3 text-left ${
                          rowIndex === 0 
                            ? "font-bold text-sm uppercase tracking-wide" 
                            : "text-gray-700 text-sm"
                        }`}
                      >
                        {cell}
                      </CellTag>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      
      return (
        <Link
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-[#120174] hover:underline font-medium"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }: any) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 text-[#120174] px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-gray-900 mt-12 mb-6">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#120174] pl-6 py-2 my-6 italic text-gray-700 bg-gray-50 rounded-r">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
  },
};

interface PortableTextRendererProps {
  content: any;
}

export function PortableTextRenderer({ content }: PortableTextRendererProps) {
  if (!content) {
    return null;
  }

  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={content} components={portableTextComponents} />
    </div>
  );
}
