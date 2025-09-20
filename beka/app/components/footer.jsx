export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
      <p className="text-sm">© {new Date().getFullYear()} My Website. All rights reserved.</p>
      <p className="text-xs mt-2">Made with ❤️ using Next.js 15 & Tailwind CSS</p>
    </footer>
  );
}
