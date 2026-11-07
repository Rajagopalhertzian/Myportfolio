'use client'

import { motion } from 'framer-motion'
import { 
  Github, Linkedin, Mail, ExternalLink, 
  Brain, Bot, Sparkles, Heart, 
  ChevronUp, Terminal, Network
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Quick Links': [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Tech Stack', href: '#tech' },
      { label: 'Projects', href: '#projects' },
      { label: 'Experience', href: '#experience' },
      { label: 'Contact', href: '#contact' },
    ],
    'Gen AI Focus': [
      { label: 'RAG Systems', href: '#projects' },
      { label: 'Agentic AI', href: '#projects' },
      { label: 'MCP Integration', href: '#projects' },
      { label: 'LLM Evaluation', href: '#projects' },
      { label: 'Voice AI', href: '#projects' },
      { label: 'Multi-Agent', href: '#projects' },
    ],
    'Connect': [
      { label: 'GitHub', href: 'https://github.com/Rajagopalhertzian', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/rajagopals', external: true },
      { label: 'Email', href: 'mailto:rajagopals.ai@gmail.com', external: true },
    ],
  }

  return (
    <footer className="relative border-t border-white/10">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-neon-cyan/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-neon-purple/5 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/2 left-1/2 w-96 h-96 rounded-full bg-neon-pink/3 blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 font-display font-bold text-xl gradient-text mb-4">
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00f0ff 0%, #8b5cf6 50%, #ec4899 100%)' }}
              >
                <Brain className="w-5 h-5 text-dark-300" />
              </motion.div>
              <span>Raja Gopal</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building Intelligent Systems. Engineering Autonomous AI.
            </p>
            <p className="text-xs text-muted-foreground/70 font-mono mb-6">
              Gen AI Engineer & Agentic AI Architect
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">Gen AI</span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-neon-purple/10 text-neon-purple border border-neon-purple/20">Agentic AI</span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-neon-pink/10 text-neon-pink border border-neon-pink/20">RAG</span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-neon-green/10 text-neon-green border border-neon-green/20">MCP</span>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com/Rajagopalhertzian" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-neon-cyan/10 hover:border-neon-cyan/30 hover:text-neon-cyan transition-all" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/rajagopals" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-neon-blue/10 hover:border-neon-blue/30 hover:text-neon-blue transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:rajagopals.ai@gmail.com" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-neon-pink/10 hover:border-neon-pink/30 hover:text-neon-pink transition-all" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {footerLinks['Quick Links'].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="block text-sm text-muted-foreground hover:text-neon-cyan transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Gen AI Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Gen AI & Agentic AI</h4>
            <div className="flex flex-wrap gap-2">
              {footerLinks['Gen AI Focus'].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-muted-foreground border border-white/10 hover:border-neon-cyan/30 hover:text-neon-cyan transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <nav className="space-y-2 mb-8">
              {footerLinks['Connect'].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-cyan transition-colors"
                >
                  {link.label === 'GitHub' && <Github className="w-4 h-4" />}
                  {link.label === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                  {link.label === 'Email' && <Mail className="w-4 h-4" />}
                  {link.label}
                  {link.external && <ExternalLink className="w-3 h-3 opacity-50" />}
                </motion.a>
              ))}
            </nav>

            {/* Live Stats */}
            <div className="card-glass p-4">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-neon-pink" />
                Live Stats
              </h4>
              <div className="grid grid-cols-2 gap-3 text-center">
                <StatItem value="34" label="Public Repos" icon={<Github className="w-4 h-4" />} color="neon-cyan" />
                <StatItem value="11" label="Gen AI Projects" icon={<Brain className="w-4 h-4" />} color="neon-purple" />
                <StatItem value="6+" label="RAG Pipelines" icon={<Network className="w-4 h-4" />} color="neon-pink" />
                <StatItem value="4+" label="MCP Servers" icon={<Terminal className="w-4 h-4" />} color="neon-green" />
              </div>
              <p className="text-xs text-muted-foreground/60 mt-3 text-center">
                Auto-updated via GitHub Actions every 6 hours
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative my-8"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-dark-200">
            <span className="text-xs font-mono text-muted-foreground/50">2024 — {currentYear}</span>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Raja Gopal S. All rights reserved.</span>
            <span className="text-neon-cyan/50">|</span>
            <span className="font-mono">Built with Next.js 14, Three.js, Framer Motion</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#home" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-neon-cyan/10 hover:border-neon-cyan/30 hover:text-neon-cyan transition-all" aria-label="Back to top">
              <ChevronUp className="w-5 h-5" />
            </a>
            
            <div className="flex items-center gap-1 text-xs text-muted-foreground/70">
              <Heart className="w-3.5 h-3.5 text-neon-pink" />
              <span>Crafted for the Gen AI community</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

function StatItem({ value, label, icon, color }: { value: string; label: string; icon: React.ReactNode; color: string }) {
  return (
    <div className="p-2 rounded-xl bg-white/5 border border-white/5">
      <div className={`text-${color} mb-1`}>{icon}</div>
      <div className="text-xl font-display font-bold gradient-text">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )
}