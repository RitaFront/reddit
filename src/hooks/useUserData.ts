import { useEffect } from 'react';
import { useTypedSelector } from './useTypedSelector';
import { useActions } from './useActions';

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export const useUserData = () => {
  const { data, loading } = useTypedSelector((state) => state.me);
  const { token } = useTypedSelector((state) => state.token);
  const { meRequestAsync } = useActions();

  useEffect(() => {
    if (!token) return;
    meRequestAsync();
  }, [token]);

  return { data, loading };
};
