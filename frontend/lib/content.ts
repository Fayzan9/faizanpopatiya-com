import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDirectory = path.join(process.cwd(), 'content');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  readingTime: string;
  content: string;
  published: boolean;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  content: string;
}

export interface Product {
  slug: string;
  title: string;
  excerpt: string;
  price: number;
  category: string;
  image: string;
  tags: string[];
  featured: boolean;
  demoUrl?: string;
  downloadUrl?: string;
  purchaseUrl?: string;
  difficulty: string;
  version: string;
  lastUpdated: string;
  rating?: number;
  reviews?: number;
  downloads?: number;
  isPro: boolean;
  license: string;
  content: string;
  published: boolean;
}

export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(contentDirectory, 'blog');
  
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir);
  
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const filePath = path.join(blogDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        category: data.category,
        author: data.author || 'Anonymous',
        readingTime: stats.text,
        content,
        published: data.published !== false,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(contentDirectory, 'blog', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      category: data.category,
      author: data.author || 'Anonymous',
      readingTime: stats.text,
      content,
      published: data.published !== false,
    };
  } catch (error) {
    return null;
  }
}

export function getProjects(): Project[] {
  const projectsDir = path.join(contentDirectory, 'projects');
  
  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  const files = fs.readdirSync(projectsDir);
  
  const projects = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const filePath = path.join(projectsDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        longDescription: data.longDescription,
        image: data.image,
        tags: data.tags || [],
        demoUrl: data.demoUrl,
        githubUrl: data.githubUrl,
        featured: data.featured || false,
        content,
      };
    });

  return projects;
}

export function getProject(slug: string): Project | null {
  try {
    const filePath = path.join(contentDirectory, 'projects', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      longDescription: data.longDescription,
      image: data.image,
      tags: data.tags || [],
      demoUrl: data.demoUrl,
      githubUrl: data.githubUrl,
      featured: data.featured || false,
      content,
    };
  } catch (error) {
    return null;
  }
}

export interface CourseTopicContent {
  title: string;
  excerpt?: string;
  date?: string;
  author?: string;
  category?: string;
  content: string;
}

export function getCourseTopicContent(courseSlug: string, topicSlug: string): CourseTopicContent | null {
  try {
    const filePath = path.join(contentDirectory, 'courses', courseSlug, `${topicSlug}.mdx`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      author: data.author || 'Faizan Popatiya',
      category: data.category,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getProducts(): Product[] {
  const productsDir = path.join(contentDirectory, 'products');
  
  if (!fs.existsSync(productsDir)) {
    return [];
  }

  const files = fs.readdirSync(productsDir);
  
  const products = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const filePath = path.join(productsDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        price: data.price,
        category: data.category,
        image: data.image,
        tags: data.tags || [],
        featured: data.featured || false,
        demoUrl: data.demoUrl,
        downloadUrl: data.downloadUrl,
        purchaseUrl: data.purchaseUrl,
        difficulty: data.difficulty || 'intermediate',
        version: data.version || '1.0.0',
        lastUpdated: data.lastUpdated,
        rating: data.rating,
        reviews: data.reviews,
        downloads: data.downloads,
        isPro: data.isPro || false,
        license: data.license || 'MIT',
        content,
        published: data.published !== false,
      };
    })
    .filter((product) => product.published);

  return products;
}

export function getProduct(slug: string): Product | null {
  try {
    const filePath = path.join(contentDirectory, 'products', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      price: data.price,
      category: data.category,
      image: data.image,
      tags: data.tags || [],
      featured: data.featured || false,
      demoUrl: data.demoUrl,
      downloadUrl: data.downloadUrl,
      purchaseUrl: data.purchaseUrl,
      difficulty: data.difficulty || 'intermediate',
      version: data.version || '1.0.0',
      lastUpdated: data.lastUpdated,
      rating: data.rating,
      reviews: data.reviews,
      downloads: data.downloads,
      isPro: data.isPro || false,
      license: data.license || 'MIT',
      content,
      published: data.published !== false,
    };
  } catch (error) {
    return null;
  }
}
