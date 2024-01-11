'use client';

import CustomBreadcrumbs from '@/app/component/CustomBreadcrumbs';
import { Main, defaultTitle } from '@/app/globalStyle';
import { useGetMasterQuery } from '@/app/redux/services/masterDataApi';
import { getElements, getModal } from '@/lib/FunctionLibrary';
import { Box, CircularProgress } from '@mui/material';
import { isNull } from 'lodash';

export default function Edit({
  params,
}: {
  params: { routes: string; edit: string };
}) {
  const { data, isLoading } = useGetMasterQuery(isNull);
  const path = 'admin/' + params.routes + '/edit';

  const { getSection, submitBTN, resetBTN, editBTN } = getElements({
    path: path,
    getMaster: data,
    editPage: true,
  });

  return (
    <div style={Main}>
      <CustomBreadcrumbs
        mainLink={'/admin'}
        backToLink={`/admin/${params.routes}`}
        main={{ en: 'Main', zh: '主頁' }}
        backto={getSection ? getSection.title : defaultTitle}
        currentPage={{ en: 'Edit', zh: '編輯' }}
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
      {getSection &&
        getSection?.elements.map((element, index) => {
          return (
            <div key={index}>
              {getModal({
                modal: element?.modal,
                getArray: element?.components,
                getSubmit: submitBTN,
                getEdit: resetBTN,
                getReset: editBTN,
                getTitle: getSection?.title,
              })}
            </div>
          );
        })}
    </div>
  );
}
