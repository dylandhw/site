import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGlobe, FaDatabase, FaGamepad, FaGraduationCap, FaYoutube, FaSearch, FaSatellite, FaClosedCaptioning, FaSmile } from 'react-icons/fa';
import { GiDragonHead } from 'react-icons/gi';
import { MdHowToVote } from 'react-icons/md';

interface Project {
  title: string;
  repoUrl?: string;
  liveUrl?: string;
  description: string;
  languages: string[];
  details: string[];
  image?: string;
  logo: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "OrbitAI - Satellite Collision Avoidance Simulation",
    repoUrl: "https://youtu.be/DGRLND8I02g?si=5957pycpotNDa542",
    description: "A machine learning based collision avoidance simulation for satellites in low earth orbit.",
    logo: <FaSatellite className="text-cyan-600" />,
    image: "/projects/deduck.png",
    languages: ["Python", "C#", "Three.js", "PyTorch", "Unity", "Git"],
    details: [
      "Supports multiple hashing algorithms: XxHash, Blake3, and Sha256 for different scan modes",
      "Filter files by extension and size with recursive directory scanning",
      "Quarantine duplicates safely with restoration capabilities",
      "Generate detailed reports showing files found, deleted, and total bytes saved",
      "Built with Rust for high performance and memory safety"
    ]
  },
  {
    title: "MOODSIC - Emotion Detecting Music Player",
    repoUrl: "https://youtu.be/DGRLND8I02g?si=5957pycpotNDa542",
    description: "A machine learning based collision avoidance simulation for satellites in low earth orbit.",
    logo: <FaSmile className="text-cyan-600" />,
    image: "/projects/deduck.png",
    languages: ["Python", "Typescript", "React", "CNN", "Git"],
    details: [
      "Supports multiple hashing algorithms: XxHash, Blake3, and Sha256 for different scan modes",
      "Filter files by extension and size with recursive directory scanning",
      "Quarantine duplicates safely with restoration capabilities",
      "Generate detailed reports showing files found, deleted, and total bytes saved",
      "Built with Rust for high performance and memory safety"
    ]
  },
  {
    title: "ImgCap - Automatic Image Captioning",
    repoUrl: "https://youtu.be/DGRLND8I02g?si=5957pycpotNDa542",
    description: "A machine learning based collision avoidance simulation for satellites in low earth orbit.",
    logo: <FaClosedCaptioning className="text-cyan-600" />,
    image: "/projects/deduck.png",
    languages: ["Python", "CNN"],
    details: [
      "Supports multiple hashing algorithms: XxHash, Blake3, and Sha256 for different scan modes",
      "Filter files by extension and size with recursive directory scanning",
      "Quarantine duplicates safely with restoration capabilities",
      "Generate detailed reports showing files found, deleted, and total bytes saved",
      "Built with Rust for high performance and memory safety"
    ]
  },
];


export default function WorkPage() {
  return (
    <div className="space-y-10 py-4">
      <h1 className="text-3xl mb-6">Projects</h1>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-lg flex items-center gap-3">
              <span className="text-xl">{project.logo}</span>
              {project.title}
            </h2>
            <p className="text-sm text-gray-500">{project.languages.join(", ")}</p>
            <div className="flex gap-4">
              {project.repoUrl && (
                <Link 
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  GitHub repo
                </Link>
              )}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800"
                >
                  Live Site
                </Link>
              )}
            </div>

            {project.image && (
              <div className="w-full rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={800}
                  height={450}
                  quality={75}
                  priority={index < 2}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                  className="w-full h-auto"
                />
              </div>
            )}
            
            <p className="text-lg">{project.description}</p>
            
            <ul className="list-disc pl-6 space-y-2 text-sm">
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}