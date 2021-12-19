import { Component, createContext, createMemo, useContext, mergeProps } from 'solid-js';

import { toGetters } from '@/utils/toGetters';
import { createLocalStorage } from '@/utils/createLocalStorage';

type AuthState = Partial<{ token: string }>;

function createContextStore() {
  const defaultAuthState: AuthState = { token: '' };

  const [store, setStore] = createLocalStorage<AuthState>('auth', defaultAuthState);
  const isLoggedIn = createMemo(() => Boolean(store.token));

  return [
    mergeProps(store, toGetters({ isLoggedIn })),
    {
      async login(username: string, password: string) {
        const token = `${username}:${password}`;
        setStore({ token });
      },

      async logout() {
        setStore(defaultAuthState);
      },
    },
  ] as const;
}

type Provider = ReturnType<typeof createContextStore>;

const Context = createContext<Provider>();

const AuthProvider: Component = (props) => {
  const contextStore = createContextStore();

  return <Context.Provider value={contextStore}>{props.children}</Context.Provider>;
};

const useAuth = () => useContext(Context);

export { AuthProvider, useAuth };
