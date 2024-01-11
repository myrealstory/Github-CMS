'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n-config';
import { Box, Button } from '@mui/material';
import { setLangSwitch } from '../redux/features/lang/langSlice';
import { useAppDipatch } from '../redux/hooks';
// import Link from 'next/link';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const dispatch = useAppDipatch();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  type Lang = 'en' | 'zh';

  const handleSwitchLang = (locale: Lang) => {
    if (locale !== 'en') {
      return () => {
        dispatch(setLangSwitch({ lang: 'zh' }));
      };
    } else {
      return () => {
        dispatch(setLangSwitch({ lang: 'en' }));
      };
    }
  };

  return (
    <Box sx={{ display: 'flex', marginRight: 3, gap: 3 }}>
      {i18n.locales.map((locale) => {
        return (
          <Button
            key={locale}
            variant='outlined'
            sx={{ border: 'solid 1px #797878' }}
            onClick={handleSwitchLang(locale)}
          >
            <Link
              style={{ textDecoration: 'none', color: '#9a9a9a' }}
              href={redirectedPathName(locale)}
            >
              {locale.toUpperCase()}
            </Link>
          </Button>
        );
      })}
    </Box>
  );
}
