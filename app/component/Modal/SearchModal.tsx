import { Button, DynamicComponentProps, LanguageList, defaultTitle } from '@/app/globalStyle';
import React ,{forwardRef}from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { COMPONENT_MAPPING } from '@/lib/getPath';
import { Grid, Typography } from '@mui/material';
import CustomTheme from '../CustomTheme';
import { T } from '@/lib/FunctionLibrary';
import CustomButton from '../CustomButton';

interface ModalPageProps {
	getArray: DynamicComponentProps[] | undefined;
	getSubmit: Button|undefined;
	getReset?: Button|undefined;
	getEdit?: Button|undefined;
	getTitle?:LanguageList;
}

// const searchText = { en: 'Search', zh: '搜尋' };

const SearchModal = forwardRef<HTMLFormElement, ModalPageProps>(({
	getArray,
	getSubmit,
	getReset,
	getEdit,
	getTitle,
}: ModalPageProps,ref) => {
	const { control, handleSubmit, reset } = useForm();

    console.log('getButton', getSubmit, getReset, getEdit);

	const onSubmit = (data: FieldValues) => console.log('Submit senddata', data);
	const handleEdit = (data: FieldValues) => console.log('Edit senddata', data);
	const handleReset = () => reset();
	const findTitle = getTitle? getTitle : defaultTitle;

	return (
		<CustomTheme>
			<form onSubmit={handleSubmit(onSubmit)} ref={ref}>
				<Typography mb={2} variant="h6">{getTitle?"搜尋":T(findTitle)}</Typography>
				<Grid
					container
					columnSpacing={1}
					rowSpacing={1}
					sx={{ alignItems: 'center' }}
				>
					{getArray?.map((item) => {
					
						const {key , type ,label, ...rest} = item;
						const Component = COMPONENT_MAPPING[type as keyof typeof COMPONENT_MAPPING];
							return (
								<React.Fragment key={key}>
									<Controller
										render={({field}) => (
											<React.Fragment key={key}>
												<Component 
													label={label?label:defaultTitle}
													customkey={key}
													{...rest} 
													{...field} 	
												/>
											</React.Fragment>
										)}
										control={control}
										name={key}
									/>
								</React.Fragment>
							);
						})}

            {getSubmit ? (
              <CustomButton
                label={getSubmit.label}
                colors={'buttonConfirm'}
                type={'submit'}
                onclick={onSubmit}
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
                colors={'buttonConfirm'}
                onclick={handleEdit}
                type={'button'}
              />
            ) : null}
          </Grid>
        </form>
      </CustomTheme>
    );
  }
);

SearchModal.displayName = 'SearchModal';

export default SearchModal;
