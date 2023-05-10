import { useEffect, useState } from 'react';
import getUserData from '../utils/getUserData';

export default function useUserData() {
  const [data, setData] = useState(getUserData());

  useEffect(() => {
    function handleChangeStorage() {
        setData(getUserData());
    }

    window.addEventListener('storage', handleChangeStorage);
    return () => window.removeEventListener('storage', handleChangeStorage);
  }, []);

  return data;
}
