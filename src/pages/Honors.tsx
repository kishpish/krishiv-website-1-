
import React from 'react';
import { BriefcaseIcon, AwardIcon, GraduationCapIcon, StarIcon, CodeIcon, DatabaseIcon, GlobeIcon } from 'lucide-react';

const Honors = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Honors & Experiences</h1>

        {/* Professional Experience Section */}
        <div className="mb-12">
          <div className="section-heading">
            <BriefcaseIcon className="section-icon" size={28} />
            <h2>Professional Experience</h2>
          </div>
          
          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-title">
                <CodeIcon size={20} className="text-magenta" />
                <span>ML & Computational Biology Research at UT Austin Oden Institute</span>
              </div>
              <div className="experience-date">
                <span>Current</span>
              </div>
            </div>
            <div className="experience-company">Oden Institute under Dr. Chandrajit Bajaj</div>
            <p className="experience-description">
              Working to develop a Reinforcement Learning Based model to design antibodies.
            </p>
          </div>
          
          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-title">
                <GlobeIcon size={20} className="text-magenta" />
                <span>Data Science & Analytics Internship</span>
              </div>
              <div className="experience-date">
                <span>May 2024 - Aug 2024</span>
              </div>
            </div>
            <div className="experience-company">Austin Energy</div>
            <p className="experience-description">
              Applied programming and data analytics skills in an on-site internship in Austin, Texas.
            </p>
          </div>
        </div>
        
        {/* Technical Skills Section */}
        <div>
          <div className="section-heading">
            <CodeIcon className="section-icon" size={28} />
            <h2>Technical Skills</h2>
          </div>
          
          <div className="experience-card">
            <div className="experience-title mb-3">
              <CodeIcon size={20} className="text-magenta" />
              <span>Machine Learning & Deep Learning</span>
            </div>
            <p className="experience-description">
              Expertise in PyTorch, TensorFlow, and specialized models for protein structure prediction and design.
            </p>
          </div>
          
          <div className="experience-card">
            <div className="experience-title mb-3">
              <CodeIcon size={20} className="text-magenta" />
              <span>Computational Biology Tools</span>
            </div>
            <p className="experience-description">
              Proficient with ESM-3, ProteinMPNN, BindCraft, and other computational biology frameworks.
            </p>
          </div>
          
          <div className="experience-card">
            <div className="experience-title mb-3">
              <GraduationCapIcon size={20} className="text-magenta" />
              <span>Academic Publications</span>
            </div>
            <p className="experience-description">
              Multiple articles published on protein modeling, AI in computational biology, and innovative research methodologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honors;
