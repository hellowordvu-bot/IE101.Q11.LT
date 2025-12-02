// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t mt-10 py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} One Page Blog. All rights reserved.
    </footer>
  );
}
