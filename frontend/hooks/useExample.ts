import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiService } from '@/services/api';

interface ExampleData {
  id: number;
  name: string;
  description: string;
}

// Example query hook
export function useExampleData(id?: string) {
  return useQuery({
    queryKey: ['example', id],
    queryFn: () => apiService.getExample<ExampleData>(`/example/${id}`),
    enabled: !!id,
  });
}

// Example mutation hook
export function useCreateExample() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Omit<ExampleData, 'id'>) =>
      apiService.postExample<ExampleData, Omit<ExampleData, 'id'>>('/example', data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['example'] });
    },
  });
}
