// app/hooks/useLocalStorage.ts
'use client';
import { useState, useEffect } from 'react';

/**
 * Hook para gerenciar estado persistente no LocalStorage.
 * @param key Chave para salvar no storage
 * @param initialValue Valor inicial caso não exista nada salvo
 * @returns [storedValue, setValue, isHydrated]
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // 1. Valor padrão para garantir que o HTML do servidor
  // seja igual ao HTML inicial do cliente (evita erros de Hydration)
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  
  // 2. Estado auxiliar para saber quando o valor foi lido do storage
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Apenas executa no cliente
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`Erro ao ler a chave "${key}" do localStorage:`, error);
    } finally {
      setIsHydrated(true); // Marca como carregado/hidratado
    }
  }, [key]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permite passar função como no useState padrão: setValue(old => !old)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Erro ao salvar a chave "${key}" no localStorage:`, error);
    }
  };

  return [storedValue, setValue, isHydrated] as const;
}