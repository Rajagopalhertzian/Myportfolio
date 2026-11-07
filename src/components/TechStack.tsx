'use client'

import { motion } from 'framer-motion'
import { 
  Brain, Bot, Network, Database, 
  Cpu, Cloud, Code2, Search, 
  Wand2, Terminal, Server, Layers,
  Github, ExternalLink
} from 'lucide-react'

const techLayers = [
  {
    id: 'orchestration',
    title: 'LLM & Orchestration Layer',
    description: 'Agent frameworks, multi-agent orchestration, and LLM integration',
    icon: Bot,
    color: 'neon-purple',
    gradient: 'from-neon-purple/20 via-neon-pink/10 to-neon-cyan/10',
    technologies: [
      { name: 'LangGraph', category: 'Orchestration', url: 'https://github.com/langchain-ai/langgraph' },
      { name: 'LangChain', category: 'Framework', url: 'https://github.com/langchain-ai/langchain' },
      { name: 'MCP (Model Context Protocol)', category: 'Protocol', url: 'https://modelcontextprotocol.io' },
      { name: 'CrewAI', category: 'Multi-Agent', url: 'https://github.com/joaomdmoura/crewAI' },
      { name: 'AutoGen', category: 'Multi-Agent', url: 'https://github.com/microsoft/autogen' },
      { name: 'OpenAI API', category: 'LLM Provider', url: 'https://openai.com/api' },
      { name: 'Groq', category: 'LLM Provider', url: 'https://groq.com' },
      { name: 'Ollama', category: 'Local LLM', url: 'https://ollama.ai' },
    ]
  },
  {
    id: 'rag',
    title: 'RAG & Retrieval Layer',
    description: 'Vector databases, hybrid search, reranking, and evaluation',
    icon: Search,
    color: 'neon-cyan',
    gradient: 'from-neon-cyan/20 via-neon-green/10 to-neon-purple/10',
    technologies: [
      { name: 'FAISS', category: 'Vector DB', url: 'https://github.com/facebookresearch/faiss' },
      { name: 'ChromaDB', category: 'Vector DB', url: 'https://github.com/chroma-core/chroma' },
      { name: 'Qdrant', category: 'Vector DB', url: 'https://github.com/qdrant/qdrant' },
      { name: 'Pinecone', category: 'Vector DB', url: 'https://pinecone.io' },
      { name: 'BM25 / Hybrid Search', category: 'Retrieval', url: '' },
      { name: 'RAGAS', category: 'Evaluation', url: 'https://github.com/explodinggradients/ragas' },
      { name: 'DeepEval', category: 'Evaluation', url: 'https://github.com/confident-ai/deepeval' },
      { name: 'Cross-Encoder Reranking', category: 'Retrieval', url: '' },
    ]
  },
  {
    id: 'embeddings',
    title: 'Vector & Embedding Models',
    description: 'State-of-the-art embedding models for semantic search',
    icon: Database,
    color: 'neon-pink',
    gradient: 'from-neon-pink/20 via-neon-orange/10 to-neon-cyan/10',
    technologies: [
      { name: 'BGE Embeddings (BAAI)', category: 'Embedding', url: 'https://github.com/FlagOpen/FlagEmbedding' },
      { name: 'E5 Embeddings (Microsoft)', category: 'Embedding', url: 'https://github.com/microsoft/unilm/tree/master/e5' },
      { name: 'Sentence Transformers', category: 'Framework', url: 'https://www.sbert.net' },
      { name: 'OpenAI Embeddings', category: 'Embedding', url: 'https://openai.com/blog/new-embedding-models' },
      { name: 'Jina Embeddings', category: 'Embedding', url: 'https://jina.ai/embeddings' },
      { name: 'Nomic Embed', category: 'Embedding', url: 'https://github.com/nomic-ai/nomic-embed-text-v1' },
      { name: 'Instructor-XL', category: 'Embedding', url: 'https://github.com/xlang-ai/instructor' },
      { name: 'GTE (Alibaba)', category: 'Embedding', url: 'https://github.com/Alibaba-NLP/gte' },
    ]
  },
  {
    id: 'engineering',
    title: 'Engineering & Deployment',
    description: 'Backend, containerization, cloud, and ML deployment stack',
    icon: Server,
    color: 'neon-orange',
    gradient: 'from-neon-orange/20 via-neon-cyan/10 to-neon-pink/10',
    technologies: [
      { name: 'Python 3.11+', category: 'Language', url: 'https://python.org' },
      { name: 'FastAPI', category: 'Backend', url: 'https://fastapi.tiangolo.com' },
      { name: 'Docker', category: 'Containerization', url: 'https://docker.com' },
      { name: 'Streamlit', category: 'UI/ML Apps', url: 'https://streamlit.io' },
      { name: 'AWS (EKS, Lambda, RDS)', category: 'Cloud', url: 'https://aws.amazon.com' },
      { name: 'GitHub Actions', category: 'CI/CD', url: 'https://github.com/features/actions' },
      { name: 'PostgreSQL + pgvector', category: 'Database', url: 'https://github.com/pgvector/pgvector' },
      { name: 'Redis', category: 'Cache/Queue', url: 'https://redis.io' },
      { name: 'SQLAlchemy 2.0 Async', category: 'ORM', url: 'https://sqlalchemy.org' },
    ]
  },
  {
    id: 'ml-core',
    title: 'ML / CV / DL Core',
    description: 'Deep learning frameworks, computer vision, and optimization',
    icon: Cpu,
    color: 'neon-green',
    gradient: 'from-neon-green/20 via-neon-purple/10 to-neon-orange/10',
    technologies: [
      { name: 'PyTorch', category: 'DL Framework', url: 'https://pytorch.org' },
      { name: 'TensorFlow', category: 'DL Framework', url: 'https://tensorflow.org' },
      { name: 'OpenCV', category: 'Computer Vision', url: 'https://opencv.org' },
      { name: 'Transformers (HuggingFace)', category: 'NLP/CV', url: 'https://huggingface.co/transformers' },
      { name: 'Ultralytics YOLO', category: 'Object Detection', url: 'https://github.com/ultralytics/ultralytics' },
      { name: 'ONNX / TensorRT', category: 'Optimization', url: 'https://onnx.ai' },
      { name: 'TorchScript', category: 'Deployment', url: 'https://pytorch.org/docs/stable/jit.html' },
      { name: 'vLLM / TGI', category: 'LLM Serving', url: 'https://github.com/vllm-project/vllm' },
    ]
  },
]

export function TechStack() {
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
            02 / TECHNOLOGY STACK
          </span>
          <h2 className="section-title">Gen AI & Agentic AI Engineering Stack</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Organized by architectural layers — from orchestration to deployment.
            Each layer represents a critical component in building production-grade autonomous AI systems.
          </p>
        </motion.div>

        <div className="space-y-12">
          {techLayers.map((layer, layerIndex) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: layerIndex * 0.1 }}
              className="relative"
            >
              {/* Layer Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-${layer.color} bg-${layer.color}/10 border border-${layer.color}/20`}>
                    <layer.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold gradient-text">{layer.title}</h3>
                    <p className="text-sm text-muted-foreground">{layer.description}</p>
                  </div>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
              </div>

              {/* Technology Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {layer.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                    className="group relative card-glass p-4 min-h-[120px] flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-mono text-neon-cyan/60 uppercase tracking-wider">
                        {tech.category}
                      </span>
                      {tech.url && (
                        <a
                          href={tech.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-lg text-muted-foreground hover:text-neon-cyan transition-colors opacity-0 group-hover:opacity-100"
                          aria-label={`View ${tech.name} documentation`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <h4 className="font-semibold text-foreground mb-1 flex-1">{tech.name}</h4>
                    <div className="h-px w-full bg-gradient-to-r from-{layer.color}/50 to-transparent mt-auto" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Live Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <div className="card-glass p-6 glow-border">
              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                <Github className="w-5 h-5 text-neon-cyan" />
                Live Technology Radar (Auto-Updated)
              </h3>
              <p className="text-muted-foreground mb-6">
                These stats are automatically refreshed every 6 hours via GitHub Actions, scanning all public repositories.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-neon-cyan mb-4">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Python', count: 19, color: '#3776AB' },
                      { name: 'Jupyter Notebook', count: 13, color: '#444444' },
                      { name: 'JavaScript', count: 5, color: '#F7DF1E' },
                      { name: 'HTML', count: 5, color: '#E34F26' },
                      { name: 'Dockerfile', count: 5, color: '#444444' },
                      { name: 'CSS', count: 4, color: '#1572B6' },
                      { name: 'TypeScript', count: 1, color: '#3178C6' },
                    ].map((lang) => (
                      <span
                        key={lang.name}
                        className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{ borderColor: `${lang.color}80`, backgroundColor: `${lang.color}20`, color: lang.color }}
                      >
                        {lang.name} ({lang.count})
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-neon-purple mb-4">AI/ML & Engineering Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Streamlit', count: 8, color: '#FF4B4B' },
                      { name: 'Transformers', count: 4, color: '#FFD21E' },
                      { name: 'LangChain', count: 4, color: '#1C3C3C' },
                      { name: 'LangGraph', count: 3, color: '#2563EB' },
                      { name: 'MCP', count: 3, color: '#8B5CF6' },
                      { name: 'OpenAI', count: 3, color: '#412991' },
                      { name: 'ChromaDB', count: 3, color: '#E85D75' },
                      { name: 'FastAPI', count: 3, color: '#009688' },
                      { name: 'FAISS', count: 2, color: '#0467DF' },
                      { name: 'Qdrant', count: 1, color: '#DC244C' },
                      { name: 'PyTorch', count: 1, color: '#EE4C2C' },
                    ].map((fw) => (
                      <span
                        key={fw.name}
                        className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{ borderColor: `${fw.color}80`, backgroundColor: `${fw.color}20`, color: fw.color }}
                      >
                        {fw.name} ({fw.count})
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}