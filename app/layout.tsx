import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuizMaker Analytics — Create Quizzes with Detailed Learning Analytics",
  description: "Build quizzes, track where students struggle, and get AI-powered suggestions to improve your courses. The analytics platform for online educators."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1042a08c-0d1b-40ed-8150-b90bf07528f7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
