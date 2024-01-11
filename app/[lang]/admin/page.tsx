// import { Inter } from 'next/font/google'
'use client';

import { useGetMasterQuery } from '@/app/redux/services/masterDataApi';
import { Box, CircularProgress } from '@mui/material';
import { isNull } from 'lodash';
import React from 'react';

export default function Home() {
  const { isLoading } = useGetMasterQuery(isNull);

  return (
    <>
      {isLoading && (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress sx={{ mx: 'auto' }} />
        </Box>
      )}
    </>
  );
}
