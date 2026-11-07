'use client'

import { motion } from 'framer-motion'
import { 
  Building2, Briefcase, Award, Code2, 
  Brain, Bot, Search, Database, 
  GraduationCap, ChevronRight, ExternalLink,
  Github, Linkedin, Calendar, MapPin
} from 'lucide-react'

const experience = [
  {
    id: 'avani',
    role: 'Machine Learning Engineer',
    company: 'Avani',
    period: '2023 — Present',
    location: 'India 🇮🇳',
    type: 'Full-time',
    description: 'Leading Gen AI and Agentic AI initiatives, building production RAG systems, multi-agent orchestration platforms, and voice AI applications.',
    achievements: [
      'Architected Enterprise RAG Platform with hybrid retrieval (Vector + BM25 + SQL) and LangGraph multi-agent orchestration',
      'Built Hybrid RAG CLI with Reciprocal Rank Fusion and MCP server integration for agentic documentation retrieval',
      'Developed RAGDoc MCP Server providing document intelligence tools (search, extract, summarize) via Model Context Protocol',
      'Created Voice Agent for hospital booking using Twilio + Groq + local STT/TTS (zero OpenAI costs)',
      'Designed Docling + RAGAS evaluation-driven RAG pipeline with Streamlit dashboard',
      'Established ML engineering practices: CI/CD, observability (OTel/Grafana), testing, code quality (Ruff/mypy/bandit)',
    ],
    technologies: ['Python', 'LangGraph', 'LangChain', 'MCP', 'FAISS', 'Qdrant', 'ChromaDB', 'RAGAS', 'FastAPI', 'Docker', 'AWS', 'Groq', 'Twilio'],
    icon: Building2,
    color: 'neon-cyan',
  },
  {
    id: 'research',
    role: 'AI Research & Development',
    company: 'Independent / Open Source',
    period: '2021 — Present',
    location: 'Remote',
    type: 'Research',
    description: 'Active contributor to Gen AI and Agentic AI open source ecosystem. Building tools, frameworks, and templates for the community.',
    achievements: [
      'Published 11+ Gen AI / Agentic AI repositories with 34 total public repos',
      'Built Multi-Agent RAG System exploring LangGraph agent coordination patterns',
      'Created Agent Starter RAG+Eval template for production agentic RAG systems',
      'Developed AICortex and Rag_from_Scratch for foundational RAG research',
      'Contributed to MCP ecosystem with ragdoc-mcp and production-agent-skills',
      'Regular speaker/writer on Gen AI engineering, RAG evaluation, and agentic architectures',
    ],
    technologies: ['LangGraph', 'LangChain', 'MCP', 'RAGAS', 'DeepEval', 'FAISS', 'Streamlit', 'Groq', 'Ollama'],
    icon: Brain,
    color: 'neon-purple',
  },
  {
    id: 'education',
    role: 'Computer Science & Engineering Graduate',
    company: 'University',
    period: '2019 — 2023',
    location: 'India 🇮🇳',
    type: 'Education',
    description: 'Strong foundation in Machine Learning, Deep Learning, Computer Vision, and Software Engineering.',
    achievements: [
      'Capstone: Medical Image Captioning using GRU + Attention for X-ray finding extraction',
      'Research: World GDP Prediction using ML forecasting models',
      'Project: Snake Game with Reinforcement Learning (Q-Learning)',
      'Certifications: Data Science (Besant Technologies), Data Science & Analytics (NASSCOM), AI (Immensphere), Python (GUVI)',
      'Strong fundamentals: CNNs, Transformers, RNNs, RL, Optimization, MLOps',
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    icon: GraduationCap,
    color: 'neon-green',
  },
]

const certifications = [
  { name: 'Data Science', issuer: 'Besant Technologies', year: '2024', icon: Award },
  { name: 'Data Science and Analytics', issuer: 'NASSCOM', year: '2024', icon: Award },
  { name: 'Artificial Intelligence', issuer: 'Immensphere', year: '2023', icon: Brain },
  { name: 'Python Programming', issuer: 'GUVI', year: '2023', icon: Code2 },
]

export function Experience() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full text-sm font-mono text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 mb-4">
            04 / EXPERIENCE & JOURNEY
          </span>
          <h2 className="section-title">Experience & Journey</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From research foundations to production Gen AI systems — building the future of autonomous AI.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan/50 via-neon-purple/30 to-neon-pink/50" />
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2">
                  <div className={`w-4 h-4 rounded-full border-4 bg-dark-200 ${exp.color}/50`} />
                  <div className={`absolute -top-0.5 -left-0.5 w-5 h-5 rounded-full border-2 ${exp.color}`} />
                </div>
                
                <div className="card-glass p-6 glow-border">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-${exp.color} bg-${exp.color}/10 border border-${exp.color}/20`}>
                        <exp.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold">{exp.role}</h3>
                        <p className="text-neon-cyan font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground sm:ml-auto">
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${exp.color}/30 text-${exp.color} bg-${exp.color}/10`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neon-cyan mb-3 uppercase tracking-wider">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <ChevronRight className={`w-4 h-4 flex-shrink-0 mt-0.5 ${exp.color}/70`} />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-neon-cyan mb-3 uppercase tracking-wider">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.03 }}
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${exp.color}/30 text-${exp.color} bg-${exp.color}/10`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24"
        >
          <div className="card-glass p-6 glow-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-neon-pink bg-neon-pink/10 border border-neon-pink/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Certifications</h3>
                <p className="text-muted-foreground">Continuous learning in Data Science, AI, and Engineering</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-glass p-4 text-center"
                >
                  <cert.icon className="w-8 h-8 mx-auto mb-3 text-neon-pink" />
                  <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-neon-cyan/70 font-mono mt-1">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}