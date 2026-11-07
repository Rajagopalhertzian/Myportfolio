'use client'

import { motion } from 'framer-motion'
import { 
  Mail, Linkedin, Github, ExternalLink, 
  MapPin, MessageSquare, Send, Brain, Bot,
  Sparkles, CheckCircle
} from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // For demo, always succeed
    setFormState('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setFormState('idle'), 3000)
  }

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      title: 'Email',
      value: 'rajagopals.ai@gmail.com',
      description: 'Best for project inquiries & collaborations',
      color: 'neon-cyan',
      href: 'mailto:rajagopals.ai@gmail.com',
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/rajagopals',
      description: 'Professional network & updates',
      color: 'neon-blue',
      href: 'https://linkedin.com/in/rajagopals',
    },
    {
      id: 'github',
      icon: Github,
      title: 'GitHub',
      value: 'github.com/Rajagopalhertzian',
      description: '34 repos · Gen AI & Agentic AI',
      color: 'neon-purple',
      href: 'https://github.com/Rajagopalhertzian',
    },
  ]

  const focusAreas = [
    { icon: Brain, label: 'Gen AI Consulting', desc: 'RAG, LLM Apps, Evaluation' },
    { icon: Bot, label: 'Agentic Systems', desc: 'Multi-Agent, MCP, Orchestration' },
    { icon: Sparkles, label: 'Voice AI', desc: 'STT/TTS, Twilio, Real-time' },
    { icon: MessageSquare, label: 'Open Source', desc: 'Contributions, Templates, Tools' },
  ]

  return (
    <section className="relative" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full text-sm font-mono text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 mb-4">
            05 / LET'S BUILD TOGETHER
          </span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Open to Gen AI / Agentic AI roles, consulting, collaborations, and interesting conversations about the future of autonomous AI.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Form */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-display font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {contactMethods.map((method, i) => (
                  <motion.a
                    key={method.id}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group relative card-glass p-4 flex items-center gap-4 glow-border"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-${method.color} bg-${method.color}/10 border border-${method.color}/20 group-hover:scale-110 transition-transform`}>
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-foreground">{method.title}</h4>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
                      </div>
                      <p className="text-sm font-mono text-neon-cyan/80">{method.value}</p>
                      <p className="text-xs text-muted-foreground">{method.description}</p>
                    </div>
                    <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Focus Areas */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-display font-bold mb-6">I'm Focused On</h3>
              <div className="grid grid-cols-2 gap-3">
                {focusAreas.map((area, i) => (
                  <motion.div
                    key={area.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="card-glass p-4 text-center"
                  >
                    <area.icon className="w-6 h-6 mx-auto mb-2 text-neon-cyan" />
                    <h4 className="font-semibold text-sm">{area.label}</h4>
                    <p className="text-xs text-muted-foreground">{area.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-glass p-6 md:p-8 glow-border h-full">
              <h3 className="text-xl font-display font-bold mb-2">Send a Message</h3>
              <p className="text-muted-foreground mb-6">I read every message and typically respond within 24 hours.</p>

              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-neon-green/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-neon-green" />
                  </div>
                  <h4 className="text-xl font-display font-bold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      label="Name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name"
                      required
                      disabled={formState === 'submitting'}
                    />
                    <FormField
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                      disabled={formState === 'submitting'}
                    />
                  </div>
                  <FormField
                    label="Subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="Project inquiry, collaboration, etc."
                    required
                    disabled={formState === 'submitting'}
                  />
                  <FormField
                    label="Message"
                    type="textarea"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about your project, idea, or just say hi..."
                    rows={5}
                    required
                    disabled={formState === 'submitting'}
                  />
                  <motion.button
                    type="submit"
                    disabled={formState === 'submitting'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {formState === 'submitting' ? (
                        <>
                          <motion.div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/20 text-neon-green border border-neon-green/30">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-neon-green"
              />
              <span className="font-medium">Available for Opportunities</span>
            </div>
            <span className="text-sm text-muted-foreground">Gen AI Engineer • Agentic AI Architect • ML Engineer</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FormField({ 
  label, 
  type, 
  name, 
  value, 
  onChange, 
  placeholder, 
  required, 
  disabled,
  rows 
}: { 
  label: string
  type: 'text' | 'email' | 'textarea'
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder: string
  required?: boolean
  disabled?: boolean
  rows?: number
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-2">
        {label} {required && <span className="text-neon-pink">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows || 4}
          className="w-full px-4 py-3 rounded-xl bg-dark-300/50 border border-white/10 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan focus:outline-none text-foreground placeholder:text-muted-foreground/50 disabled:opacity-50 transition-all resize-none font-sans"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className="w-full px-4 py-3 rounded-xl bg-dark-300/50 border border-white/10 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan focus:outline-none text-foreground placeholder:text-muted-foreground/50 disabled:opacity-50 transition-all"
        />
      )}
    </div>
  )
}