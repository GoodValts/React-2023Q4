import { createContext } from 'react';
import { ApiDataInterface } from '../../types/Interfaces';

const ApiContext = createContext<ApiDataInterface>({
  products: null,
  setProducts: () => {},
  item: null,
  setItem: () => {},
  isItem: false,
  setIsItem: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

export default ApiContext;
