export interface CourseTopicNote {
  heading: string;
  items: string[];
}

export interface CourseTopic {
  slug: string;
  title: string;
  authors?: string;
  highlight?: string;
  notes?: CourseTopicNote[];
}

export interface CourseLevel {
  id: string;
  number: number;
  title: string;
  description?: string;
  topics: CourseTopic[];
}

export interface Course {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  levels: CourseLevel[];
}

interface RawTopic {
  title: string;
  authors?: string;
  highlight?: string;
  notes?: CourseTopicNote[];
}

type RawTopicEntry = string | RawTopic;

interface RawLevel {
  number: number;
  title: string;
  description?: string;
  topics: RawTopicEntry[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\+/g, 'plus')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function buildLevels(raw: RawLevel[]): CourseLevel[] {
  const usedSlugs = new Set<string>();

  return raw.map((level) => {
    const topics: CourseTopic[] = level.topics.map((entry) => {
      const input: RawTopic = typeof entry === 'string' ? { title: entry } : entry;
      const baseSlug = slugify(input.title);
      const slug = usedSlugs.has(baseSlug) ? `level-${level.number}-${baseSlug}` : baseSlug;
      usedSlugs.add(slug);
      return {
        slug,
        title: input.title,
        authors: input.authors,
        highlight: input.highlight,
        notes: input.notes,
      };
    });

    return {
      id: `level-${level.number}`,
      number: level.number,
      title: level.title,
      description: level.description,
      topics,
    };
  });
}

const aiMlRawLevels: RawLevel[] = [
  {
    number: 0,
    title: 'Software Engineering Foundation',
    description: "Before serious AI work, you need to be a strong developer. Developer milestone: build and deploy a production-quality Python API.",
    topics: [
      'Python fundamentals', 'Python data structures', 'Functions and decorators', 'Iterators and generators',
      'Context managers', 'Type hints', 'Dataclasses', 'Async Python', 'Multiprocessing', 'Multithreading',
      'Memory management', 'Profiling Python', 'Packaging Python applications', 'Virtual environments', 'Dependency management',
      'OOP', 'Functional programming concepts', 'SOLID principles', 'Design patterns', 'Clean architecture',
      'API design', 'REST', 'GraphQL', 'WebSockets', 'Authentication', 'Authorization', 'Error handling', 'Logging',
      'Testing', 'Integration testing', 'End-to-end testing', 'CI/CD', 'Git', 'GitHub workflows', 'Linux', 'Shell scripting',
      'Docker', 'Kubernetes fundamentals',
      'SQL', 'Database design', 'PostgreSQL', 'Redis', 'NoSQL', 'Data serialization', 'JSON', 'Parquet', 'Data pipelines', 'ETL vs ELT',
    ],
  },
  {
    number: 1,
    title: 'Mathematics for AI/ML',
    description: "You don't need to become a mathematician. You do need enough mathematics to understand papers, algorithms, model behavior, and debugging.",
    topics: [
      'Scalars', 'Vectors', 'Matrices', 'Tensors', 'Matrix multiplication', 'Dot product', 'Norms', 'Cosine similarity',
      'Orthogonality', 'Projections', 'Eigenvalues', 'Eigenvectors', 'Singular Value Decomposition', 'Rank', 'Low-rank approximation',
      'Derivatives', 'Partial derivatives', 'Chain rule', 'Gradients', 'Jacobians', 'Hessians', 'Gradient fields', 'Automatic differentiation',
      'Probability distributions', 'Conditional probability', 'Bayes theorem', 'Random variables', 'Expectation', 'Variance', 'Covariance',
      'Entropy', 'Cross entropy', 'KL divergence', 'Maximum likelihood', 'Maximum a posteriori estimation',
      'Gradient descent', 'SGD', 'Momentum', 'Adam', 'Learning-rate schedules', 'Convex vs non-convex optimization',
      'Local vs global minima', 'Optimization landscapes',
    ],
  },
  {
    number: 2,
    title: 'Classical Machine Learning',
    description: "Don't skip this just because LLMs dominate current AI. Understanding ML gives you the mental models needed to understand modern systems.",
    topics: [
      'Supervised learning', 'Semi-supervised learning', 'Self-supervised learning', 'Regression', 'Classification', 'Clustering',
      'Linear regression', 'Logistic regression', 'Decision trees', 'Random forests', 'Gradient boosting', 'XGBoost', 'SVM',
      'k-NN', 'Naive Bayes', 'k-means', 'PCA', 'Dimensionality reduction',
      'Feature engineering', 'Feature selection', 'Missing data', 'Outlier handling', 'Data leakage', 'Class imbalance',
      'Cross-validation', 'Hyperparameter tuning', 'Grid search', 'Random search', 'Bayesian optimization',
      'Accuracy', 'Precision', 'Recall', 'F1', 'ROC-AUC', 'PR-AUC', 'Calibration', 'Confusion matrices',
      'Regression metrics', 'Ranking metrics',
    ],
  },
  {
    number: 3,
    title: 'Deep Learning',
    topics: [
      'Perceptrons', 'Neural networks', 'Forward propagation', 'Backpropagation', 'Computational graphs', 'Activation functions',
      'Weight initialization', 'Batch normalization', 'Layer normalization', 'Dropout', 'Residual connections',
      'Vanishing gradients', 'Exploding gradients', 'SGD', 'Adam', 'AdamW', 'Weight decay', 'Learning-rate warmup', 'Cosine decay',
      'Mixed precision', 'Gradient clipping', 'Gradient accumulation',
      'PyTorch', 'PyTorch autograd', 'torch.nn', 'Dataset/DataLoader', 'Distributed training', 'Checkpointing',
      'TensorBoard', 'Weights & Biases', 'Hugging Face ecosystem',
    ],
  },
  {
    number: 4,
    title: 'Computer Vision',
    description: 'Even if you specialize in LLMs, an advanced AI developer should understand multimodal foundations.',
    topics: [
      'Image representation', 'Convolution', 'Kernels', 'CNNs', 'Pooling', 'ResNet', 'EfficientNet', 'Vision Transformers',
      'Transfer learning', 'Image embeddings', 'Object detection', 'YOLO', 'Faster R-CNN', 'Segmentation',
      'Semantic segmentation', 'Instance segmentation', 'OCR', 'Document AI', 'Image classification', 'Image generation',
    ],
  },
  {
    number: 5,
    title: 'Sequence Models',
    description: "Now you're ready for Transformers.",
    topics: [
      'Sequential data', 'RNNs', 'LSTMs', 'GRUs', 'Bidirectional RNNs', 'Seq2Seq', 'Encoder-decoder architectures',
      'Teacher forcing', 'Beam search', 'Attention mechanisms', 'Limitations of RNNs',
    ],
  },
  {
    number: 6,
    title: 'Transformers',
    description: 'This is one of the highest-priority sections for your AI/ML learning and blogging.',
    topics: [
      'Why Transformers?', 'Attention', 'Self-attention', 'Query, Key, Value', 'Scaled dot-product attention',
      'Multi-head attention', 'Causal attention', 'Cross-attention', 'Positional embeddings', 'Sinusoidal positional encoding',
      'RoPE', 'ALiBi', 'Transformer encoder', 'Transformer decoder', 'Encoder-decoder Transformer',
      'Feed-forward networks', 'SwiGLU', 'Pre-normalization vs post-normalization', 'Causal masking',
      'Attention complexity', 'FlashAttention', 'Sparse attention', 'Sliding-window attention',
      'Project: implement a Transformer from scratch in PyTorch (tokenizer → embeddings → attention → MLP → transformer blocks → loss → training → inference)',
    ],
  },
  {
    number: 7,
    title: 'LLM Fundamentals',
    topics: [
      'What is a language model?', 'Autoregressive modeling', 'Next-token prediction', 'Tokenization', 'BPE', 'WordPiece',
      'SentencePiece', 'Token probabilities', 'Logits', 'Softmax', 'Temperature', 'Top-k sampling', 'Top-p sampling',
      'Repetition penalties', 'Context windows', 'Positional information', 'Pretraining', 'Scaling laws',
      'Emergent capabilities', 'In-context learning', 'Few-shot learning', 'Zero-shot learning',
    ],
  },
  {
    number: 8,
    title: 'Modern LLM Architecture',
    description: 'Now go deep.',
    topics: [
      'Decoder-only architectures', 'GPT-style models', 'Llama-style architectures', 'Mistral-style architectures',
      'Grouped Query Attention', 'Multi-Query Attention', 'Mixture of Experts', 'Routing networks', 'Expert load balancing',
      'Sparse MoE', 'Dense vs sparse models', 'Parameter count vs compute', 'Model scaling', 'Context scaling',
      'Long-context architectures', 'Linear attention', 'State-space models', 'Hybrid architectures',
    ],
  },
  {
    number: 9,
    title: 'LLM Training & Post-Training',
    description: 'This is where you move from AI application developer → serious ML engineer.',
    topics: [
      'Pretraining datasets', 'Data cleaning', 'Deduplication', 'Data filtering', 'Data contamination', 'Synthetic data',
      'Data mixture design', 'Curriculum learning', 'Data parallelism', 'Tensor parallelism', 'Pipeline parallelism',
      'FSDP', 'ZeRO', 'Gradient checkpointing', 'Mixed precision training', 'BF16', 'FP16', 'FP8', 'Training stability',
      'Supervised fine-tuning', 'Instruction tuning', 'Preference datasets', 'RLHF', 'Reward models', 'PPO', 'DPO',
      'Preference optimization', 'Constitutional approaches', 'GRPO', 'Reasoning-model post-training',
    ],
  },
  {
    number: 10,
    title: 'Parameter-Efficient Fine-Tuning',
    topics: [
      'Fine-tuning fundamentals', 'Full fine-tuning', 'LoRA', 'QLoRA', 'Adapter layers', 'Prefix tuning', 'Prompt tuning',
      'PEFT', 'Rank selection', 'LoRA merging', 'Quantized fine-tuning', 'Fine-tuning dataset construction',
      'Fine-tuning evaluation', 'Catastrophic forgetting',
    ],
  },
  {
    number: 11,
    title: 'LLM Application Engineering',
    description: 'This is core FDE/AI Developer territory. Current guidance puts substantial emphasis here: foundation-model APIs, structured outputs, retrieval, agents, evaluation, deployment and reliability.',
    topics: [
      'LLM APIs', 'Streaming', 'Structured outputs', 'JSON schema', 'Function calling', 'Tool calling', 'Prompt engineering',
      'System prompts', 'Few-shot prompting', 'Prompt templates', 'Prompt versioning', 'Context engineering',
      'Conversation state', 'Model routing', 'Model selection', 'Cost optimization', 'Latency optimization',
      'Token budgeting', 'Fallback models', 'Retry strategies', 'Rate limiting', 'Caching',
    ],
  },
  {
    number: 12,
    title: 'Embeddings & Retrieval',
    description: 'This deserves an entire specialization.',
    topics: [
      'What are embeddings?', 'Sentence embeddings', 'Document embeddings', 'Embedding dimensions', 'Euclidean distance',
      'ANN search', 'HNSW', 'IVF', 'Product quantization', 'Vector databases', 'Metadata filtering', 'Hybrid search',
      'BM25', 'Dense retrieval', 'Sparse retrieval', 'Reranking', 'Cross-encoders', 'ColBERT', 'Query expansion',
      'Query rewriting', 'HyDE', 'Multi-query retrieval', 'Query decomposition',
    ],
  },
  {
    number: 13,
    title: 'RAG: From Demo to Production',
    description: "Don't stop at PDF → embeddings → vector DB → LLM — that's beginner RAG, go much deeper. Modern AI engineering curricula increasingly treat retrieval quality and evaluation, rather than merely building a vector-search demo, as the differentiating skill.",
    topics: [
      'Basic RAG', 'Document ingestion', 'Document parsing', 'Chunking', 'Semantic chunking', 'Recursive chunking',
      'Parent-child retrieval', 'Metadata-aware retrieval', 'Context compression', 'Query routing', 'Multi-hop RAG',
      'Graph RAG', 'Agentic RAG', 'Corrective RAG', 'Adaptive RAG', 'Self-RAG', 'RAPTOR', 'Retrieval evaluation',
      'Context precision', 'Context recall', 'Answer faithfulness', 'Groundedness', 'Citation correctness',
    ],
  },
  {
    number: 14,
    title: 'AI Agents',
    description: 'This is another major skill. Learn when not to use an agent — a deterministic workflow is often better than an autonomous loop.',
    topics: [
      'What is an AI agent?', 'Agent vs workflow', 'ReAct', 'Tool use', 'Planning', 'Task decomposition', 'Reflection',
      'Self-correction', 'Verification', 'Agent memory', 'Short-term memory', 'Long-term memory', 'State management',
      'Agent loops', 'Tool selection', 'Tool permissions', 'Human-in-the-loop', 'Agent failure modes', 'Agent evaluation',
      'Multi-agent systems', 'Supervisor agents', 'Planner/executor architectures', 'Reviewer agents', 'Agent orchestration',
      'Durable workflows',
    ],
  },
  {
    number: 15,
    title: 'MCP & Tool Ecosystems',
    description: 'Modern AI developers increasingly need to understand model-to-tool protocols and interoperability.',
    topics: [
      'Model Context Protocol', 'MCP architecture', 'MCP servers', 'MCP clients', 'Resources', 'Tools', 'Prompts',
      'MCP security', 'Tool discovery', 'Remote MCP', 'Enterprise MCP architectures', 'Tool injection risks',
    ],
  },
  {
    number: 16,
    title: 'LLM Evaluation',
    description: 'Mandatory for senior AI engineering. Many developers can make a demo. Far fewer can prove that it works.',
    topics: [
      'Why LLM evaluation is difficult', 'Golden datasets', 'Test datasets', 'Regression testing', 'Exact-match evaluation',
      'Semantic evaluation', 'LLM-as-a-judge', 'Judge bias', 'Pairwise evaluation', 'Ranking models', 'Human evaluation',
      'RAG evaluation', 'Tool-use evaluation', 'Hallucination evaluation', 'Faithfulness', 'Relevance', 'Safety evaluation',
      'Robustness testing', 'Adversarial testing', 'Evaluation pipelines', 'Continuous evaluation',
    ],
  },
  {
    number: 17,
    title: 'LLM Inference & Optimization',
    description: 'This is where you start becoming a serious AI systems engineer. Inference is particularly important as AI deployment shifts toward optimizing the cost and performance of already-trained models.',
    topics: [
      'Autoregressive inference', 'Prefill', 'Decode', 'KV cache', 'KV-cache memory', 'Continuous batching',
      'PagedAttention', 'Prefix caching', 'Speculative decoding', 'Medusa-style decoding', 'Quantization', 'GPTQ', 'AWQ',
      'GGUF', 'INT8', 'INT4', 'Model distillation', 'Pruning', 'Weight sharing', 'Model compression',
      'Throughput vs latency', 'Tokens/sec', 'Time-to-first-token', 'Inter-token latency',
      'vLLM', 'TensorRT-LLM', 'SGLang', 'Hugging Face TGI', 'GPU scheduling', 'Multi-GPU inference',
      'Autoscaling', 'Load balancing',
    ],
  },
  {
    number: 18,
    title: 'Multimodal AI',
    topics: [
      'Vision-language models', 'Image-text embeddings', 'CLIP', 'Multimodal Transformers', 'Image understanding',
      'Document understanding', 'Visual question answering', 'OCR + LLM systems', 'Audio-language models',
      'Speech recognition', 'Text-to-speech', 'Speech-to-speech', 'Video understanding', 'Video generation',
      'Multimodal RAG', 'Multimodal agents',
    ],
  },
  {
    number: 19,
    title: 'Generative Models Beyond LLMs',
    topics: [
      'Autoencoders', 'Variational autoencoders', 'GANs', 'Diffusion models', 'Forward diffusion', 'Reverse diffusion',
      'DDPM', 'DDIM', 'Score matching', 'Latent diffusion', 'Stable Diffusion architecture', 'ControlNet',
      'Image conditioning', 'Text-to-image models', 'Image-to-image', 'Video diffusion', 'Flow matching',
      'Diffusion transformers', 'Generative audio',
    ],
  },
  {
    number: 20,
    title: 'AI Security',
    description: 'Increasingly important for production AI. Security and governance are now commonly treated alongside retrieval, agents, evaluation, and inference as core applied-AI engineering competencies.',
    topics: [
      'Prompt injection', 'Indirect prompt injection', 'Jailbreaking', 'Data exfiltration', 'Tool abuse', 'Agent hijacking',
      'Excessive agency', 'Insecure tool permissions', 'RAG poisoning', 'Data poisoning', 'Model extraction',
      'Membership inference', 'Adversarial examples', 'Sensitive data leakage', 'PII handling', 'Secrets management',
      'AI supply-chain security', 'Model provenance', 'Secure tool execution', 'Sandboxing',
    ],
  },
  {
    number: 21,
    title: 'MLOps / LLMOps',
    topics: [
      'Model registry', 'Dataset versioning', 'Experiment tracking', 'Feature stores', 'Model serving', 'Model monitoring',
      'Data drift', 'Concept drift', 'Model drift', 'Model performance monitoring', 'LLM observability', 'Prompt tracing',
      'Token monitoring', 'Cost monitoring', 'Latency monitoring', 'Trace-based debugging', 'Production evaluation',
      'Canary deployments', 'A/B testing', 'Shadow deployments', 'Rollbacks', 'Model governance',
    ],
  },
  {
    number: 22,
    title: 'Distributed AI Systems',
    description: 'For genuinely advanced ML engineering.',
    topics: [
      'GPU architecture', 'CUDA fundamentals', 'GPU memory hierarchy', 'Tensor cores', 'CUDA kernels', 'NCCL',
      'Distributed data parallelism', 'Expert parallelism', 'Sequence parallelism', 'Distributed checkpointing',
      'Fault tolerance', 'GPU cluster scheduling', 'Kubernetes for AI', 'Ray', 'Distributed inference',
    ],
  },
  {
    number: 23,
    title: 'AI System Design',
    description: 'This is where FDE-level thinking becomes visible.',
    topics: [
      'Designing an enterprise RAG system', 'Designing an AI chatbot', 'Designing an AI coding assistant',
      'Designing an agent platform', 'Designing an LLM gateway', 'Designing model routing',
      'Designing an evaluation platform', 'Designing multimodal search', 'Designing document intelligence',
      'Designing AI observability', 'Designing model-serving infrastructure', 'Designing GPU infrastructure',
      'Cost-aware AI architecture', 'Multi-tenant AI systems', 'AI data architecture', 'AI security architecture',
      'Human-in-the-loop architectures', 'Reliability engineering for AI',
    ],
  },
  {
    number: 24,
    title: 'Advanced Research Topics',
    description: 'If you want to move toward ML research / frontier engineering, continue here.',
    topics: [
      'Neural scaling laws', 'Compute-optimal training', 'Chinchilla-style scaling', 'Test-time compute',
      'Inference-time scaling', 'Reasoning models', 'Process supervision', 'Outcome supervision', 'Reward hacking',
      'Verifiable rewards', 'Reinforcement learning for reasoning', 'Synthetic reasoning data', 'Self-play',
      'Distillation', 'Model merging', 'Representation engineering', 'Mechanistic interpretability',
      'Sparse autoencoders', 'Activation steering', 'Circuit analysis', 'Neural representations',
    ],
  },
  {
    number: 25,
    title: 'Frontier AI',
    description: "These are topics I'd put toward the end of your roadmap because they're rapidly evolving.",
    topics: [
      'Agentic systems', 'Long-horizon agents', 'Computer-use agents', 'Autonomous coding agents',
      'Multi-agent environments', 'Agent memory architectures', 'Test-time training', 'Test-time adaptation',
      'Continual learning', 'Online learning', 'World models', 'Model-based reasoning', 'Embodied AI',
      'Robotics foundation models', 'Vision-language-action models', 'AI scientists', 'AI research agents',
      'Autonomous software engineering', 'AI-native development environments', 'Human-AI collaborative systems',
    ],
  },
];

const papersRawLevels: RawLevel[] = [
  {
    number: 1,
    title: 'Deep Learning Foundations — Neural Networks',
    topics: [
      {
        title: 'Perceptron',
        authors: 'Rosenblatt, 1958',
        notes: [
          { heading: 'Learn', items: ['Basic neural computation'] },
          { heading: 'Implement', items: ['Perceptron', 'Binary classification', 'Decision boundary'] },
        ],
      },
      {
        title: 'Learning Representations by Back-Propagating Errors',
        authors: 'Rumelhart et al., 1986',
        notes: [
          { heading: 'Learn', items: ['Backpropagation', 'Computational graphs', 'Chain rule'] },
          { heading: 'Implement', items: ['MLP', 'Manual backpropagation', 'Automatic differentiation comparison'] },
        ],
      },
      {
        title: 'Efficient BackProp',
        authors: 'LeCun et al.',
        notes: [
          { heading: 'Learn', items: ['Initialization', 'Normalization', 'Optimization'] },
          { heading: 'Experiment with', items: ['Different initialization', 'Learning rates', 'Activation functions'] },
        ],
      },
      {
        title: 'Adam',
        authors: 'Kingma & Ba',
        notes: [
          { heading: 'Learn', items: ['Adaptive optimization', 'Momentum', 'First/second moments'] },
          { heading: 'Implement', items: ['SGD', 'Momentum', 'Adam', 'AdamW'] },
          { heading: 'Compare', items: ['Convergence across optimizers'] },
        ],
      },
    ],
  },
  {
    number: 2,
    title: 'Computer Vision — CNN Revolution',
    topics: [
      {
        title: 'LeNet-5',
        notes: [
          { heading: 'Learn', items: ['Convolution', 'Pooling', 'Feature extraction'] },
          { heading: 'Build', items: ['From scratch'] },
        ],
      },
      {
        title: 'AlexNet',
        notes: [
          { heading: 'Paper', items: ['ImageNet Classification with Deep Convolutional Neural Networks'] },
          { heading: 'Learn', items: ['ReLU', 'Dropout', 'GPU training', 'Deep CNNs'] },
          { heading: 'Experiment', items: ['ReLU vs sigmoid/tanh'] },
        ],
      },
      {
        title: 'VGG',
        notes: [{ heading: 'Learn', items: ['Depth', 'Small convolution kernels', 'Architecture simplicity'] }],
      },
      {
        title: 'GoogLeNet / Inception',
        notes: [{ heading: 'Learn', items: ['Multi-scale features', 'Computational efficiency', 'Inception modules'] }],
      },
      {
        title: 'ResNet',
        highlight: 'This is extremely important.',
        notes: [
          { heading: 'Paper', items: ['Deep Residual Learning for Image Recognition'] },
          { heading: 'Learn', items: ['Residual learning', 'Skip connections', 'Degradation problem'] },
          { heading: 'Implement', items: ['Plain CNN vs residual CNN'] },
        ],
      },
      {
        title: 'Batch Normalization',
        notes: [
          { heading: 'Learn', items: ['Normalization', 'Optimization stability', 'Internal representations'] },
          { heading: 'Experiment', items: ['Training with vs without BatchNorm'] },
        ],
      },
    ],
  },
  {
    number: 3,
    title: 'Sequence Modeling — Before Transformers',
    topics: [
      {
        title: 'Sequence to Sequence Learning with Neural Networks',
        notes: [{ heading: 'Learn', items: ['Encoder-decoder', 'Sequence representation', 'Machine translation'] }],
      },
      {
        title: 'Learning Long-Term Dependencies with LSTM',
        notes: [
          { heading: 'Learn', items: ['Memory cells', 'Gates', 'Vanishing gradients'] },
          { heading: 'Implement', items: ['LSTM from scratch'] },
        ],
      },
      {
        title: 'GRU',
        notes: [{ heading: 'Compare', items: ['RNN vs LSTM vs GRU'] }],
      },
      {
        title: 'Neural Machine Translation by Jointly Learning to Align and Translate',
        highlight: 'This is the important attention paper.',
        notes: [
          { heading: 'Learn', items: ['Alignment', 'Attention', 'Encoder-decoder attention'] },
          { heading: 'Implement', items: ['Implement it yourself'] },
        ],
      },
    ],
  },
  {
    number: 4,
    title: 'Attention → Transformer',
    topics: [
      {
        title: 'Effective Approaches to Attention-based Neural Machine Translation',
        notes: [{ heading: 'Learn', items: ['Attention variants', 'Global/local attention'] }],
      },
      {
        title: 'Attention Is All You Need',
        highlight: 'This should be one of your major projects.',
        notes: [
          {
            heading: 'Learn',
            items: [
              'Q/K/V', 'Scaled dot-product attention', 'Multi-head attention', 'Positional encoding',
              'Encoder', 'Decoder', 'Causal masking',
            ],
          },
          { heading: 'Implement', items: ['The entire Transformer', 'Train a tiny model'] },
          {
            heading: 'Article idea',
            items: ['I Implemented the Transformer From Scratch: What Actually Happens Inside Attention?'],
          },
        ],
      },
    ],
  },
  {
    number: 5,
    title: 'Representation Learning',
    topics: [
      {
        title: 'Word2Vec',
        notes: [
          { heading: 'Learn', items: ['Embeddings', 'Distributed representations', 'Semantic similarity'] },
          { heading: 'Implement', items: ['CBOW', 'Skip-gram'] },
        ],
      },
      {
        title: 'GloVe',
        notes: [{ heading: 'Compare', items: ['Word2Vec vs GloVe'] }],
      },
      {
        title: 'Sentence-BERT',
        notes: [
          { heading: 'Learn', items: ['Sentence embeddings', 'Semantic search', 'Siamese networks'] },
          { heading: 'Build', items: ['Semantic search engine'] },
        ],
      },
      {
        title: 'SimCLR',
        notes: [{ heading: 'Learn', items: ['Contrastive learning', 'Self-supervised learning', 'Augmentation'] }],
      },
      {
        title: 'BYOL',
        notes: [{ heading: 'Learn', items: ['Self-supervised representation learning', 'Bootstrap learning'] }],
      },
    ],
  },
  {
    number: 6,
    title: 'BERT — Bidirectional Language Understanding',
    topics: [
      {
        title: 'BERT',
        notes: [
          {
            heading: 'Paper',
            items: ['BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding'],
          },
          {
            heading: 'Learn',
            items: ['Masked language modeling', 'Next sentence prediction', 'Bidirectional representations', 'Pretraining'],
          },
          { heading: 'Implement', items: ['A tiny BERT'] },
        ],
      },
      {
        title: 'RoBERTa',
        notes: [{ heading: 'Learn', items: ['Better pretraining', 'Training strategy', 'Dataset effects'] }],
      },
      {
        title: 'ALBERT',
        notes: [{ heading: 'Learn', items: ['Parameter sharing', 'Factorized embeddings'] }],
      },
      {
        title: 'ELECTRA',
        highlight: "A great paper for understanding why next-token prediction isn't the only possible training objective.",
        notes: [{ heading: 'Learn', items: ['Replaced-token detection', 'Efficient pretraining'] }],
      },
    ],
  },
  {
    number: 7,
    title: 'GPT & Scaling — Autoregressive LLMs',
    topics: [
      {
        title: 'Improving Language Understanding by Generative Pre-Training',
        highlight: 'GPT-1.',
        notes: [{ heading: 'Learn', items: ['Generative pretraining', 'Transformer decoder', 'Transfer learning'] }],
      },
      {
        title: 'Language Models are Unsupervised Multitask Learners',
        highlight: 'GPT-2.',
        notes: [{ heading: 'Learn', items: ['Scaling', 'Zero-shot behavior', 'Generative language models'] }],
      },
      {
        title: 'Language Models are Few-Shot Learners',
        highlight: 'GPT-3.',
        notes: [{ heading: 'Learn', items: ['In-context learning', 'Few-shot prompting', 'Scaling laws'] }],
      },
      {
        title: 'Scaling Laws for Neural Language Models',
        notes: [{ heading: 'Learn', items: ['Model size', 'Dataset size', 'Compute', 'Loss scaling'] }],
      },
      {
        title: 'Training Compute-Optimal Large Language Models',
        highlight: 'Chinchilla.',
        notes: [
          { heading: 'Learn', items: ['Bigger model is not automatically a better model', 'Compute/data/model trade-offs'] },
        ],
      },
    ],
  },
  {
    number: 8,
    title: 'Modern Transformer Architecture — How Modern LLMs Actually Work',
    topics: [
      {
        title: 'RoFormer',
        notes: [
          { heading: 'Learn', items: ['Rotary Position Embeddings (RoPE)'] },
          { heading: 'Implement', items: ['RoPE'] },
        ],
      },
      {
        title: 'GLU Variants Improve Transformer',
        notes: [{ heading: 'Learn', items: ['GLU', 'SwiGLU', 'Modern FFNs'] }],
      },
      {
        title: 'GQA',
        notes: [{ heading: 'Learn', items: ['MHA', 'MQA', 'GQA', 'Memory/latency trade-offs'] }],
      },
      {
        title: 'MQA',
        highlight: 'Understand why sharing K/V heads improves inference efficiency.',
      },
      {
        title: 'FlashAttention',
        highlight: 'Extremely important.',
        notes: [
          { heading: 'Learn', items: ['GPU memory hierarchy', 'IO complexity', 'Tiled attention', 'Memory-efficient attention'] },
          { heading: 'Implement', items: ["A simplified version — don't just read it"] },
        ],
      },
      {
        title: 'FlashAttention-2',
        notes: [{ heading: 'Learn', items: ['GPU parallelism', 'Work partitioning', 'Attention kernel optimization'] }],
      },
    ],
  },
  {
    number: 9,
    title: 'Mixture of Experts',
    topics: [
      {
        title: 'Sparsely-Gated Mixture-of-Experts',
        notes: [{ heading: 'Learn', items: ['Experts', 'Routers', 'Sparse computation'] }],
      },
      {
        title: 'Switch Transformers',
        notes: [{ heading: 'Learn', items: ['Simplified MoE', 'Routing', 'Load balancing'] }],
      },
      {
        title: 'Mixtral',
        notes: [{ heading: 'Study', items: ['Sparse MoE in modern LLMs', 'Inference implications', 'Expert routing'] }],
      },
      {
        title: 'DeepSeekMoE',
        highlight:
          'This gives you a strong understanding of why modern models can have huge parameter counts without activating every parameter for every token.',
        notes: [{ heading: 'Study', items: ['Fine-grained experts', 'Shared experts', 'Routing strategies'] }],
      },
    ],
  },
  {
    number: 10,
    title: 'LLM Training — Pretraining',
    topics: [
      {
        title: 'Chinchilla',
        highlight: 'Already covered — revisit here from the engineering perspective.',
        notes: [{ heading: 'Study', items: ['Tokens', 'FLOPs', 'GPU utilization', 'Training efficiency'] }],
      },
      {
        title: 'Megatron-LM',
        notes: [{ heading: 'Learn', items: ['Tensor parallelism', 'Model parallelism', 'Distributed training'] }],
      },
      {
        title: 'ZeRO',
        notes: [{ heading: 'Learn', items: ['Optimizer sharding', 'Parameter sharding', 'Distributed memory optimization'] }],
      },
      {
        title: 'DeepSpeed',
        notes: [{ heading: 'Study', items: ['Large-scale training', 'Memory optimization', 'Distributed execution'] }],
      },
      {
        title: 'PaLM',
        notes: [{ heading: 'Learn', items: ['Large-scale training', 'Scaling', 'Distributed model architecture'] }],
      },
    ],
  },
  {
    number: 11,
    title: 'Fine-Tuning — Parameter-Efficient Learning',
    topics: [
      {
        title: 'LoRA',
        highlight: 'Essential paper.',
        notes: [
          { heading: 'Learn', items: ['Low-rank adaptation', 'Parameter-efficient fine-tuning', 'Rank', 'Adapters'] },
          { heading: 'Implement', items: ['LoRA from scratch'] },
        ],
      },
      {
        title: 'QLoRA',
        notes: [
          { heading: 'Learn', items: ['Quantization', '4-bit fine-tuning', 'NF4', 'Memory-efficient training'] },
          { heading: 'Build', items: ['Fine-tune a small open-source LLM with QLoRA'] },
        ],
      },
      {
        title: 'Prefix-Tuning',
        notes: [{ heading: 'Learn', items: ['Trainable prefixes', 'Parameter-efficient adaptation'] }],
      },
      {
        title: 'Prompt Tuning',
        notes: [{ heading: 'Learn', items: ['Soft prompts', 'Parameter-efficient adaptation'] }],
      },
      {
        title: 'IA³',
        notes: [{ heading: 'Learn', items: ['Activation scaling', 'Lightweight adaptation'] }],
      },
    ],
  },
  {
    number: 12,
    title: 'Instruction Tuning & Alignment — Making Models Follow Instructions',
    topics: [
      {
        title: 'InstructGPT',
        notes: [{ heading: 'Learn', items: ['Supervised fine-tuning', 'Reward models', 'RLHF'] }],
      },
      {
        title: 'Training Language Models to Follow Instructions with Human Feedback',
        highlight: 'Study RLHF carefully.',
        notes: [{ heading: 'Pipeline', items: ['Pretraining', 'SFT', 'Reward Model', 'RL', 'Aligned Model'] }],
      },
      {
        title: 'Constitutional AI',
        notes: [{ heading: 'Learn', items: ['AI feedback', 'Constitutional principles', 'Self-critique'] }],
      },
      {
        title: 'Direct Preference Optimization',
        notes: [
          { heading: 'Learn', items: ['Preference learning', 'Avoiding explicit reward modeling', 'Policy optimization'] },
          { heading: 'Implement', items: ['DPO on a small model'] },
        ],
      },
      {
        title: 'GRPO',
        highlight: 'Important for understanding modern reasoning-model training.',
        notes: [{ heading: 'Study', items: ['Group-relative rewards', 'Reasoning optimization', 'Reinforcement learning'] }],
      },
    ],
  },
  {
    number: 13,
    title: 'Quantization — Making Models Smaller/Faster',
    topics: [
      {
        title: 'GPTQ',
        notes: [{ heading: 'Learn', items: ['Post-training quantization', 'Weight quantization'] }],
      },
      {
        title: 'AWQ',
        notes: [{ heading: 'Learn', items: ['Activation-aware quantization'] }],
      },
      {
        title: 'SmoothQuant',
        notes: [{ heading: 'Learn', items: ['Activation/weight scaling', 'INT8 inference'] }],
      },
      {
        title: 'LLM.int8()',
        notes: [{ heading: 'Learn', items: ['Mixed precision', 'Outlier handling'] }],
      },
      {
        title: 'QLoRA',
        highlight: 'Revisit from an inference/fine-tuning perspective.',
      },
    ],
  },
  {
    number: 14,
    title: 'Retrieval — Search + LLMs',
    topics: [
      {
        title: 'Dense Passage Retrieval',
        notes: [{ heading: 'Learn', items: ['Dense retrieval', 'Dual encoders', 'Negative sampling'] }],
      },
      {
        title: 'REALM',
        notes: [{ heading: 'Learn', items: ['Retrieval during language-model pretraining'] }],
      },
      {
        title: 'RAG',
        notes: [
          { heading: 'Pipeline', items: ['Query', 'Retriever', 'Relevant Documents', 'Context', 'LLM', 'Answer'] },
          { heading: 'Implement', items: ['Basic RAG'] },
        ],
      },
      {
        title: 'ColBERT',
        highlight: 'Very important retrieval architecture.',
        notes: [{ heading: 'Learn', items: ['Late interaction', 'Token-level retrieval', 'Efficient reranking'] }],
      },
      {
        title: 'Contriever',
        notes: [{ heading: 'Learn', items: ['Unsupervised dense retrieval'] }],
      },
      {
        title: 'HyDE',
        notes: [{ heading: 'Learn', items: ['Hypothetical document generation', 'Query expansion'] }],
      },
      {
        title: 'RAPTOR',
        notes: [{ heading: 'Learn', items: ['Hierarchical retrieval', 'Recursive summarization', 'Long-document retrieval'] }],
      },
      {
        title: 'Self-RAG',
        notes: [{ heading: 'Learn', items: ['Retrieval decisions', 'Self-reflection', 'Adaptive retrieval'] }],
      },
      {
        title: 'Corrective RAG',
        notes: [{ heading: 'Learn', items: ['Retrieval evaluation', 'Correction mechanisms', 'Adaptive retrieval'] }],
      },
      {
        title: 'GraphRAG',
        notes: [{ heading: 'Learn', items: ['Knowledge graphs', 'Entity relationships', 'Graph-based retrieval'] }],
      },
    ],
  },
  {
    number: 15,
    title: 'RAG Engineering',
    description: 'This section is less about one paper and more about mastering the system.',
    topics: [
      'Chunking strategies', 'Semantic chunking', 'Parent-child retrieval', 'Hybrid search', 'BM25',
      'Dense + sparse retrieval', 'Reranking', 'Cross-encoders', 'Query rewriting', 'Query decomposition',
      'Multi-hop retrieval', 'Metadata filtering', 'Context compression', 'Retrieval evaluation', 'Faithfulness evaluation',
      {
        title: 'Capstone: production RAG benchmark',
        notes: [{ heading: 'Build', items: ['A production-style RAG system and benchmark each retrieval strategy'] }],
      },
    ],
  },
  {
    number: 16,
    title: 'Agents — LLMs That Use Tools',
    topics: [
      {
        title: 'ReAct',
        highlight: 'One of the most important agent papers.',
        notes: [
          { heading: 'Pipeline', items: ['Reason', 'Act', 'Observe', 'Reason', 'Act'] },
          { heading: 'Build', items: ['A simple agent'] },
        ],
      },
      {
        title: 'Toolformer',
        notes: [{ heading: 'Learn', items: ['Tool-use learning', 'API calls', 'Self-supervised tool usage'] }],
      },
      {
        title: 'MRKL',
        notes: [{ heading: 'Learn', items: ['Modular reasoning', 'External tools', 'Routing'] }],
      },
      {
        title: 'Reflexion',
        notes: [{ heading: 'Learn', items: ['Self-reflection', 'Feedback', 'Memory'] }],
      },
      {
        title: 'Tree of Thoughts',
        notes: [{ heading: 'Learn', items: ['Search', 'Branching reasoning', 'Evaluation of intermediate states'] }],
      },
      {
        title: 'Graph of Thoughts',
        notes: [{ heading: 'Learn', items: ['Graph-based reasoning', 'Non-linear reasoning processes'] }],
      },
      {
        title: 'Voyager',
        notes: [{ heading: 'Learn', items: ['Autonomous agents', 'Skill libraries', 'Long-term memory'] }],
      },
      {
        title: 'Generative Agents',
        notes: [{ heading: 'Learn', items: ['Memory', 'Planning', 'Reflection', 'Simulated environments'] }],
      },
    ],
  },
  {
    number: 17,
    title: 'Agent Engineering',
    description: "These aren't necessarily paper-specific.",
    topics: [
      'Agent vs workflow', 'Tool calling', 'Tool selection', 'Planning', 'Task decomposition', 'Agent memory',
      'Short-term memory', 'Long-term memory', 'State machines', 'Human-in-the-loop', 'Agent permissions',
      'Agent sandboxing', 'Agent observability', 'Agent evaluation', 'Multi-agent systems', 'Supervisor architecture',
      'Planner/executor architecture',
    ],
  },
  {
    number: 18,
    title: 'MCP',
    description: 'A modern AI developer should understand the emerging model/tool interoperability layer.',
    topics: [
      'MCP architecture', 'MCP clients', 'MCP servers', 'MCP tools', 'MCP resources', 'MCP prompts',
      'MCP authentication', 'MCP authorization', 'MCP security', 'Remote MCP', 'Tool discovery',
      'Tool permissioning', 'Tool injection attacks',
      {
        title: 'Capstone: build your own MCP server',
        notes: [{ heading: 'Build', items: ['Your own MCP server'] }],
      },
    ],
  },
  {
    number: 19,
    title: 'LLM Evaluation',
    description: 'This is an area where you can differentiate yourself significantly.',
    topics: [
      {
        title: 'LLM-as-a-Judge',
        notes: [{ heading: 'Understand', items: ['Evaluator models', 'Judge bias', 'Pairwise evaluation'] }],
      },
      {
        title: 'MT-Bench',
        notes: [{ heading: 'Study', items: ['Conversational evaluation'] }],
      },
      {
        title: 'HELM',
        notes: [{ heading: 'Study', items: ['Holistic language-model evaluation'] }],
      },
      {
        title: 'BIG-bench',
        notes: [{ heading: 'Study', items: ['Broad capability evaluation'] }],
      },
      {
        title: 'RAGAS',
        notes: [{ heading: 'Learn', items: ['Practical RAG evaluation'] }],
      },
      {
        title: 'SWE-bench',
        highlight: 'Extremely relevant for coding agents.',
        notes: [
          {
            heading: 'Understand',
            items: ['Real GitHub issues', 'Repository-level reasoning', 'Patch generation', 'Automated evaluation'],
          },
        ],
      },
      {
        title: 'Agent benchmarks',
        highlight: 'The exact benchmark set should be updated as the field changes.',
        notes: [{ heading: 'Study', items: ['Tool use', 'Browsing', 'Coding', 'Planning', 'Computer use'] }],
      },
    ],
  },
  {
    number: 20,
    title: 'Inference — Making LLMs Fast',
    topics: [
      {
        title: 'vLLM / PagedAttention',
        highlight: 'Essential.',
        notes: [{ heading: 'Learn', items: ['KV cache', 'Paging', 'Continuous batching'] }],
      },
      {
        title: 'Orca',
        notes: [{ heading: 'Learn', items: ['Iteration-level scheduling', 'LLM serving'] }],
      },
      {
        title: 'Speculative Decoding',
        notes: [{ heading: 'Pipeline', items: ['Small model', 'Draft tokens', 'Large model verifies', 'Faster generation'] }],
      },
      {
        title: 'Medusa',
        notes: [{ heading: 'Learn', items: ['Multi-token prediction', 'Accelerated decoding'] }],
      },
      {
        title: 'DistilBERT / Knowledge Distillation',
        notes: [{ heading: 'Learn', items: ['Teacher/student models', 'Model compression'] }],
      },
      {
        title: 'DeepSpeed Inference',
        notes: [{ heading: 'Study', items: ['Optimized serving', 'Parallel inference'] }],
      },
      {
        title: 'TensorRT-LLM',
        notes: [{ heading: 'Understand', items: ['Optimized GPU inference', 'Kernels', 'Quantization'] }],
      },
    ],
  },
  {
    number: 21,
    title: 'Multimodal AI — Vision + Language',
    topics: [
      {
        title: 'CLIP',
        notes: [{ heading: 'Learn', items: ['Contrastive vision-language learning', 'Shared embedding spaces'] }],
      },
      {
        title: 'BLIP',
        notes: [{ heading: 'Learn', items: ['Image-text understanding', 'Captioning'] }],
      },
      {
        title: 'BLIP-2',
        notes: [{ heading: 'Learn', items: ['Connecting vision encoders to LLMs'] }],
      },
      {
        title: 'Flamingo',
        notes: [{ heading: 'Learn', items: ['Few-shot multimodal learning'] }],
      },
      {
        title: 'LLaVA',
        notes: [{ heading: 'Learn', items: ['Vision-language instruction tuning'] }],
      },
      {
        title: 'ImageBind',
        notes: [{ heading: 'Learn', items: ['Shared embedding space across modalities'] }],
      },
      {
        title: 'Segment Anything',
        notes: [{ heading: 'Learn', items: ['Foundation models for vision', 'Segmentation'] }],
      },
    ],
  },
  {
    number: 22,
    title: 'Generative Vision',
    topics: [
      {
        title: 'Auto-Encoding Variational Bayes',
        notes: [{ heading: 'Learn', items: ['Latent spaces', 'Probabilistic generation'] }],
      },
      {
        title: 'Generative Adversarial Networks',
        notes: [{ heading: 'Learn', items: ['Generator', 'Discriminator', 'Adversarial training'] }],
      },
      {
        title: 'DDPM',
        notes: [{ heading: 'Learn', items: ['Forward diffusion', 'Reverse diffusion', 'Noise prediction'] }],
      },
      {
        title: 'DDIM',
        notes: [{ heading: 'Learn', items: ['Faster diffusion sampling'] }],
      },
      {
        title: 'Latent Diffusion Models',
        notes: [{ heading: 'Learn', items: ['Latent-space generation', 'Stable Diffusion architecture'] }],
      },
      {
        title: 'ControlNet',
        notes: [{ heading: 'Learn', items: ['Conditional image generation', 'Structural control'] }],
      },
      {
        title: 'DiT',
        notes: [{ heading: 'Learn', items: ['Transformer-based diffusion'] }],
      },
      {
        title: 'Flow Matching',
        highlight: 'Important modern generative modeling concept.',
      },
    ],
  },
  {
    number: 23,
    title: 'Reasoning Models',
    description:
      'This is where I would go after you have a strong LLM foundation. Then study major reasoning-model papers released through 2025–2026.',
    topics: [
      'Chain-of-Thought Prompting', 'Self-Consistency', 'STaR', 'Tree of Thoughts', 'Process supervision',
      'Outcome supervision', "Let's Verify Step by Step", 'Reward hacking', 'Verifiable rewards', 'GRPO',
      'Reinforcement learning for reasoning', 'Test-time compute', 'Inference-time scaling',
      'Reasoning model distillation', 'Synthetic reasoning data',
    ],
  },
  {
    number: 24,
    title: 'AI Coding Agents',
    description: 'For an FDE, this deserves its own track.',
    topics: [
      'Code generation models', 'Code completion', 'Repository-level understanding', 'Code retrieval',
      'Tool-using coding agents', 'SWE-bench', 'Planning code changes', 'Repository navigation',
      'Automated testing by agents', 'Agent-generated patches', 'Code review agents', 'Autonomous debugging',
      'Computer-use agents', 'Long-horizon coding agents', 'Agent memory for software projects',
      {
        title: 'Capstone: repository-aware coding agent',
        notes: [
          {
            heading: 'Build',
            items: ['A coding agent that can inspect a repository, modify files, run tests, and verify its changes'],
          },
        ],
      },
    ],
  },
  {
    number: 25,
    title: 'AI Security',
    topics: [
      'Prompt injection', 'Indirect prompt injection', 'Jailbreaking', 'Data exfiltration', 'RAG poisoning',
      'Tool poisoning', 'Excessive agency', 'Agent hijacking', 'Sensitive-data leakage', 'Model extraction',
      'Membership inference', 'Data poisoning', 'Adversarial examples', 'Model supply-chain security',
      'Sandboxed tool execution', 'AI red teaming',
    ],
  },
  {
    number: 26,
    title: 'Interpretability',
    description: 'For deeper ML understanding.',
    topics: [
      'Feature visualization', 'Activation analysis', 'Representation probing', 'Mechanistic interpretability',
      'Circuits', 'Sparse autoencoders', 'Superposition', 'Activation steering', 'Causal interventions', 'Model editing',
    ],
  },
  {
    number: 27,
    title: 'Advanced Training',
    topics: [
      'Curriculum learning', 'Synthetic data generation', 'Data mixture optimization', 'Deduplication',
      'Data contamination', 'Dataset quality', 'Self-training', 'Knowledge distillation', 'Model merging',
      'Continual learning', 'Catastrophic forgetting', 'Online learning',
    ],
  },
  {
    number: 28,
    title: 'Distributed AI',
    topics: [
      'GPU architecture', 'CUDA', 'Tensor cores', 'GPU memory hierarchy', 'CUDA kernels', 'NCCL',
      'Data parallelism', 'Tensor parallelism', 'Pipeline parallelism', 'Sequence parallelism', 'Expert parallelism',
      'FSDP', 'ZeRO', 'Distributed checkpointing', 'Fault-tolerant training', 'Distributed inference',
    ],
  },
  {
    number: 29,
    title: 'Frontier AI',
    description: 'These should be dynamic, because the literature will change.',
    topics: [
      'Test-time training', 'Test-time adaptation', 'Long-context architectures', 'Infinite-context approaches',
      'Memory architectures', 'Neural memory', 'World models', 'Embodied foundation models',
      'Vision-language-action models', 'Robotics foundation models', 'AI scientist systems',
      'Autonomous research agents', 'Multi-agent research systems', 'AI-native software engineering',
    ],
  },
];

export const courses: Course[] = [
  {
    slug: 'ai-ml',
    title: 'AI/ML',
    tagline: 'A developer roadmap from software engineering foundations to frontier AI research.',
    description: 'My personal AI/ML developer roadmap — basic to advanced to frontier. Each level builds on the last, from strong software engineering fundamentals through classical ML, deep learning, Transformers, LLM engineering, agents, and on to frontier research topics.',
    levels: buildLevels(aiMlRawLevels),
  },
  {
    slug: 'papers',
    title: 'Papers',
    tagline: 'Foundational and frontier papers that shaped modern AI — read, implement, understand.',
    description: 'A reading-and-implementation roadmap through the papers that built modern AI, from the perceptron to frontier reasoning and agent research. Each entry is a paper (or an engineering-focused topic block) with what to learn, build, or compare.',
    levels: buildLevels(papersRawLevels),
  },
];
