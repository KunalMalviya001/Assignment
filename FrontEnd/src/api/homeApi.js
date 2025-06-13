// Custom React Query hooks for fetching destinations and top-selling packages from the API
import { useQuery } from '@tanstack/react-query';
import axios from './axios';

// Hook to fetch all travel destinations
export const useDestinations = () => {
  return useQuery({
    queryKey: ['destinations'],
    queryFn: async () => {
      const { data } = await axios.get('/destinations');
      return data;
    },
  });
};

// Hook to fetch top-selling travel packages
export const useTopSellingPackages = () => {
  return useQuery({
    queryKey: ['topSellingPackages'],
    queryFn: async () => {
      const { data } = await axios.get('/packages/top-selling');
      return data;
    },
  });
};
