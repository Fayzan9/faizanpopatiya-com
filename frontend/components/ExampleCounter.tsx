'use client';

import { useExampleStore } from '@/stores/exampleStore';

export function ExampleCounter() {
  const { count, increment, decrement, reset } = useExampleStore();

  return (
    <div className="flex flex-col items-center gap-4 p-6 border border-gray-200 rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Zustand Counter Example</h2>
      <div className="text-4xl font-bold">{count}</div>
      <div className="flex gap-2">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
