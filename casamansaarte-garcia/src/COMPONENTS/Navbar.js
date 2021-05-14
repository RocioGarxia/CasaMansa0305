import { AppBar, Toolbar, IconButton, Button, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    return (
    
<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6">
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
    );

    };

export default Navbar;