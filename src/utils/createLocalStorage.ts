import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";

export const storage = {
  getItem<T>(key: string, fallback?: T): T {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      if (!fallback) throw error;
      return fallback;
    }
  },
  setItem<T>(key: string, value: T) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return storage.getItem<T>(key);
    } catch (error) {
      console.error(error.message);
    }
  },
};

export function createLocalStorage<T = Record<string, unknown>>(
  key: string,
  initialStore: T
) {
  const state = storage.getItem<T>(key, initialStore);

  const [store, setStore] = createStore<T>(state);
  createEffect(() => {
    storage.setItem(key, store);
  });

  return [store, setStore] as const;
}
