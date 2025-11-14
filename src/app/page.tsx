"use client";

import { Github, NotebookText, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl mb-6">Dylan Wilkins</h1>
      <br />
      <p>
        Humanitatem promovemus technologiā. We advance humanity through
        technology.
      </p>
      <p>
        I believe software to be a gift; an extension of the mind to help solve
        &apos;unsolvable&apos; problems.
      </p>

      <h3 className="text-2xl mb-6">About Me :-)</h3>
      <p>
        I&apos;m a student and software engineer at the University of Central
        Florida, majoring in Computer Science and minoring in Statistics. My
        completed and current coursework includes:{" "}
        <a
          className="text-gray-500"
          href="https://catalog.ucf.edu/courses/computer-science/computer-science-bs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <br></br>- Data Structures, Algorithms, Computer Logic & Architecture
          <br></br>- Systems Software, Security in Computing, Algo. for Machine
          Learning
          <br></br>- Computer Graphics, Mobile Software Development
          <br></br>- Discrete Structures, Advanced Statistics, and Advanced
          Calculus.
        </a>
      </p>
      <p>
        My passions lie in machine learning, computer vision, distributed
        systems architecture, novel hardware, and advanced algorithm
        development. [in no particular order].
      </p>
      <p>
        Outside of technology, I enjoy foreign films (huge fan of french new
        wave!), digging myself down wikipedia rabbit holes, logic puzzles, and
        architecture :D.
      </p>

      <h3 className="text-2xl mb-6">Featured Posts</h3>
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
          Github
        </a>
        <a
          href="/MAIN_RESUME.pdf"
          className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2"
        >
          <NotebookText size={16} />
          Resume
        </a>
        <a
          href="https://linkedin.com/in/dylwilks"
          className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
      </div>
    </>
  );
}
