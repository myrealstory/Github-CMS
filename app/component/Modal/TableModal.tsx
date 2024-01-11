import React from 'react';
import { DynamicTableProps } from '@/app/globalStyle';
import { StyleSkeleton } from '@/CMS_Skeleton_Style_V1';
import dynamic from 'next/dynamic';

const CustomTable = dynamic(() => import('../CustomTable'));

interface TableModalProps {
  getArray: DynamicTableProps[] | undefined;
  path: string | undefined;
}

const TableModal = ({ getArray, path }: TableModalProps) => {
  const getStyles = StyleSkeleton.style;
  return (
    <div style={getStyles.tableTheme}>
      {getArray?.map((item) => {
        const { key, ...rest } = item;
        return (
          <div key={key}>
            <CustomTable key={key} path={path} {...rest} />
          </div>
        );
      })}
    </div>
  );
};

export default TableModal;
