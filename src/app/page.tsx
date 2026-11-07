'use client'

import { motion } from 'framer-motion'
import { 
  Brain, Zap, Bot, Network, 
  Github, Linkedin, Mail, ExternalLink,
  ChevronDown, Sparkles, Terminal,
  ChevronRight, Target, Rocket,
  Layers, Cpu, Database, Cloud,
  Code2, Search, Wand2, Mic2
} from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { 
  NeuralNetwork, 
  FloatingParticles, 
  GlowingOrb,
  TechRing 
} from '@/components/three-scene'
import { TechStack } from '@/components/TechStack'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Contact } from '@/components/Contact'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <Navigation items={navItems} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Three.js Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas
            camera={{ position: [0, 0, 50], fov: 50 }}
            style={{ width: '100%', height: '100%' }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 20]} intensity={1} color="#00f0ff" />
            <directionalLight position={[-10, -10, -20]} intensity={0.5} color="#8b5cf6" />
            <NeuralNetwork nodeCount={80} connectionDistance={15} />
            <FloatingParticles count={200} spread={100} />
            <GlowingOrb position={[-25, 15, -10]} color="#00f0ff" size={8} />
            <GlowingOrb position={[25, -15, -10]} color="#8b5cf6" size={6} />
            <GlowingOrb position={[0, -25, -15]} color="#ec4899" size={5} />
          </Canvas>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-dark-200/50 via-transparent to-dark-200/50" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-neon-green"
              />
              <span className="text-sm font-mono text-neon-cyan/80 tracking-wider">
                Gen AI Engineer & Agentic AI Architect
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
          >
            <span className="block">Building Intelligent Systems.</span>
            <span className="block gradient-text">Engineering Autonomous AI.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 font-medium"
          >
            Specializing in <span className="gradient-text">Generative AI</span>, <span className="gradient-text">Agentic AI</span>, 
            <span className="gradient-text">RAG Systems</span>, <span className="gradient-text">Multi-Agent Orchestration</span>, 
            and <span className="gradient-text">LLM Applications</span> at scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a
              href="#projects"
              className="btn-primary group"
            >
              <span>View Projects</span>
              <ChevronRight className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="btn-secondary group"
            >
              <span>Get In Touch</span>
              <Mail className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            <StatCard 
              icon={<Brain className="w-6 h-6" />} 
              value="12+" 
              label="Gen AI Projects" 
              color="neon-cyan" 
            />
            <StatCard 
              icon={<Bot className="w-6 h-6" />} 
              value="8+" 
              label="Agentic Systems" 
              color="neon-purple" 
            />
            <StatCard 
              icon={<Network className="w-6 h-6" />} 
              value="6+" 
              label="RAG Pipelines" 
              color="neon-pink" 
            />
            <StatCard 
              icon={<Zap className="w-6 h-6" />} 
              value="4+" 
              label="MCP Servers" 
              color="neon-orange" 
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-6 h-6 text-neon-cyan/60" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full text-sm font-mono text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 mb-4">
              01 / ENGINEERING IDENTITY
            </span>
            <h2 className="section-title">Engineering Identity</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-glass h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5" />
                <div className="relative z-10 space-y-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">RAJA GOPAL S</h3>
                    <p className="text-neon-cyan font-medium">Machine Learning Engineer · Avani</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    I engineer intelligent applications across <span className="text-foreground font-medium">Machine Learning</span>, 
                    <span className="text-foreground font-medium">Deep Learning</span>, and <span className="text-foreground font-medium">Computer Vision</span>, 
                    with deep specialization in <span className="gradient-text">Generative AI</span> and <span className="gradient-text">Agentic AI Systems</span>.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    My focus is on <span className="text-foreground font-medium">systems that go beyond generating responses</span> — systems capable of:
                  </p>

                  <ul className="space-y-3">
                    {[
                      { icon: Brain, text: 'Retrieving & reasoning over domain knowledge (RAG, Hybrid Search)' },
                      { icon: Bot, text: 'Planning & executing multi-step workflows (Agentic Orchestration)' },
                      { icon: Search, text: 'Interacting with external tools via MCP, Function Calling, APIs' },
                      { icon: Rocket, text: 'Deploying at scale with Docker, FastAPI, Streamlit, Cloud (AWS/Azure)' },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-neon-cyan" />
                        </div>
                        <span>{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs font-mono text-neon-cyan/70 tracking-wider">
                      Philosophy: Research → Architecture → Engineering → Deployment → Observability
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="card-glass">
                  <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-neon-cyan" />
                    Specialization Map
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Generative AI', icon: Brain, color: 'neon-cyan' },
                      { label: 'Agentic AI / Multi-Agent', icon: Bot, color: 'neon-purple' },
                      { label: 'LLM Applications', icon: Terminal, color: 'neon-pink' },
                      { label: 'RAG Systems (Hybrid)', icon: Search, color: 'neon-green' },
                      { label: 'Computer Vision', icon: Cpu, color: 'neon-orange' },
                      { label: 'Deep Learning', icon: Layers, color: 'neon-cyan' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-neon-cyan/30 transition-all"
                      >
                        <item.icon className={`w-5 h-5 mb-2 text-${item.color}`} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="card-glass">
                  <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-neon-purple" />
                    Agentic & Gen AI Focus
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Agent Orchestration',
                      'MCP Integrations',
                      'Tool-Based Workflows',
                      'Autonomous Execution',
                      'LangGraph / LangChain',
                      'LLM Evaluation (RAGAS)',
                      'Multi-Agent Systems',
                      'AI Automation',
                    ].map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="px-3 py-1.5 rounded-full text-sm font-medium bg-neon-purple/10 text-neon-purple border border-neon-purple/20 hover:bg-neon-purple/20 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="card-glass">
                  <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                    <Wand2 className="w-5 h-5 text-neon-pink" />
                    Currently Exploring
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Self-Correcting Agentic RAG',
                      'Multi-Agent MCP Ecosystem',
                      'LLM Observability Platform',
                      'Automated Prompt Optimization (DSPy)',
                      'Enterprise Gen AI Starter Kit',
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="relative py-24 md:py-32 px-6">
        <TechStack />
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 md:py-32 px-6">
        <Projects />
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-24 md:py-32 px-6">
        <Experience />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 md:py-32 px-6">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

function StatCard({ icon, value, label, color }: { icon: React.ReactNode; value: string; label: string; color: string }) {
  return (
    <motion.div
      className="card-glass p-4"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-center mb-2">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-${color}/10 text-${color}`}>
          {icon}
        </div>
      </div>
      <div className="text-3xl font-display font-bold gradient-text">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  )
}