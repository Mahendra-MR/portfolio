'use client';

import Tilt from 'react-parallax-tilt';
import Link from 'next/link';
import { Download } from 'lucide-react';

export function TiltButton() {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.05}
      className="w-fit mx-auto"
    >
      <Link
        href="/resume"
        className="inline-block px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
      >
        View My Resume
      </Link>
    </Tilt>
  );
}

export function GitHubButton() {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.05}
      className="w-fit mx-auto"
    >
      <Link
        href="/projects"
        className="inline-block px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg shadow-lg hover:from-pink-600 hover:to-yellow-600 transition-all duration-300"
      >
        Visit Projects
      </Link>
    </Tilt>
  );
}

export function DownloadButton() {
  return (
    <Link
      href="/CV_Mahendra.pdf"
      download
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all"
    >
      {/* ✅ Desktop: show full button */}
      <span className="hidden sm:inline-block px-5 py-3 text-sm font-semibold">
        Download PDF
      </span>

      {/* ✅ Mobile: icon only */}
      <span className="sm:hidden p-3 flex items-center justify-center">
        <Download className="h-5 w-5" />
      </span>
    </Link>
  );
}
