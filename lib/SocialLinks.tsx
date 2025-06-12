'use client';

export default function SocialLinks() {
  return (
    <div className="flex gap-6 mt-6 justify-center">
      <a
        href="https://linkedin.com/in/mahendra-m-r-1039151ba"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition duration-300 font-medium tracking-wide"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/mahendra-MR"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition duration-300 font-medium tracking-wide"
      >
        GitHub
      </a>
    </div>
  );
}
