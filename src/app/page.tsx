"use client"

import XIcon from "@/components/icons/XIcon"
import { Github, NotebookText, Coffee } from "lucide-react"
import Link from 'next/link'
import { useState } from "react"
import { SiSolana } from "react-icons/si"

export default function Home() {
  const [copied, setCopied] = useState(false)
  const solanaAddress = "CVzTKtNwLouYs7ua2zMRshSS5LEKYUTE1mcwKqGXJcvP"

  const handleCopy = () => {
    navigator.clipboard.writeText(solanaAddress).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <>
      <h1 className="text-3xl mb-6">Dylan Wilkins</h1>
      <br />
      <p>
        Humanitatem promovemus technologiā. We advance humanity through technology.
      </p>
      <br />
      <p>
        I believe software to be a gift; an extension of the mind to help solve 'unsolvable' problems.
      </p>

      <div className="flex flex-wrap gap-4 my-6">
        <a href="https://github.com/dylandhw" className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2">
          <Github size={16} />
          Github
        </a>
        <a href="/dylan_wilkins_resume.pdf" className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2">
          <NotebookText size={16} />
          Resume
        </a>
        <a href="https://linkedin.com/in/dylwilks" className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2">
          <Coffee size={16} />
          LinkedIn
        </a>
      </div>

      <h3 className="text-2xl mb-6">Featured Posts</h3>
      <div className="space-y-4">
        <article className="space-y-2 flex flex-row gap-4">
          <h3 className="text-md font-normal hover:text-gray-600">
            <Link href="/blog/rusty-blog">
              The Beauty of Go: Parallelism and Concurrency
            </Link>
          </h3>
        </article>
        <article className="space-y-2 flex flex-row gap-4">
          <h3 className="text-md font-normal hover:text-gray-600">
            <Link href="/blog/machine-learning-fundamentals">
              Machine Learning Fundamentals: From Theory to Practice
            </Link>
          </h3>
        </article>
        <article className="space-y-2 flex flex-row gap-4">
          <h3 className="text-md font-normal hover:text-gray-600">
            <Link href="/blog/blockchain-deep-dive">
              Ledgers to Smart Contracts: What is the Blockchain?
            </Link>
          </h3>
        </article>
      </div>
    </>
  )
}
