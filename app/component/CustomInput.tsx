import React from 'react';
import { InputProps, PasswordNeccessary_Content, margin } from '../globalStyle';
import { FormControl, Grid, TextField } from '@mui/material';
import { T } from '@/lib/FunctionLibrary';

function CustomInput({ label, disable, customkey,passwordneccessary, ...rest }: InputProps) {
  
  return (
    <Grid container key={customkey} sx={{ my: margin.m }}>
      <FormControl fullWidth>
        <TextField
          id={customkey}
          label={T(label)}
          name={customkey}
          defaultValue={T(label)}
          disabled={disable ? disable : undefined}
          size='small'
          {...rest}
        />
        {passwordneccessary && (
          <div>{T(PasswordNeccessary_Content)}</div>
          )}
      </FormControl>
    </Grid>
  );
}

export default CustomInput;
