// app/blog/page.tsx
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

export default function BlogPage() {
  const filePath = path.join(process.cwd(), "app/blog/content.md");
  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <article className="prose prose-neutral">
      <h1 className="text-3xl font-bold mb-6">Blog Post Placeholder</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
