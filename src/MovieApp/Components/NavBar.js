import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "../Shared/Style";
import { Link, useLocation } from "react-router-dom";
import { isPathActive } from "../Helpers/functions";

const NavBar = ({ setSearch }) => {
  const { pathname } = useLocation();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to='/'>Movie app ws</Link>
          </Typography>

          {!isPathActive(pathname, "/movies") && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearch}
              />
            </Search>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
