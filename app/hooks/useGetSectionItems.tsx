'use client';
import { useGetDataQuery } from '@/app/redux/services/dataApi';
import { useEffect, useState } from 'react';
import { DataType } from '../component/style/style.table';

export default function useGetSectionItems(path: string, pathId: string) {
  const [fetchData, setFetchData] = useState<DataType[]>([]);
  const { data, error, isLoading } = useGetDataQuery(path ? path : '');

  const fetchApi = () => {
    data ? setFetchData(data && data.data) : null;
  };

  useEffect(() => {
    fetchApi();
  }, [data, error, isLoading]);

  const filteredData =
    fetchData &&
    fetchData
      .map((items) => items)
      .filter((item) => item.id === parseInt(pathId));

  return { filteredData };
}
