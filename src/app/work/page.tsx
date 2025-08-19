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
}

const projects: Project[] = [
  {
    title: "OrbitAI - Satellite Collision Avoidance Simulation",
    repoUrl: "https://youtu.be/DGRLND8I02g?si=5957pycpotNDa542",
    description: "An AI-powered satellite traffic management system using hybrid neural networks to predict and prevent collisions in increasingly crowded low Earth orbit.",
    image: "/projects/OrbitAI.png",
    languages: ["Python", "C#", "Three.js", "PyTorch", "Unity",],
    details: [
      "Implements a Gated Recurrent Network (GRU) to predict real-time satellite position trajectories over 180-step sequences using synthetic LEO satellite data.",
      "Utilizes Graph Neural Networks (GNN) to coordinate satellites as dynamic nodes and predict high-risk interactions between spacecraft in orbital space.",
      "Features a Unity-based 3D orbital simulator that visualizes collision scenarios and avoidance maneuvers with live AI predictions and trajectory modeling.",
      "Deploys the machine learning model on AWS EC2 with Flask server and WebSocket communication for real-time inference between simulation and AI backend.",
      "Addresses the critical problem of space debris collision avoidance as satellite populations are projected to exceed 100,000 active satellites in LEO by 2030."
    ]
  },
  {
    title: "Certification Blockchain System",
    repoUrl: "https://github.com/dylandhw/certification-blockchain",
    description: "A tamper-proof blockchain system built in Go for recording and verifying event attendance certifications with cryptographic integrity and web interface.",
    image: "",
    languages: ["Golang", "Rust", "PostgreSQL, React"],
    details: [
      "Implements a complete blockchain with SHA-256 hashing, block validation, and cryptographic chain linking to ensure data immutability.",
      "Features a web-based submission system with HTML forms for attendees to register their event participation through a Go HTTP server.",
      "Includes persistent JSON storage with automatic blockchain state saving and loading between application restarts.",
      "Provides QR code generation functionality to create quick links for easy access to the certification submission forms.",
      "Designed with extensible architecture supporting planned features like PostgreSQL integration, Rust validation engine, and React frontend"
    ]
  },
  {
    title: "MOODSIC - Emotion Detecting Music Player",
    repoUrl: "https://devpost.com/software/moodsic-pjdgzm",
    description: "A machine learning based collision avoidance simulation for satellites in low earth orbit.",
    image: "/projects/Moodsic.png",
    languages: ["Python", "Django", "Typescript", "React", "OpenCV"],
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
    repoUrl: "https://github.com/dylandhw/imgcap",
    description: "A PyTorch-based image captioning model using CNN encoder and LSTM decoder architecture trained on the Flickr8K dataset to generate natural language descriptions of images.",
    image: "",
    languages: ["Python", "PyTorch"],
    details: [
      "Implements an EncoderCNN class using pre-trained Inception v3 to extract visual features from input images and map them to embedding space.",
      "Features a DecoderRNN class with LSTM layers that processes image features and generates sequential word predictions for caption generation.",
      "Combines encoder and decoder in a unified pipeline (crpipe) class that handles end-to-end training and inference for image-to-text translation.",
      "Includes training infrastructure with configurable hyperparameters, checkpoint saving/loading, and TensorBoard integration for monitoring training progress.",
      "Provides caption generation functionality with beam search capabilities and vocabulary mapping to convert token predictions back to readable text."
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
                  Check it out
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