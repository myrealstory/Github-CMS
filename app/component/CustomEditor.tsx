'use client';
import React, { useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { EditorProps } from '../globalStyle';
import 'react-quill/dist/quill.snow.css';
import 'quill-emoji/dist/quill-emoji.css';

import * as Emoji from 'quill-emoji';
import { Grid } from '@mui/material';
import { margin } from '../globalStyle';

Quill.register('modules/emoji', Emoji);

const TOOLBAR_OPTIONS = {
  container: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'link'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    ['emoji'],
    ['clean'],
  ],
};

export default function CustomEditor({ translateKey, ...rest }: EditorProps) {
  const reactQuillRef = useRef<ReactQuill>(null);
  return (
    <Grid container sx={{ my: margin.m }} key={translateKey}>
      <ReactQuill
        style={{ width: '100%', marginBottom: '3rem' }}
        ref={reactQuillRef}
        theme='snow'
        placeholder='Write something'
        modules={{
          toolbar: TOOLBAR_OPTIONS,
          'emoji-toolbar': true,
          'emoji-textarea': false,
          'emoji-shortname': true,
        }}
        {...rest}
      />
    </Grid>
  );
}
