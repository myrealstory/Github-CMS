import React, { useEffect, useState } from 'react';
import { IPBlockProps } from '../globalStyle';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Button, FormGroup, Grid, TextField, Typography } from '@mui/material';
import { T } from '@/lib/FunctionLibrary';

function IPBlock({ label, customkey, ...rest }: IPBlockProps) {
  const [ipValue, setIpValue] = useState('');
  const [ipsArray, setIpsArray] = useState<string[]>([]);

  const handleAdd = () => {
    if (ipValue) {
      setIpsArray([...ipsArray, ipValue]);
    }
  };

  const handleDelete = (ipToDelete: string) => {
    setIpsArray(ipsArray.filter((ip) => ip !== ipToDelete));
  };

  useEffect(() => {
    if (rest.value) {
      setIpValue(rest.value);
    } else {
      setIpValue('');
    }
  }, [rest.value]);

  return (
    <Grid container sx={{ flexDirection: 'column', my: 3 }} key={customkey}>
      <Typography sx={{ py: 1 }}>{T(label)}</Typography>
      <Grid item>
        <FormGroup row sx={{ alignItems: 'center', gap: 1, mb: 1 }}>
          <TextField
            size='small'
            id='outlined-basic'
            label='IP'
            variant='outlined'
            sx={{ flex: 1 }}
            {...rest}
            name={customkey}
          />
        </FormGroup>
      </Grid>
      {ipsArray
        ? ipsArray.map((ip) => (
            <Grid item key={ip}>
              <Button
                sx={{ border: '1px solid red', mr: 1, mb: 1 }}
                onClick={() => handleDelete(ip)}
              >
                {<DeleteIcon color='error' />}
              </Button>
              <TextField
                size='small'
                id='outlined-basic'
                variant='outlined'
                sx={{ flex: 1 }}
                name={customkey}
                value={ip}
                disabled
              />
            </Grid>
          ))
        : null}
      <Button
        variant='contained'
        sx={{ width: 'fit-content' }}
        onClick={handleAdd}
      >
        <AddIcon />
      </Button>
    </Grid>
  );
}

export default IPBlock;
