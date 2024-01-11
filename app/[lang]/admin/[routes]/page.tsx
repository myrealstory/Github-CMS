'use client';

import CustomBreadcrumbs from '@/app/component/CustomBreadcrumbs';
import { Main, defaultTitle } from '@/app/globalStyle';
import { useGetMasterQuery } from '@/app/redux/services/masterDataApi';
import { getElements, getModal } from '@/lib/FunctionLibrary';
import { Box, CircularProgress } from '@mui/material';
import { isNull } from 'lodash';

export default function Page({ params }: { params: { routes: string } }) {
  const { data, isLoading } = useGetMasterQuery(isNull);
  const path = 'admin/' + params.routes;

  const { getSection, submitBTN, resetBTN, editBTN } = getElements({
    path: path,
    getMaster: data,
  });

  return (
    <div style={Main}>
      <CustomBreadcrumbs
        backToLink='/admin'
        backto={{ en: 'Main', zh: '主頁' }}
        currentPage={getSection ? getSection.title : defaultTitle}
      />
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
      {getSection?.elements.map((element, index) => {
        return (
          <div key={index}>
            {getModal({
              modal: element?.modal,
              getArray: element?.components,
              getSubmit: submitBTN,
              getEdit: editBTN,
              getReset: resetBTN,
              getTitle: getSection?.title,
              path,
            })}
          </div>
        );
      })}
    </div>
  );
}
