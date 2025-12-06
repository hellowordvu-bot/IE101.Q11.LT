"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Slugger from "github-slugger";

interface Heading {
  text: string;
  level: number;
  id: string;
}

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const slugger = new Slugger();
    const hs: Heading[] = [];

    content.split("\n").forEach((line) => {
      const match = line.match(/^(#{1,6})\s+(.*)/); // match # to ######
      if (match) {
        const level = match[1].length;
        const text = match[2];
        const id = slugger.slug(text); // generate slug matching rehype-slug
        hs.push({ text, level, id });
      }
    });

    setHeadings(hs);
  }, [content]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 py-10 px-6">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 sticky top-20 self-start">
        <h2 className="font-bold text-lg mb-4">On This Page</h2>
        <ul className="flex flex-col gap-2 text-gray-700 text-sm">
          {headings.map((h) => (
            <li
              key={h.id}
              className={`ml-${(h.level - 1) * 4}`} // adjust margin based on heading level
            >
              <a
                href={`#${h.id}`}
                className="hover:text-indigo-600 cursor-pointer"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Markdown Content */}
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-neutral flex-1 max-w-none lg:max-w-5xl mx-auto">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSlug]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold mb-6 text-center">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-gray-200 pb-1 text-gray-800">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-medium mt-6 mb-2 text-gray-700 italic">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="mb-4 text-gray-600 leading-relaxed">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside mb-4">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside mb-4">{children}</ol>
            ),
            a: ({ href, children }) => (
              <a href={href} className="text-indigo-500 hover:underline">
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
