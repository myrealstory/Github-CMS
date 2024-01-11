import { Checkbox, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import CustomSwitch from './CustomSwitch';
import CustomInput from './CustomInput';
// import { Skeleton_RolePermission } from '@/CMS_RolePermission_Skeleton';
import { T } from '@/lib/FunctionLibrary';
import { Skeleton_RolePermission } from '@/CMS_RolePermission_Skeleton';
import { colors, fontSizes } from '../globalStyle';
import { ICON_MAPPING } from '@/lib/getPath';

const RolePermission = () =>{
    const switchTitle = { en:"status",zh:"狀態"};
    const inputTitle = { en:"Username",zh:"名稱"};
    const tdTitle = {
        fontSize:fontSizes.base,
        fontWeight:"bold",
    }
    const CustomIcon = ICON_MAPPING["RemoveIcon"];
    
    return (
          <Grid item xs={12} >
                <CustomSwitch label={switchTitle} grid={12} translateKey='rolePermission' />
                <CustomInput customkey="RolePermission" label={inputTitle}  grid={12} translateKey='inputPermission'/>  

                    <TableContainer>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead >
                                <TableRow hover>
                                    {Skeleton_RolePermission.tableList.thList.map((item,index) => (
                                        <TableCell align={item.align} key={index} padding={item.disablePadding}>
                                            {T(item.label)}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                   {Skeleton_RolePermission.tableList.tdList.map((item)=>(
                                   <>
                                            <TableRow>
                                               <TableCell colSpan={6} sx={tdTitle}>
                                                 {T(item.title)}
                                               </TableCell>
                                            </TableRow>
                                        {item.td.map((item,index)=>(
                                            <TableRow key={index}>
                                                <TableCell >
                                                    {T(item.title)}
                                                </TableCell>
                                            <TableCell  align="center">
                                                {item.checked ? <Checkbox
                                                    defaultChecked={item.checked}
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />:"-"}
                                            </TableCell>
                                            <TableCell key={index} align="center">
                                                {item.add ?<Checkbox
                                                    defaultChecked={item.add}
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />:"-"}
                                            </TableCell>
                                            <TableCell key={index} align="center">
                                                {item.edit?<Checkbox
                                                    defaultChecked={item.edit}
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />:"-"}
                                            </TableCell>
                                            <TableCell key={index} align="center">
                                                {item.delete?<Checkbox
                                                    defaultChecked={item.delete}
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />:"-"}
                                            </TableCell>
                                            <TableCell key={index} align="center">
                                                {item.export?<Checkbox
                                                    defaultChecked={item.export}
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />:
                                                <CustomIcon sx={{color:colors.darkGray}}/>}
                                            </TableCell>
                                            </TableRow>
                                        ))}
                                   </>
                                   ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
          </Grid>
    );
}

export default RolePermission;