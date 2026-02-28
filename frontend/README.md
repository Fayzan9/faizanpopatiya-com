# Frontend Setup

A modern Next.js frontend application with TypeScript, Tailwind CSS, and a complete development stack.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI)
- **State Management**: Zustand (lightweight global state)
- **Data Fetching**: TanStack Query (React Query)
- **Form Handling**: React Hook Form
- **API Client**: Axios

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── app/                    # Next.js app directory (routes)
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ExampleCounter.tsx # Zustand example
│   └── ExampleForm.tsx    # React Hook Form example
├── hooks/                 # Custom React hooks
│   └── useExample.ts      # React Query hook example
├── lib/                   # Utility functions
│   └── utils.ts           # shadcn/ui utils
├── providers/             # React context providers
│   └── QueryProvider.tsx  # React Query provider
├── services/              # API services
│   └── api.ts             # Axios instance and API methods
├── stores/                # Zustand stores
│   └── exampleStore.ts    # Example store
├── types/                 # TypeScript type definitions
│   └── index.ts           # Common types
└── public/                # Static assets

```

## Key Features

### State Management with Zustand

Simple and lightweight global state management:

```typescript
import { useExampleStore } from '@/stores/exampleStore';

const { count, increment } = useExampleStore();
```

### Data Fetching with React Query

Server state management with caching and automatic refetching:

```typescript
import { useExampleData } from '@/hooks/useExample';

const { data, isLoading, error } = useExampleData('1');
```

### Form Handling with React Hook Form

Type-safe form handling with validation:

```typescript
import { useForm } from 'react-hook-form';

const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
```

### API Calls with Axios

Configured Axios instance with interceptors:

```typescript
import { apiService } from '@/services/api';

const data = await apiService.getExample('/endpoint');
```

### UI Components with shadcn/ui

Add components as needed:

```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Adding New Features

### Adding a new page

Create a new file in the `app/` directory:

```typescript
// app/about/page.tsx
export default function About() {
  return <div>About Page</div>;
}
```

### Adding a new component

Create a new file in the `components/` directory:

```typescript
// components/MyComponent.tsx
export function MyComponent() {
  return <div>My Component</div>;
}
```

### Adding a new Zustand store

Create a new file in the `stores/` directory:

```typescript
// stores/myStore.ts
import { create } from 'zustand';

interface MyState {
  value: string;
  setValue: (value: string) => void;
}

export const useMyStore = create<MyState>((set) => ({
  value: '',
  setValue: (value) => set({ value }),
}));
```

### Adding a new API hook

Create a new file in the `hooks/` directory:

```typescript
// hooks/useMyData.ts
import { useQuery } from '@tanstack/react-query';
import { apiService } from '@/services/api';

export function useMyData() {
  return useQuery({
    queryKey: ['myData'],
    queryFn: () => apiService.getExample('/my-endpoint'),
  });
}
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Axios Documentation](https://axios-http.com/)

