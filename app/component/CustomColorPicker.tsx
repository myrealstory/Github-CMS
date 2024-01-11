import React, { useEffect } from 'react';
import { InputProps, LanguageList, margin } from '../globalStyle';
import { FormControl, Grid, TextField } from '@mui/material';
import { T } from '@/lib/FunctionLibrary';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import { FieldValues, UseFormSetValue, useForm } from 'react-hook-form';

export interface ColorPickerProps {
  grid: number;
  label: LanguageList;
  customkey: string;
  translateKey?: string;
  setValue?: UseFormSetValue<FieldValues>;
}

function CustomColorPicker({
  grid,
  label,
  customkey,
  setValue,
  ...rest
}: InputProps) {
  const [activeBox, setActiveBox] = React.useState(false);
  const [colorPick, setColorPick] = useColor('hex', '#121212');
  const colorPickerRef = React.useRef<HTMLDivElement>(null);
  const { control } = useForm();

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as HTMLElement)
      ) {
        setActiveBox(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveBox(false);
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    control.register(customkey);
    setValue ? setValue(customkey, colorPick.hex) : null;
  }, [control, colorPick.hex, customkey, setValue]);

  const colorBox = {
    width: '3rem',
    height: '3rem',
    backgroundColor: colorPick.hex,
    borderRadius: '10%',
    marginRight: margin.sm,
  };

  const pickerBox: React.CSSProperties = {
    position: 'absolute',
    top: '3.5rem',
    left: '4rem',
    zIndex: '999',
  };
  const handleActive = () => {
    setActiveBox(true);
  };

  console.log('colorPick', grid, customkey, label, colorPick.hex);


    return (
            <Grid item xs={grid} >
                <FormControl fullWidth sx={{flexDirection:"row",alignItems:"center"}}>
                    <div style={colorBox}/>
                    <TextField
                        fullWidth
                        sx={{position:"relative"}}
                        label={colorPick.hex?colorPick.hex:T(label)}
                        // name={customkey}
                        onFocus={handleActive}
                        {...rest}
                        />
                    {activeBox && (
                        <div style={pickerBox} ref={colorPickerRef}>
                            <ColorPicker
                                color={colorPick}
                                onChange={setColorPick}
                                width={456}
                                height={200}
                                hideHSV
                                dark
                            />
                        </div>
                    )}
                </FormControl>
            </Grid>
    );
}

export default CustomColorPicker;
