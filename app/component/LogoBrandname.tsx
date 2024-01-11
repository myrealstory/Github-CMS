// import Image from 'next/image';
import React from 'react';
import {margin,fontSizes,colors} from '../globalStyle';

interface LogoAndIconProps {
    Logo?: string;
    BrandName?: string;
    NameColor?: "light" | "dark";
}



const LogoAndIcon = ({ Logo , BrandName,NameColor = "light"}: LogoAndIconProps) => {
    return (
        <>
        {Logo || BrandName ? (
            <div style ={{justifyContent:"center",display:"flex",padding:margin.ml}}>
                {Logo?<div style={{maxWidth:"2.5vw",maxHeight:"2.5vw",marginRight:margin.ss}}>
                    <img src={Logo} alt="" width={"100%"} height={'100%'}/>
                </div>:''}
                <h2 style={{color:NameColor === "light"?colors.white:colors.black, fontSize:fontSizes.sm}}>{BrandName}</h2>
            </div>
            ): '' } 
        </>
    );
}

export default LogoAndIcon;