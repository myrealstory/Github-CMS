import {
  Button,
  DynamicComponentProps,
  LanguageList,
  defaultTitle,
} from '@/app/globalStyle';
import React from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import CustomButton from '../CustomButton';
import CustomTheme from '../CustomTheme';
import { T, clearCache } from '@/lib/FunctionLibrary';
import { COMPONENT_MAPPING } from '@/lib/getPath';
import { Grid, Typography } from '@mui/material';

interface ModalPageProps {
  getArray: DynamicComponentProps[] | undefined;
  getSubmit: Button | undefined;
  getReset?: Button | undefined;
  getEdit?: Button | undefined;
  getTitle?: LanguageList;
}

const EditModal = ({
  getArray,
  getSubmit,
  getReset,
  getEdit,
  getTitle,
}: ModalPageProps) => {
  const { control, handleSubmit, reset, setValue } = useForm();
  const findTitle = getTitle ? getTitle : defaultTitle;

  const onSubmit = (data: FieldValues) => {
    const key = getArray?.map((item) => item.key);

    if (key && key[0] === 'cleanCache') {
      clearCache();
    } else {
      console.log('Submit senddata', data);
    }
  };
  const handleEdit = (data: FieldValues) => console.log('Edit senddata', data);
  const handleReset = () => reset();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomTheme>
        {getTitle && (
          <Typography mb={2} variant='h6'>
            {T(findTitle)}
          </Typography>
        )}
        <Grid
          container
          columnSpacing={1}
          rowSpacing={1}
          sx={{ alignItems: 'center' }}
          pl={1}
        >
          {getArray?.map((item) => {
            const { type, label, ...rest } = item;
            const Component =
              COMPONENT_MAPPING[type as keyof typeof COMPONENT_MAPPING];
            console.log('Application', rest);
            return (
              <React.Fragment key={rest.key}>
                <Controller
                  render={({ field }) => (
                    <React.Fragment key={rest.key}>
                      <Component
                        label={label ? label : defaultTitle}
                        {...rest}
                        {...field}
                        customkey={rest.key}
                        setValue={setValue}
                      />
                    </React.Fragment>
                  )}
                  control={control}
                  name={rest.key}
                />
              </React.Fragment>
            );
          })}
        </Grid>
      </CustomTheme>
      <div style={{ display: 'flex' }}>
        {getSubmit ? (
          <CustomButton
            label={getSubmit.label}
            colors={'buttonConfirm'}
            type={'submit'}
          />
        ) : null}
        {getReset ? (
          <CustomButton
            label={getReset.label}
            colors={'buttonReset'}
            onclick={handleReset}
            type={'button'}
          />
        ) : null}
        {getEdit ? (
          <CustomButton
            label={getEdit.label}
            colors={'buttonReset'}
            onclick={handleEdit}
            type={'button'}
          />
        ) : null}
      </div>
    </form>
  );
};

export default EditModal;
