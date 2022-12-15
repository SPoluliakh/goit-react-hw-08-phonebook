import { Box } from '@mui/material';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box className="container">
      <AppBar />
      <Outlet />
    </Box>
  );
};
