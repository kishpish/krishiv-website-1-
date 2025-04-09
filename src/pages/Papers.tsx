
import React from 'react';
import { File, Calendar, ExternalLink } from 'lucide-react';

const Papers = () => {
  const notionLink = "https://www.notion.so/Welcome-to-my-Page-on-Applications-of-AI-ML-with-Computational-Biology-501e7669ba0e4a669200651dd3a65d46";

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Papers & Articles</h1>
        
        <div className="mb-16">
          <div className="bg-[#282c36] p-8 rounded-lg shadow-lg mb-10">
            <div className="flex items-center mb-4">
              <File className="text-magenta mr-3" size={24} />
              <h2 className="text-2xl font-bold">Research Paper</h2>
            </div>
            <h3 className="text-xl font-semibold mb-4">De Novo Structure-Based Design of TEM-171 β-Lactamase Protein Inhibitors Using Integrated Deep Learning and Multi-Scale Simulations to Combat Bacterial Resistance</h3>
            <a 
              href="https://www.linkedin.com/in/krishiv-potluri-36821a2a8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-magenta hover:text-opacity-80 font-medium underline flex items-center gap-1"
            >
              Read the full paper <ExternalLink size={16} />
            </a>
          </div>

          <h2 className="text-2xl font-bold mb-6">Articles</h2>
          
          <div className="bg-[#282c36] p-8 rounded-lg shadow-lg mb-8">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-semibold">A Reflection/Guide on ESM-3 - An AI Model for Protein Discovery</h3>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                09/17/2024
              </div>
            </div>
            <p className="text-gray-300 mb-8">
              <strong>Article Post By Krishiv Potluri 09/17/2024</strong>
            </p>
            <h4 className="text-lg font-semibold mb-4">The Introduction to the Evolution of Protein Modeling: ESM-3</h4>
            <p className="text-gray-300 mb-4">
              In the rapidly advancing modern field of computational drug discovery, ESM-3 (Evolutionary Scale Modeling 3)—developed by EvolutionaryScale AI Research—represents a major leap forward in our ability to understand and predict protein structures and functions. This comprehensive review will go deep into ESM-3's capabilities, limitations, and potential applications, focusing particularly on its role in drug discovery and protein modeling.
            </p>
            <a 
              href={notionLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-magenta hover:text-opacity-80 font-medium underline flex items-center gap-1"
            >
              Read full article <ExternalLink size={16} />
            </a>
          </div>

          <div className="bg-[#282c36] p-8 rounded-lg shadow-lg mb-8">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-semibold">Long-Range Capability of ProteinMPNN's Deep Learning Architecture</h3>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                09/21/2024
              </div>
            </div>
            <p className="text-gray-300 mb-8">
              <strong>By: Krishiv Potluri 09/21/2024</strong>
            </p>
            <h4 className="text-lg font-semibold mb-4">ProteinMPNN Architecture</h4>
            <p className="text-gray-300 mb-4">
              In the evolving field computational protein design, ProteinMPNN (Protein Message Passing Neural Network) has become recognized through its architecture offering impressive capabilities in predicting and designing protein sequences. While ProteinMPNN boasts numerous advantages, this article goes deeply into one of its most transformative features: the ability to capture long-range interactions.
            </p>
            <a 
              href={notionLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-magenta hover:text-opacity-80 font-medium underline flex items-center gap-1"
            >
              Read full article <ExternalLink size={16} />
            </a>
          </div>

          <div className="bg-[#282c36] p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-semibold">BindCraft: The Essential Guide to Protein Binding Design Metrics and Optimization</h3>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                01/13/2025
              </div>
            </div>
            <p className="text-gray-300 mb-8">
              <strong>Article Post By Krishiv Potluri 01/13/2025</strong>
            </p>
            <h4 className="text-lg font-semibold mb-4">Introduction</h4>
            <p className="text-gray-300 mb-4">
              BindCraft represents a significant advancement in protein binding design, employing a sophisticated multi-stage optimization process alongside numerous metrics to ensure reliable protein-protein interactions. This article delves into BindCraft's progression stages and the critical metrics that determine successful protein binding designs.
            </p>
            <a 
              href={notionLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-magenta hover:text-opacity-80 font-medium underline flex items-center gap-1"
            >
              Read full article <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Papers;
