import { useEffect, useState } from 'react';
import type { PersistData } from '../utils/getUserData';

function getProfileData(): PersistData | object {
  if (typeof window === 'undefined') return {};
  return JSON.parse(localStorage.getItem('persist:root') || '{}') as PersistData;
}

export default function useProfileData() {
  const [profile, setProfile] = useState(getProfileData());

  useEffect(() => {
    function handleChangeStorage() {
      setProfile(getProfileData());
    }

    window.addEventListener('storage', handleChangeStorage);
    return () => window.removeEventListener('storage', handleChangeStorage);
  }, []);

  return profile;
}
