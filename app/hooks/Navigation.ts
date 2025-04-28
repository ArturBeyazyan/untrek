'use client';

export const useNavigation = () => {
  const navigate = (path: string) => {
    window.location.href = path;
  };

  return { navigate };
};

// import { useRouter } from 'next/router';

// export const useNavigation = () => {
//   const router = useRouter();

//   const navigate = (path: string) => {
//     router.push(path);
//   };

//   return { navigate };
// };
