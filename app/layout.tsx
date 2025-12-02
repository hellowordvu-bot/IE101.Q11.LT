// app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "One Page Blog",
  description: "Simple one page blog using Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        
        <Header />

        {/* Nội dung tự nở ra, đẩy footer xuống */}
        <main className="flex-1 max-w-none lg:max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-10">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
