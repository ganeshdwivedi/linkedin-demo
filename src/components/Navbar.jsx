import { AppBar, Container, Toolbar, Box, TextField, InputAdornment, Stack, Avatar, Typography, IconButton } from "@mui/material";
import { Search as SearchIcon, Home as HomeIcon, People as PeopleIcon, Work as WorkIcon, Message as MessageIcon, Notifications as NotificationsIcon, ArrowDropDown, Apps } from "@mui/icons-material";
import React from "react";

const NavIcon = ({ icon, label, active }) => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    color: active ? 'text.primary' : 'text.secondary',
    borderBottom: active ? 2 : 0,
    borderColor: 'text.primary',
    pb: active ? 0.5 : 0
  }}>
    {React.cloneElement(icon, { color: active ? 'action' : 'inherit' })}
    <Typography variant="caption" sx={{ display: { xs: 'none', md: 'block' } }}>
      {label}
    </Typography>
  </Box>
);

const Navbar = () => (
  <>
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper', position: { xs: 'unset', md: 'fixed' }, top: 0, width: '100%', zIndex: 1100 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 52, md: 52 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <Box sx={{ color: 'primary.main', mr: 1, display: 'flex', alignItems: 'center' }}>
              {/* Logo */}
              <Box sx={{ width: 34, height: 34, bgcolor: '#0a66c2', borderRadius: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: 22 }}>
                in
              </Box>
            </Box>

            <TextField
              placeholder="Search"
              size="small"
              variant="outlined"
              sx={{
                display: { xs: 'none', md: 'block' },
                width: 280,
                bgcolor: '#edf3f8',
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                  height: 34,
                  paddingLeft: 1
                },
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ mr: 0.5 }}>
                    <SearchIcon sx={{ color: 'text.secondary' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Nav Items */}
          <Stack direction="row" spacing={{ xs: 2, md: 3 }} alignItems="center" sx={{ height: 52, display: { xs: 'none', md: 'flex' } }}>
            <NavIcon icon={<HomeIcon sx={{ fontSize: 28 }} />} label="Home" active badgeContent="dot" />
            <NavIcon icon={<PeopleIcon sx={{ fontSize: 28 }} />} label="My Network" />
            <NavIcon icon={<WorkIcon sx={{ fontSize: 28 }} />} label="Jobs" />
            <NavIcon icon={<MessageIcon sx={{ fontSize: 28 }} />} label="Messaging" />
            <NavIcon icon={<NotificationsIcon sx={{ fontSize: 28 }} />} label="Notifications" badgeContent={6} />

            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              px: 1.5,
              minWidth: 80,
              borderRight: { md: 1 },
              borderColor: { md: 'divider' },
              mr: { md: 1 }
            }}>
              <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>A</Avatar>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="caption" color="text.secondary" sx={{ display: { xs: 'none', md: 'block' } }}>Me</Typography>
                <ArrowDropDown sx={{ fontSize: 16, color: 'text.secondary', display: { xs: 'none', md: 'block' } }} />
              </Box>
            </Box>

            <NavIcon
              icon={<Apps sx={{ fontSize: 28 }} />}
              label="For Business"
              arrow
              sx={{ display: { xs: 'none', lg: 'flex' } }}
            />

            <Box sx={{
              display: { xs: 'none', lg: 'flex' },
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 100,
              textAlign: 'center',
              cursor: 'pointer'
            }}>
              <Typography variant="caption" sx={{ color: '#915907', lineHeight: 1.2, textDecoration: 'underline' }}>
                Reactivate Premium:
              </Typography>
              <Typography variant="caption" sx={{ color: '#915907', fontWeight: 'bold', lineHeight: 1.2 }}>
                50% Off
              </Typography>
            </Box>
          </Stack>

          {/* Mobile Header Elements (Avatar + Search + Message) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <Avatar sx={{ width: 32, height: 32, mr: 2, fontSize: 14 }}>A</Avatar>
            <Box sx={{
              flexGrow: 1,
              bgcolor: '#edf3f8',
              borderRadius: 1,
              height: 34,
              display: 'flex',
              alignItems: 'center',
              px: 1,
              mr: 2
            }}>
              <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
              <Typography variant="body2" color="text.secondary">Search</Typography>
            </Box>
            <IconButton size="small" sx={{ color: 'text.secondary' }}>
              <MessageIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>

    {/* Mobile Bottom Navigation */}
    <AppBar position="fixed" color="default" sx={{ top: 'auto', bottom: 0, display: { xs: 'block', md: 'none' }, borderTop: 1, borderColor: 'divider', bgcolor: 'background.paper', zIndex: 1200 }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: '52px !important', px: 1 }}>
        <NavIcon icon={<HomeIcon sx={{ fontSize: 24 }} />} label="Home" active badgeContent="dot" mobileLabel />
        <NavIcon icon={<PeopleIcon sx={{ fontSize: 24 }} />} label="Network" mobileLabel />
        <NavIcon icon={<Box sx={{ bgcolor: '#0a66c2', color: 'white', borderRadius: 1, width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>+</Box>} label="Post" mobileLabel />
        <NavIcon icon={<NotificationsIcon sx={{ fontSize: 24 }} />} label="Notifications" badgeContent={6} mobileLabel />
        <NavIcon icon={<WorkIcon sx={{ fontSize: 24 }} />} label="Jobs" mobileLabel />
      </Toolbar>
    </AppBar>
  </>
);


export default Navbar

