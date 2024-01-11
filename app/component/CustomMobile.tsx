'use client';

import React, { useState } from 'react';
import { MobileProps, margin } from '../globalStyle';
import { Grid, TextField } from '@mui/material';
import { T } from '@/lib/FunctionLibrary';

function CustomMobile({ label, translateKey,customkey, ...rest }: MobileProps) {
  const [, setInputNumber] = useState('');
  const [hasError, setHasError] = useState(false);

  // Listen input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Validate number regex
    const inputValue = e.target.value;
    const emptyInputValue = inputValue.trim() === '';
    const regex = /^(\+?852-?)?[5689]\d{3}-?\d{4}$/;
    const validNumber = regex.test(inputValue);

    if (!validNumber) setHasError(true);
    if (validNumber) {
      setInputNumber(inputValue);
      setHasError(false);
    }
    if (emptyInputValue) {
      setInputNumber('');
      setHasError(false);
    }
  };
  return (
    <Grid container sx={{ pl: 1, mt: 1 }} key={translateKey}>
      <TextField
        id='outlined-multiline-flexible'
        label={T(label)}
        variant='outlined'
         name={customkey}
        multiline
        sx={{ mb: margin.s }}
        size='small'
        {...rest}
        error={hasError}
        onChange={handleChange}
        helperText={hasError ? '格式錯誤' : null}
      />
    </Grid>
  );
}

export default CustomMobile;
