import React,{ forwardRef} from 'react';
import CustomTheme from '../CustomTheme';
import { DynamicComponentProps } from '@/app/globalStyle';
import { COMPONENT_MAPPING } from '@/lib/getPath';

interface NoModalProps {
	getArray: DynamicComponentProps[] | undefined;
}


const NoModal = ({getArray}:NoModalProps) => {

	const ComponentWithRef = forwardRef<unknown, DynamicComponentProps>(
    ({ type, ...rest }, ref) => {
      const Component = COMPONENT_MAPPING[type as keyof typeof COMPONENT_MAPPING];
      return <Component {...rest} ref={ref} />;
    }
  );

  ComponentWithRef.displayName = 'ComponentWithRef';

  return (
    <CustomTheme>
      {getArray?.map((item) => {
        const { key, ...rest } = item;
        return <ComponentWithRef key={key} {...rest} />;
      })}
    </CustomTheme>
  );

};

export default NoModal;
