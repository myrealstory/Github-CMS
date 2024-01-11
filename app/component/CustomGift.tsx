
import React from 'react';
import CustomButton from './CustomButton';
import {useForm, useFieldArray} from 'react-hook-form';
import { Grid, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { colors, margin } from '../globalStyle';
import DeleteIcon from '@mui/icons-material/Delete';
import { T } from '@/lib/FunctionLibrary';
// import { useGetDataQuery } from '../redux/services/dataApi';
// import { find } from 'lodash';
// import { useAppSelector } from '../redux/hooks';

//TODO
// Here to produce a function which allows user to custom gift
// 1. User can design the gift from the list
// 2. GET and POST and exclusive API for this component. 
// 3. The gift will be saved in the database
// 4. get Gift id from TableAPI for filter data and display here.
// 5. can all set together with comma --> "," 
// 6. this component have to build function and get condition example: "gift100,gift101",and use split and to filting CustomGift exclusive API.

function CustomGift() {
    // const {data} = useGetDataQuery('event');
    // const data = [] as never[];
    const label = {en:"+ Gift",zh:"+ 禮物"};
    const giftName = T({en:'Gift Name',zh:'禮物名稱'});
    const giftNameEN = T({en:"Gift Name (EN)",zh:"禮物名稱 (EN)"});
    const giftTotalAmount = T({en:"Gift Total",zh:"配額"});
    const giftSent = T({en:"Gift Sent",zh:"派出數目"});
    const giftRemain = T({en:"Gift Remain",zh:"剩餘"});
    const giftRate = T({en:"Winning Rate",zh:"機率"});
    const giftID = T({en:"Gift ID",zh:"禮物 ID"});

    const borderLine = {
        borderTop:"1px solid rgba(0,0,0,0.08)",
        marginTop:margin.l
    };
    const fieldBox = {
        width:"100%",
        backgroundColor:colors.gray,
        borderRadius:margin.ss,
        paddingTop:margin.s,
        paddingBottom:margin.sm,
        marginTop:margin.sm,
        display:"flex",
        alignItems:"center",
    };
    const deleteButton = {
        border:"none",
        backgroundColor:"transparent",
        marginRight:margin.ss,
        padding:margin.sm,
    };
    const inputStyle={
        backgroundColor:colors.white,
        borderRadius:margin.ss,
        width:"100%",
        marginRight:margin.s,

    };
    const grid = 12;
    const { control } =useForm();
    const {fields , append , remove} = useFieldArray({
        control,
        name:"gift"
    }); 

    return (
        <Grid item xs={grid} sx={borderLine}>
            <div style={{marginTop:margin.sm}}>
            <CustomButton label={label} type={"button"} colors={"buttonConfirm"} onclick={()=> append({name:""})}/>
            {fields.map((field , index)=>(
                <div key={field.id} style={fieldBox}>
                    {/* <input {...register(`formList.${index}.name`)}/> */}
                    <button type="button" onClick={()=> remove(index)} style={deleteButton}><DeleteIcon color={"disabled"}/></button>
                    <div style={{width:"100%"}}>
                            <div style={{width:"100%",display:"flex",justifyContent:"space-between",marginTop:margin.s,marginBottom:margin.s}}>
                                <TextField label={giftName} name="giftname" size="small" sx={inputStyle} required/>
                                <TextField label={giftNameEN} name="giftnameen" size="small" sx={inputStyle} required/>
                            </div>
                            <div style={{width:"100%",display:"flex",justifyContent:"space-between",marginTop:margin.s,marginBottom:margin.s}}>
                                <TextField label={giftTotalAmount} name="giftname" size="small"  sx={inputStyle} required/>
                                <TextField label={giftSent} name="giftnameen" size="small" sx={inputStyle} defaultValue={0} disabled/>
                                <TextField label={giftRemain} name="giftnameen" size="small" sx={inputStyle} defaultValue={0} disabled/>
                                <OutlinedInput label={giftRate} name="giftnameen" size="small" sx={inputStyle} defaultValue={"0.000"} endAdornment={<InputAdornment position="end">%</InputAdornment>}  disabled/>
                            </div>
                            <div style={{width:"50%",display:"flex",justifyContent:"space-between",marginTop:margin.s,marginBottom:margin.s}}>
                                <TextField label={giftID} name="giftname" size="small" sx={inputStyle} disabled/>
                            </div>
                            
                        {/* <p>{giftName}</p> */}
                        {/* <Grid container sx={{margin:`${margin.sm},0`}}>
                            <Grid item xs={3}>
                                <TextField label={<Typography>{giftTotalAmount}</Typography>} inputMode='numeric' name="gifttotalamount" defaultValue={eventGiftData?eventGiftData.gifttotalamount as number:0}  {...rest} />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField label={<Typography>{giftSent}</Typography>} inputMode='numeric' name="giftsent" defaultValue={eventGiftData?eventGiftData.giftsent as number:0}  {...rest} disabled/>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField label={<Typography>{giftRemain}</Typography>} inputMode='numeric' name="giftremain" defaultValue={eventGiftData?eventGiftData.giftremain as number:0} {...rest} disabled/>
                            </Grid>
                            <Grid item xs={3}>
                                <OutlinedInput label={<Typography>{giftRate}</Typography>} inputMode='numeric' name="giftrate" defaultValue={eventGiftData?eventGiftData.giftrate as number:0.000}  endAdornment={<InputAdornment position='end'>%</InputAdornment>} {...rest} disabled/>
                            </Grid>
                        </Grid>
                         <Grid container sx={{margin:`${margin.sm},0`}}>
                            <Grid item xs={6}>
                                <TextField label={<Typography>{giftID}</Typography>} type="text"  name="giftname" defaultValue={eventGiftData?eventGiftData.giftid as number:0}  {...rest} disabled/>
                            </Grid>
                        </Grid> */}
                    </div>
                </div>
            ))}
            </div>

        </Grid>
    );
}

export default CustomGift;