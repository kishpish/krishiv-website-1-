
import React from 'react';
import { File, Calendar, ExternalLink, BookOpen, FileText } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Papers = () => {
  const notionLink = "https://www.notion.so/Welcome-to-my-Page-on-Applications-of-AI-ML-with-Computational-Biology-501e7669ba0e4a669200651dd3a65d46";

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="text-foreground">Papers & </span>
          <span className="text-magenta">Articles</span>
        </h1>
        
        <div className="mb-16">
          <Card className="bg-[#282c36] shadow-lg mb-10 hover:border-magenta transition-colors duration-300 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                <div className="flex items-center">
                  <FileText className="text-magenta mr-3" size={28} />
                  <h2 className="text-2xl font-bold">Research Paper</h2>
                </div>
                <span className="bg-magenta/20 text-magenta py-1 px-4 rounded-full text-sm mt-3 md:mt-0">
                  2024
                </span>
              </div>
              
              <Separator className="mb-6 bg-gray-700" />
              
              <h3 className="text-xl font-semibold mb-6">De Novo Structure-Based Design of TEM-171 β-Lactamase Protein Inhibitors Using Integrated Deep Learning and Multi-Scale Simulations to Combat Bacterial Resistance</h3>
              <a 
                href="https://www.linkedin.com/in/krishiv-potluri-36821a2a8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-magenta hover:text-magenta/80 font-medium flex items-center gap-2 group"
              >
                <span>Read the full paper</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="text-magenta" size={24} />
            <span>Articles</span>
          </h2>
          
          <Card className="bg-[#282c36] shadow-lg mb-8 hover:border-magenta transition-colors duration-300 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold">A Reflection/Guide on ESM-3 - An AI Model for Protein Discovery</h3>
                <div className="flex items-center text-magenta text-sm bg-magenta/10 py-1 px-3 rounded-full">
                  <Calendar size={14} className="mr-2" />
                  09/17/2024
                </div>
              </div>
              
              <p className="text-gray-400 mb-6">
                <strong>Article Post By Krishiv Potluri 09/17/2024</strong>
              </p>
              
              <Separator className="mb-6 bg-gray-700" />
              
              <h4 className="text-lg font-semibold mb-4">The Introduction to the Evolution of Protein Modeling: ESM-3</h4>
              <p className="text-gray-300 mb-4">
                In the rapidly advancing modern field of computational drug discovery, ESM-3 (Evolutionary Scale Modeling 3)—developed by EvolutionaryScale AI Research—represents a major leap forward in our ability to understand and predict protein structures and functions. This comprehensive review will go deep into ESM-3's capabilities, limitations, and potential applications, focusing particularly on its role in drug discovery and protein modeling.
              </p>
              <a 
                href={notionLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-magenta hover:text-magenta/80 font-medium flex items-center gap-2 group"
              >
                <span>Read full article</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </CardContent>
          </Card>

          <Card className="bg-[#282c36] shadow-lg mb-8 hover:border-magenta transition-colors duration-300 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold">Long-Range Capability of ProteinMPNN's Deep Learning Architecture</h3>
                <div className="flex items-center text-magenta text-sm bg-magenta/10 py-1 px-3 rounded-full">
                  <Calendar size={14} className="mr-2" />
                  09/21/2024
                </div>
              </div>
              
              <p className="text-gray-400 mb-6">
                <strong>By: Krishiv Potluri 09/21/2024</strong>
              </p>
              
              <Separator className="mb-6 bg-gray-700" />
              
              <h4 className="text-lg font-semibold mb-4">ProteinMPNN Architecture</h4>
              <p className="text-gray-300 mb-4">
                In the evolving field computational protein design, ProteinMPNN (Protein Message Passing Neural Network) has become recognized through its architecture offering impressive capabilities in predicting and designing protein sequences. While ProteinMPNN boasts numerous advantages, this article goes deeply into one of its most transformative features: the ability to capture long-range interactions.
              </p>
              <a 
                href={notionLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-magenta hover:text-magenta/80 font-medium flex items-center gap-2 group"
              >
                <span>Read full article</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </CardContent>
          </Card>

          <Card className="bg-[#282c36] shadow-lg hover:border-magenta transition-colors duration-300 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold">BindCraft: The Essential Guide to Protein Binding Design Metrics and Optimization</h3>
                <div className="flex items-center text-magenta text-sm bg-magenta/10 py-1 px-3 rounded-full">
                  <Calendar size={14} className="mr-2" />
                  01/13/2025
                </div>
              </div>
              
              <p className="text-gray-400 mb-6">
                <strong>Article Post By Krishiv Potluri 01/13/2025</strong>
              </p>
              
              <Separator className="mb-6 bg-gray-700" />
              
              <h4 className="text-lg font-semibold mb-4">Introduction</h4>
              <p className="text-gray-300 mb-4">
                BindCraft represents a significant advancement in protein binding design, employing a sophisticated multi-stage optimization process alongside numerous metrics to ensure reliable protein-protein interactions. This article delves into BindCraft's progression stages and the critical metrics that determine successful protein binding designs.
              </p>
              <a 
                href={notionLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-magenta hover:text-magenta/80 font-medium flex items-center gap-2 group"
              >
                <span>Read full article</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Papers;
