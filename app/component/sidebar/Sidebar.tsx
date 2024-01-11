'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import LogoAndIcon from '../LogoBrandname';
import { useAppDipatch } from '@/app/redux/hooks';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { margin, Section,emptyIcon } from '@/app/globalStyle';
import { FormEvent } from 'react';
import { setLogout } from '@/app/redux/features/auth/authSlice';
import { Button } from '@mui/material';
import { StyleSkeleton } from '@/CMS_Skeleton_Style_V1';
import { SideH6 } from './SideBar.style';
import { colors } from '@/styles/globalStyle';
import LocaleSwitcher from '../LocaleSwitcher';
import { useGetMasterQuery } from '@/app/redux/services/masterDataApi';

const SidebarSingle = dynamic(() => import('./SidebarSingle'));
interface Props {
  window?: () => Window;
  dictionary: {
    logout: string;
  };
}

export default function Sidebar(props: Props) {
  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();
  const dispatch = useAppDipatch();
  const getStyle = StyleSkeleton.style;
  const { data, isLoading } = useGetMasterQuery();

  if (isLoading) return null;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setLogout());
    localStorage.clear();
    router.push('/');
  };

	const drawer = (
		<Box component='div' sx={{ backgroundColor: getStyle.primaryColor }}>
			{/* <Toolbar /> */}
			<LogoAndIcon
				Logo={getStyle.logo}
				BrandName={getStyle.brandName}
				NameColor='light'
			/>
			<Divider />
			<div>
				<div style={{ marginTop: margin.s, marginBottom: margin.s }}>
					{data ? (
						Object.values(data).map((item, index) => {
							return (
								<React.Fragment key={index}>
									<SideH6 textColor={colors.gray}>{item.menu.title}</SideH6>
									{item.menu.sections.map((item: Section) => {
										return (
											<div key={item.path}>
												<SidebarSingle
													Icon={item.icon?item.icon:emptyIcon}
													btnText={item.title}
													path={item.path}
													textColor={getStyle.sideBarText}
												/>
											</div>
										);
									})}
									<Divider style={{ marginTop: margin.s }} />
								</React.Fragment>
							);
						})
					) : (
						<div>error</div>
					)}
				</div>
			</div>
		</Box>
	);

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      sx={{
        display: 'flex',
        '*::-webkit-scrollbar': {
          width: '0.4em',
          backgroundColor: getStyle.primaryColor,
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(255,255,255,.5)',
          outline: '1px solid slategrey',
          borderRadius: '50px',
        },
      }}
    >
      <CssBaseline />
      <AppBar
        elevation={0}
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: '#ffff',
          }}
        >
          <IconButton
            color='info'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: margin.s, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <LocaleSwitcher />

          <Button
            variant='outlined'
            sx={{
              mt: margin.s,
              mb: margin.s,
              border: '1px solid #777',
              color: '#777',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: '#f5f5f5',
                border: '1px solid #777',
              },
            }}
            onClick={handleLogout}
          >
            {props.dictionary.logout}
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label='mailbox folders'
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
