import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  title: string;
  repoUrl?: string;
  liveUrl?: string;
  description: string;
  languages: string[];
  details: string[];
  image?: string;
}
// className="text-blue-600 hover:text-blue-800"
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
    description: "detects a user's emotional state through facial expression analysis using a webcam and recommends a song that matches or elevates their mood by integrating with Spotify's API.",
    image: "/projects/Moodsic.png",
    languages: ["Python", "Django", "Typescript", "React", "OpenCV"],
    details: [
      "Frontend developed using React for a responsive UI with live webcam integration.",
      "Backend built with Flask (Python) to handle routing, process emotion data, and interact with Spotify’s API.",
      "Emotion detection implemented using OpenCV and a deep learning-based facial emotion recognition model.",
      "Spotify Web API used for authenticating, accessing playlists, and retrieving track details based on mood and genre.",
      "Challenges included emotion detection accuracy, managing Spotify API limitations, ensuring real-time performance, and achieving cross-browser compatibility."
    ]
  },
{
  "title": "GitHub Issues CLI",
  "repoUrl": "https://github.com/dylandhw/issues",
  "description": "A command-line tool for listing, creating, and managing GitHub issues directly from the terminal.",
  "image": "",
  "languages": ["Rust"],
  "details": [
    "Fetches and displays a list of issues from a GitHub repository.",
    "Supports filtering issues by status, labels, or assignee.",
    "Allows creating new issues without visiting GitHub web interface.",
    "Provides summary statistics like open vs closed issues and issue count per label.",
    "Designed as a lightweight CLI tool to streamline issue management for developers."
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
          <div key={index} className="space-y-4 p-6 border border-gray-200 rounded-xl bg-white/60 hover:bg-white shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 flex items-center gap-3">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.languages.map((lang, i) => (
                <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                  {lang}
                </span>
              ))}
            </div>
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
            
            <p className="text-base text-gray-700">{project.description}</p>
            
            <hr className="my-2 border-gray-100" />

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