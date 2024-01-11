'use client';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Grid } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers';
import { DateTimePickerProps } from '@mui/x-date-pickers';
import { DatePickerProps, margin } from '../globalStyle';
import { T } from '@/lib/FunctionLibrary';

interface PickerProps extends DateTimePickerProps {
  onDateTimeChange: (dateTime: Date | null) => void;
}

function CustomDatepicker(
  { grid, label, translateKey,key,...rest }: DatePickerProps,
  { onDateTimeChange }: PickerProps
) {
  const [dateTime, setDateTime] = useState<Date | null>(new Date());
  const handleDateTimeChange = (value: Date | null) => {
    setDateTime(value);
    onDateTimeChange(value);
  };
  const now = dayjs();

  return (
    <Grid item xs={grid} key={translateKey}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DateTimePicker']}>
          <DateTimePicker
            label={T(label)}
            name={key}
            defaultValue={now}
            sx={{ width: '100%', mb: margin.m }}
            onChange={handleDateTimeChange}
            value={dateTime}
            {...rest}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Grid>
  );
}

export default CustomDatepicker;
