'use client';

import { Button, Chip, Grid, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { TagProps, margin } from '../globalStyle';
import { T } from '@/lib/FunctionLibrary';

export default function CustomTagKey({ label, key, ...rest }: TagProps) {
  const [tagArray, setTagArray] = useState<string[]>([]);
  const [tagValue, setTagValue] = useState('');
  const add = { en: 'Add', zh: '新增' };

  useEffect(() => {
    if (rest.value) {
      setTagValue(rest.value);
    }
  }, [rest.value]);

  const handleAdd = () => {
    if (tagValue) {
      setTagArray([...tagArray, tagValue]);
    }
  };

  const handleDelete = (keyword: string) => {
    setTagArray(tagArray.filter((k) => k !== keyword));
  };
  console.log(tagArray);

  return (
    <>
      <Grid container key={key} sx={{ mb: 2, mt: 1 }} direction={'column'}>
        <Grid item>
          <TextField
            id='outlined-multiline-flexible'
            name={key}
            label={T(label)}
            variant='outlined'
            multiline
            sx={{ mb: margin.s, mr: margin.s }}
            size='small'
            {...rest}
          />
          <Button variant='contained' sx={{ pb: 1 }} onClick={handleAdd}>
            {T(add)}
          </Button>
        </Grid>
        <Grid item>
          {tagArray &&
            tagArray.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                onDelete={() => handleDelete(tag)}
                sx={{ mr: 1 }}
              />
            ))}
        </Grid>
      </Grid>
    </>
  );
}
