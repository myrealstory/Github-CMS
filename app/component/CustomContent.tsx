import React from 'react';
import { ContextProps } from '../globalStyle';
import { T } from '@/lib/FunctionLibrary';

function CustomContent({label,customkey}:ContextProps) {
    return (
        <div>
            {T(label)}
            {customkey}
        </div>
    );
}

export default CustomContent;