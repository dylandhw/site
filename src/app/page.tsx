"use client";

import { useState, useEffect } from "react";
import { Github, NotebookText, Linkedin } from "lucide-react";
import Link from "next/link";

const TOTAL_FRAMES = 8;
const ANIMATION_SPEED = 300;

const whaleFrames = Array.from(
  { length: TOTAL_FRAMES },
  (_, i) => `/blue-whale/frames/${i + 1}.png`,
);

function WhaleAnimation() {
  const [frame, setFrame] = useState(0);
  const [xPos, setXPos] = useState(0);
  const [direction] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // advance sprite frame
      setFrame((prev) => (prev + 1) % TOTAL_FRAMES);

      // move whale horizontally
      setXPos((prev) => {
        const screenWidth = window.innerWidth - 100;
        let next = prev + direction * 6;
        if (next > screenWidth) {
          next = 0; // reset to left
        }
        return next;
      });
    }, ANIMATION_SPEED);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <img
      src={whaleFrames[frame]}
      alt="Swimming blue whale"
      style={{
        width: "80px",
        height: "50px",
        objectFit: "contain",
        display: "block",
        position: "relative",
        transform: `translateX(${xPos}px)`,
      }}
    />
  );
}

export default function Home() {
  return (
    <>
      <h1 className="text-3xl mb-6 flex items-center gap-4 text-[#DBB981]">
        &gt;&gt; dylan wilkins
        <WhaleAnimation />
      </h1>

      <p>
        Humanitatem promovemus technologiā. We advance humanity through
        technology.
      </p>
      <p>
        I believe software to be a gift; an extension of the mind to help solve
        &apos;unsolvable&apos; problems.
      </p>

      <h3 className="text-2xl mb-6 text-[#DBB981]">&gt;&gt; who am I?</h3>
      <p>
        I&apos;m a student and software engineer at the University of Central
        Florida, studying computer science and statistics.
      </p>
      <p>
        My passions lie in computer vision, distributed systems architecture,
        novel hardware, and advanced algorithm development [in no particular
        order].
      </p>
      <p>
        Outside of technology, I enjoy foreign films (huge fan of french new
        wave!), digging myself down wikipedia rabbit holes, logic puzzles, and
        architecture :D.
      </p>

      <h3 className="text-2xl mb-6 text-[#DBB981]">
        &gt;&gt; featured writings.
      </h3>
      <div className="space-y-4">
        <article className="space-y-2 flex flex-row gap-4">
          <h3 className="text-md font-normal hover:text-gray-600">
            <Link href="/blog/ai-ethics">
              Being Mean to AI is Deontologically Bad For Your Soul
            </Link>
          </h3>
        </article>
        <article className="space-y-2 flex flex-row gap-4">
          <h3 className="text-md font-normal hover:text-gray-600">
            <Link href="/blog/aco">My Favorite Algorithm: ACO</Link>
          </h3>
        </article>
        <article className="space-y-2 flex flex-row gap-4">
          <h3 className="text-md font-normal hover:text-gray-600">
            <Link href="/blog/verbosity">
              On Verbosity in Research (and Software)
            </Link>
          </h3>
        </article>
        <article className="space-y-2 flex flex-row gap-4">
          <h3 className="text-md font-normal hover:text-gray-600">
            <Link href="/blog/collections-photos">Collections: Photos</Link>
          </h3>
        </article>
      </div>
      <div className="flex flex-wrap gap-4 my-6">
        <a
          href="https://github.com/dylandhw"
          className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2"
        >
          <Github size={16} />
          github
        </a>

        <a
          href="https://linkedin.com/in/dylwilks"
          className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2"
        >
          <Linkedin size={16} />
          linkedin
        </a>
        <a
          href="/MAIN_RESUME.pdf"
          className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2"
        >
          <NotebookText size={16} />
          resume
        </a>
      </div>
    </>
  );
}
