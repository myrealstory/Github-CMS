'use client';
import {
  Button,
  Typography,
  FormHelperText,
  Box,
  ImageListItem,
  ImageListItemBar,
  Grid,
  IconButton,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useState } from 'react';

import { T } from '@/lib/FunctionLibrary';
import Image from 'next/image';
import { ImageProps } from '../globalStyle';

function CustomImages({ onChange,grid,label }: ImageProps) {
  const [imageUrl, setImageUrl] = useState('');
  const upload = { en: 'Upload', zh: '上傳' };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      onChange(file);
    }
  };

  const handleDelete = () => {
    setImageUrl('');
  };
  return (
    <Grid item xs={grid}>
      <Typography>{T(label)}</Typography>
      <Box>
        {imageUrl && (
          <ImageListItem
            key={imageUrl}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Image
              src={imageUrl}
              width={400}
              height={400}
              alt='preview'
              loading='lazy'
            />
            <ImageListItemBar
              title={imageUrl}
              actionIcon={
                <IconButton
                  onClick={handleDelete}
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label='delete image'
                >
                  <ClearIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        )}
      </Box>
      <Grid item xs={grid}>
        <Button
          variant='contained'
          component='label'
          // sx={{ mt: margin.s, mb: margin.s }}
          // {...rest}
        >
          {T(upload)}
          <input
            hidden
            accept='image/*'
            type='file'
            onChange={handleImageChange}
          />
        </Button>
        <FormHelperText>
          <span>
            Size: w1170 (support dynamic heights) <br />
            Supported format: png <br />
            Max. file size: 5MB
          </span>
        </FormHelperText>
      </Grid>
    </Grid>
  );
}

export default CustomImages;
