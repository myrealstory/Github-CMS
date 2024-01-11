import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import React from 'react';
import {LinkContainer, SidebarSingleProps, defaultIcon, iconWhite, margin} from '../../globalStyle'
import { ICON_MAPPING } from '@/lib/getPath';
import {T} from '@/lib/FunctionLibrary'

function SidebarSingle({Icon, btnText,path,textColor}: SidebarSingleProps) {
    const {title , sx} = Icon;
    const CustomIcon = ICON_MAPPING[title as keyof typeof ICON_MAPPING];
    return (
        <Link href={path} style={LinkContainer} >
            <ListItem  disablePadding>
                <ListItemButton sx={{marginTop:margin.xs,marginBottom:margin.xs}}>
                <ListItemIcon>
                    <CustomIcon sx={sx === 'iconWhite'?iconWhite : defaultIcon}/>
                </ListItemIcon>
                {/* <ListItemText primary={T(btnText)}  sx={{color:textColor}}/> */}
                <span style={{color:textColor,fontSize:"13px"}}>{T(btnText)}</span>
                </ListItemButton>
            </ListItem>
        </Link>
    );
}

export default SidebarSingle;