import { useState, ReactNode, useMemo } from 'react';
import ApiContent from './apiContext';
import PaginationContent from './paginationContext';
import { productParams } from '../../types/Interfaces';

const AppContentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchStr, setSearchStr] = useState<string>('');
  const [products, setProducts] = useState<productParams[] | null>(null);
  const [item, setItem] = useState<productParams | null>(null);
  const [isItem, setIsItem] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const apiValue = useMemo(() => {
    return {
      searchStr,
      setSearchStr,
      products,
      setProducts,
      item,
      setItem,
      isItem,
      setIsItem,
      isLoading,
      setIsLoading,
    };
  }, [searchStr, products, item, isItem, isLoading]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const paginationValue = useMemo(() => {
    return {
      page,
      setPage,
      limit,
      setLimit,
      totalItems,
      setTotalItems,
    };
  }, [page, limit, totalItems]);

  return (
    <ApiContent.Provider value={apiValue}>
      <PaginationContent.Provider value={paginationValue}>
        {children}
      </PaginationContent.Provider>
    </ApiContent.Provider>
  );
};

export default AppContentProvider;
