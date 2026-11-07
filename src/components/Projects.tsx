'use client'

import { motion } from 'framer-motion'
import { 
  Github, ExternalLink, Brain, Bot, 
  Search, Database, Mic2, Code2,
  Terminal, Network, Wand2, Zap,
  CheckCircle, ArrowRight
} from 'lucide-react'

const projects = [
  {
    id: 'rag-enterprise',
    title: 'Enterprise RAG Platform',
    tagline: 'Production-grade RAG with Hybrid Retrieval + Multi-Agent Orchestration',
    description: 'A comprehensive enterprise RAG system featuring vector (FAISS/Qdrant) + BM25 + SQL hybrid search, LangGraph multi-agent orchestration (Retriever → Reranker → Generator → Evaluator), and full RAGAS + DeepEval evaluation pipeline.',
    longDescription: `Built for production deployment with enterprise-grade observability, this platform implements:
- Hybrid retrieval combining dense vectors (BGE/E5), sparse BM25, and SQL metadata filtering
- LangGraph state machine orchestrating specialized agents for retrieval, reranking, generation, and evaluation
- Automated RAGAS evaluation (Faithfulness, Answer Relevancy, Context Precision/Recall) on every deployment
- Full OpenTelemetry instrumentation → Tempo/Prometheus/Loki/Grafana stack
- Kubernetes-ready with Helm charts, Docker multi-stage builds, and GitHub Actions CI/CD
- Code quality: Ruff, Black, mypy, bandit, pip-audit`,
    icon: Brain,
    color: 'neon-cyan',
    gradient: 'from-neon-cyan/20 via-neon-purple/10 to-neon-pink/10',
    tags: ['LangGraph', 'FAISS', 'Qdrant', 'RAGAS', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Helm', 'EKS', 'OpenTelemetry'],
    github: 'https://github.com/Rajagopalhertzian/rag-enterprise',
    demo: null,
    featured: true,
    highlights: [
      'Hybrid Retrieval: Vector + BM25 + SQL',
      'Multi-Agent LangGraph Orchestration',
      'RAGAS + DeepEval Automated Evaluation',
      'Full Observability Stack (OTel → Grafana)',
      'Production K8s Deployment Ready',
    ],
    architecture: 'Hybrid RAG + Agentic Orchestration',
  },
  {
    id: 'hybrid-rag-cli',
    title: 'Hybrid RAG CLI for Agentic AI Docs',
    tagline: 'CLI Tool for Agentic AI Documentation Retrieval & Synthesis',
    description: 'A powerful CLI tool implementing hybrid retrieval (Dense BGE/E5 + Sparse BM25 + Reciprocal Rank Fusion) with LangGraph workflow for query decomposition and multi-hop reasoning. Exposes retrieval as MCP server for agent consumption.',
    longDescription: `Designed for technical documentation QA for AI engineering teams:
- Reciprocal Rank Fusion combining dense (BGE/E5 embeddings) and sparse (BM25) retrieval
- LangGraph workflow for intelligent query decomposition and multi-hop reasoning
- MCP (Model Context Protocol) server exposing search_documents, get_document, extract_entities tools
- Rich CLI interface with syntax highlighting, progress indicators, and formatted output
- Configurable retrieval parameters, chunking strategies, and reranking options
- Works with any markdown/documentation corpus`,
    icon: Terminal,
    color: 'neon-purple',
    gradient: 'from-neon-purple/20 via-neon-pink/10 to-neon-cyan/10',
    tags: ['LangGraph', 'FAISS', 'MCP', 'BM25', 'BGE', 'E5', 'RRF', 'Rich CLI'],
    github: 'https://github.com/Rajagopalhertzian/hybrid-rag_cli_for_agentic_ai_documentations',
    demo: null,
    featured: true,
    highlights: [
      'Reciprocal Rank Fusion (Dense + Sparse)',
      'LangGraph Query Decomposition',
      'MCP Server Integration',
      'Rich Interactive CLI',
      'Multi-Hop Reasoning',
    ],
    architecture: 'Hybrid Retrieval + Agentic CLI',
  },
  {
    id: 'ragdoc-mcp',
    title: 'RAGDoc MCP Server',
    tagline: 'Model Context Protocol Server for Document Intelligence',
    description: 'A production-ready MCP server providing document intelligence tools: search_documents, get_document, extract_entities, summarize. Features hybrid vector + keyword search over indexed corpus with Dockerized deployment supporting stdio and HTTP/SSE transports.',
    longDescription: `Built for seamless integration with AI assistants and agents:
- MCP Tools: search_documents (hybrid search), get_document (full content), extract_entities (NER), summarize (abstractive)
- Hybrid retrieval: ChromaDB vector search + BM25 keyword search with score fusion
- Compatible with Claude Desktop, Cursor, VS Code, and custom agents via stdio/HTTP/SSE
- Dockerized with multi-stage builds, health checks, and configurable transports
- FastMCP framework with Pydantic validation and async support
- Pluggable embedding models (SentenceTransformers, OpenAI, custom)`,
    icon: Network,
    color: 'neon-pink',
    gradient: 'from-neon-pink/20 via-neon-orange/10 to-neon-purple/10',
    tags: ['MCP', 'ChromaDB', 'FastMCP', 'SentenceTransformers', 'Docker', 'Pydantic', 'BM25'],
    github: 'https://github.com/Rajagopalhertzian/ragdoc-mcp',
    demo: null,
    featured: true,
    highlights: [
      '4 MCP Tools (Search, Get, Extract, Summarize)',
      'Hybrid Vector + Keyword Search',
      'Claude Desktop / Cursor / VS Code Compatible',
      'Dockerized stdio + HTTP/SSE Transports',
      'Pluggable Embedding Models',
    ],
    architecture: 'MCP Server + Hybrid Retrieval',
  },
  {
    id: 'voice-agent',
    title: 'Voice Agent for Hospital Booking',
    tagline: 'Twilio + FastAPI + Groq + Local STT/TTS Voice AI',
    description: 'End-to-end voice AI system for hospital appointment booking using Twilio Media Streams, faster-whisper (local STT), Groq LLM (GPT-OSS), and Windows SAPI TTS. Features agentic logic for booking, FAQ, and escalation via function calling.',
    longDescription: `Completely free/local stack — no OpenAI API costs:
- Voice Pipeline: Twilio Media Streams → faster-whisper (local) → Groq LLM → Windows SAPI TTS
- Agentic Logic: Appointment booking, FAQ handling, escalation via structured function calling
- Database: Excel-backed patient/appointment management system
- Free Tier Stack: Groq free tier (GPT-OSS models) + local inference (faster-whisper, SAPI)
- FastAPI backend with WebSocket handling for real-time audio streaming
- Configurable prompts, tool definitions, and conversation flows`,
    icon: Mic2,
    color: 'neon-orange',
    gradient: 'from-neon-orange/20 via-neon-cyan/10 to-neon-green/10',
    tags: ['Twilio', 'FastAPI', 'Groq', 'faster-whisper', 'SAPI TTS', 'WebSockets', 'Function Calling'],
    github: 'https://github.com/Rajagopalhertzian/voice_agent',
    demo: null,
    featured: true,
    highlights: [
      'Zero OpenAI Costs (Groq Free Tier + Local)',
      'Real-time Twilio Media Streams',
      'Local STT (faster-whisper) + TTS (SAPI)',
      'Function Calling for Booking Logic',
      'Excel-Backed Database',
    ],
    architecture: 'Voice AI + Agentic Booking',
  },
  {
    id: 'docling-ragas',
    title: 'Docling + RAGAS RAG Pipeline',
    tagline: 'Document Intelligence + Evaluation-Driven RAG',
    description: 'Streamlit-powered RAG pipeline using Docling for PDF parsing (structured markdown, tables, figures), FAISS + BM25 hybrid retrieval with cross-encoder reranking, and RAGAS metrics dashboard for faithfulness, relevancy, precision, and recall.',
    longDescription: `Evaluation-first approach to RAG development:
- Document Parsing: Docling converts PDFs → structured markdown with tables, figures, metadata preserved
- Retrieval: FAISS dense + BM25 sparse hybrid with cross-encoder reranking (bge-reranker)
- Evaluation: RAGAS dashboard with Faithfulness, Answer Relevancy, Context Precision, Context Recall
- UI: Streamlit for document ingestion, querying, evaluation visualization, and comparison
- Free/Local Stack: Groq LLM + local embeddings + FAISS (no API costs for evaluation)`,
    icon: Database,
    color: 'neon-green',
    gradient: 'from-neon-green/20 via-neon-cyan/10 to-neon-purple/10',
    tags: ['Docling', 'RAGAS', 'FAISS', 'BM25', 'Streamlit', 'Groq', 'Cross-Encoder'],
    github: 'https://github.com/Rajagopalhertzian/Docling-RAGAS-RAG-pipeline-with-Streamlit-UI',
    demo: null,
    featured: true,
    highlights: [
      'Docling PDF → Structured Markdown',
      'FAISS + BM25 Hybrid + Reranking',
      'RAGAS Metrics Dashboard',
      'Streamlit Interactive UI',
      'Evaluation-Driven Development',
    ],
    architecture: 'Doc Intelligence + Eval RAG',
  },
  {
    id: 'agent-starter',
    title: 'Agent Starter: RAG + Eval',
    tagline: 'Template for Agentic RAG with Built-in Evaluation',
    description: 'Production-ready starter kit for agentic RAG systems featuring ReAct agent with tool use (search, calculate, code), ChromaDB + LangChain retriever tool, and automated RAGAS + custom metrics evaluation on test sets.',
    longDescription: `Designed as a foundation for production agentic RAG:
- Agent Pattern: ReAct agent with structured tool use (search, calculator, code execution)
- RAG Integration: ChromaDB vector store with LangChain retriever as agent tool
- Evaluation: Automated RAGAS metrics + custom test suites with CI integration
- Template Structure: Modular, extensible, with clear separation of concerns
- Testing: pytest-based test framework with fixtures for agent behavior validation
- Deployment Ready: Docker, FastAPI serving, Streamlit demo UI`,
    icon: Wand2,
    color: 'neon-cyan',
    gradient: 'from-neon-cyan/20 via-neon-green/10 to-neon-purple/10',
    tags: ['LangGraph', 'LangChain', 'ChromaDB', 'RAGAS', 'ReAct', 'pytest', 'Docker'],
    github: 'https://github.com/Rajagopalhertzian/agent-starter-rag-eval',
    demo: null,
    featured: false,
    highlights: [
      'ReAct Agent with Tool Use',
      'ChromaDB Retriever Tool',
      'Automated RAGAS Evaluation',
      'pytest Test Framework',
      'Production Template Structure',
    ],
    architecture: 'Agentic RAG Starter Kit',
  },
  {
    id: 'multi-agent-rag',
    title: 'Multi-Agent RAG System',
    tagline: 'LangGraph Multi-Agent RAG with Specialized Agents',
    description: 'Early exploration of multi-agent RAG using LangGraph with specialized agents for query planning, retrieval, synthesis, and verification. Demonstrates agent coordination patterns for complex question answering.',
    longDescription: `Pioneering multi-agent RAG architecture:
- Query Planner Agent: Decomposes complex queries into sub-questions
- Retriever Agents: Specialized retrievers for different knowledge domains
- Synthesizer Agent: Combines retrieved context into coherent answers
- Verifier Agent: Fact-checks and validates synthesized responses
- LangGraph state machine coordinating agent handoffs
- Foundation for modern agentic RAG patterns`,
    icon: Bot,
    color: 'neon-purple',
    gradient: 'from-neon-purple/20 via-neon-pink/10 to-neon-cyan/10',
    tags: ['LangGraph', 'LangChain', 'Multi-Agent', 'RAG', 'Agent Coordination'],
    github: 'https://github.com/Rajagopalhertzian/Multi-agent-RAG-system',
    demo: null,
    featured: false,
    highlights: [
      '4 Specialized Agents',
      'LangGraph State Machine',
      'Query Planning + Decomposition',
      'Answer Verification Loop',
      'Early Agentic RAG Research',
    ],
    architecture: 'Multi-Agent RAG',
  },
]

export function Projects() {
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
            03 / FEATURED PROJECTS
          </span>
          <h2 className="section-title">Gen AI & Agentic AI Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Production systems, research explorations, and starter kits — each demonstrating 
            a different facet of building intelligent, autonomous AI applications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* All Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Rajagopalhertzian?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Repositories
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            {projects.length} featured projects · 34 total public repositories on GitHub
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative card-glass glow-border overflow-hidden ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* Gradient Accent Bar */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: `linear-gradient(180deg, ${project.color.replace('neon-', '')} 0%, ${project.color.replace('neon-', '')}aa 100%)` }}
      />

      {/* Visual/Icon Side */}
      <div className={`relative lg:w-2/5 flex items-center justify-center p-8 ${isEven ? 'lg:border-r lg:border-white/10' : 'lg:border-l lg:border-white/10'}`}>
        <div className="relative w-full max-w-xs">
          <div className={`aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
            <div className="relative z-10 flex items-center justify-center">
              <project.icon className="w-24 h-24 text-white/90 drop-shadow-[0_0_20px_rgba(0,0,0,0.3])" />
            </div>
          </div>
          
          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 -right-4"
          >
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30 backdrop-blur">
              {project.architecture}
            </span>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute -bottom-4 -left-4"
          >
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-neon-purple/20 text-neon-purple border border-neon-purple/30 backdrop-blur">
              Featured
            </span>
          </motion.div>
        </div>
      </div>

      {/* Content Side */}
      <div className={`relative lg:w-3/5 p-8 flex flex-col justify-center ${isEven ? '' : ''}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-0.5 rounded text-xs font-mono border ${project.color}/30 text-${project.color} bg-${project.color}/10`}>
            {project.id}
          </span>
          {project.featured && (
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-2 py-0.5 rounded text-xs font-medium bg-neon-pink/20 text-neon-pink border border-neon-pink/30 flex items-center gap-1"
            >
              <Zap className="w-3 h-3" /> Featured
            </motion.span>
          )}
        </div>

        <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
          {project.title}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-muted-foreground hover:text-neon-cyan transition-colors opacity-0 group-hover:opacity-100"
              aria-label="View on GitHub"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </h3>
        
        <p className="text-neon-cyan/80 font-medium mb-4">{project.tagline}</p>
        <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-neon-cyan mb-3 uppercase tracking-wider">Key Highlights</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle className={`w-4 h-4 flex-shrink-0 ${project.color}`} />
                <span>{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-muted-foreground border border-white/10 hover:border-neon-cyan/30 hover:text-neon-cyan transition-all"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 text-sm"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}