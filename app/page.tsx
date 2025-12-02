import fs from "fs";
import path from "path";
import BlogContent from "@/components/BlogContent";

export default function HomePage() {
  const filePath = path.join(process.cwd(), "app/blog/content.md");
  const content = fs.readFileSync(filePath, "utf-8");

  return <BlogContent content={content} />;
}
