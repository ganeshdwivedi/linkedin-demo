import { AppBar, Container, Toolbar, Box, TextField, InputAdornment, Stack, Avatar, Typography } from "@mui/material";
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
  <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
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

        <Stack direction="row" spacing={{ xs: 2, md: 3 }} alignItems="center" sx={{ height: 52 }}>
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
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar

