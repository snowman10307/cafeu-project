import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useUSer = () => {
   
    
    const { data: allUsers = [], isLoading: allUsersLoading,refetch } = useQuery({
        queryKey: ["users"],
        // enabled: loading,
    
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/users');
          // console.log(res);
          return res.json();
        },
      });
      return [allUsers,allUsersLoading,refetch];



};

export default useUSer;