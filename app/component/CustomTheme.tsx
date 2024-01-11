import React from 'react'
import { StyleSkeleton } from '@/CMS_Skeleton_Style_V1';


interface ThemeProps {
  children: React.ReactNode;
  styles? : CSSStyleDeclaration;
}

export default function CustomTheme({children}:ThemeProps) {


  const getStyle = StyleSkeleton.style;

  return (
      <div style={getStyle.theme}>{children}</div>
  )
}
