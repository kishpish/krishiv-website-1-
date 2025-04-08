
import React from 'react';
import { Award, GraduationCap, Briefcase, Star, Code } from 'lucide-react';

const Honors = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Honors & Experiences</h1>
        
        <div className="grid grid-cols-1 gap-8 mb-16">
          <div className="bg-[#282c36] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Research Experience</h2>
            <ul className="space-y-8">
              <li className="flex">
                <Briefcase className="text-magenta mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold">ML & Computational Biology Research at UT Austin Oden Institute</h3>
                  <p className="text-gray-400 mb-2">Current</p>
                  <p className="text-gray-300">
                    Working under Dr. Chandrajit Bajaj to develop Reinforcement Learning Based models for antibody design.
                  </p>
                </div>
              </li>
              <li className="flex">
                <Briefcase className="text-magenta mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold">TEM-171 β-Lactamase Protein Inhibitors Research</h3>
                  <p className="text-gray-400 mb-2">2024</p>
                  <p className="text-gray-300">
                    De Novo Structure-Based Design of protein inhibitors using integrated deep learning and multi-scale simulations to combat bacterial resistance.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#282c36] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Honors & Awards</h2>
            <ul className="space-y-8">
              <li className="flex">
                <Award className="text-magenta mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold">Siemens Competition Semifinalist</h3>
                  <p className="text-gray-400 mb-2">2024</p>
                  <p className="text-gray-300">
                    Recognized for outstanding research in computational biology.
                  </p>
                </div>
              </li>
              <li className="flex">
                <Award className="text-magenta mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold">AI4Science Competition Winner</h3>
                  <p className="text-gray-400 mb-2">2023</p>
                  <p className="text-gray-300">
                    First place in a competition focusing on AI applications in scientific research.
                  </p>
                </div>
              </li>
              <li className="flex">
                <Star className="text-magenta mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold">Presidential Scholar</h3>
                  <p className="text-gray-400 mb-2">2023</p>
                  <p className="text-gray-300">
                    Recognized for academic excellence and research contributions.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#282c36] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Technical Skills</h2>
            <ul className="space-y-8">
              <li className="flex">
                <Code className="text-magenta mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold">Machine Learning & Deep Learning</h3>
                  <p className="text-gray-300">
                    Expertise in PyTorch, TensorFlow, and specialized models for protein structure prediction and design.
                  </p>
                </div>
              </li>
              <li className="flex">
                <Code className="text-magenta mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold">Computational Biology Tools</h3>
                  <p className="text-gray-300">
                    Proficient with ESM-3, ProteinMPNN, BindCraft, and other computational biology frameworks.
                  </p>
                </div>
              </li>
              <li className="flex">
                <GraduationCap className="text-magenta mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold">Academic Publications</h3>
                  <p className="text-gray-300">
                    Multiple articles published on protein modeling, AI in computational biology, and innovative research methodologies.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honors;
