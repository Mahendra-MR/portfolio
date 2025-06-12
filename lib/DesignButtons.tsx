'use client';

import Tilt from 'react-parallax-tilt';
import Link from 'next/link';

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

export function DownloadButton() {
  return (
    <Link
      href="/CV_Mahendra.pdf"
      download
      className="fixed bottom-6 right-30 z-50 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-semibold"
    >
      Download PDF
    </Link>
  );
}
