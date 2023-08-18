import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import useStyles from "./styles";
import { Card, useScrollTrigger } from "@mui/material";
import logo from "../../assets/logo.png";
import profile from "../../assets/user.png";
import card from "../../assets/accordion.svg";

const pages = [
  "Products",
  "Features",
  "Marketplace",
  "Pricing",
  "Partners",
  "Company",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const HideOnScroll = (props) => {
  const trigger = useScrollTrigger();
  return React.cloneElement(props.children, {
    style: {
      top: trigger ? "-85px" : "0", // Adjust -64px as per your navbar height
    },
  });
};

const Navbar = () => {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [activeNavlink, setActiveNavlink] = useState(null);

  console.log(activeNavlink);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar position="sticky" className={classes.navbar}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Logo in the center */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        className={classes.navLink}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  className={classes.logo}
                >
                  <Box sx={{ display: { md: "flex" }, mr: 1 }}>
                    <img src={logo} alt="" className={classes.logoImg} />
                  </Box>
                  LOGO
                </Typography>
              </Box>

              {/* Pages on the right for big screens */}
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    className={classes.navLink}
                    // onMouseEnter={() => setActiveNavlink(page)}
                    // onMouseLeave={() => setActiveNavlink(null)}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              {/* Hamburger menu on the right for small screens */}

              {/* Login on the right */}
              <Box>
                <Tooltip>
                  <IconButton onClick={handleOpenUserMenu}>
                    <img
                      alt="Remy Sharp"
                      src={profile}
                      className={classes.profileImg}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      {activeNavlink !== null && (
        <Box className={classes.hoverContainer}>
          <Box className={classes.hoverLeft}>
            <Card className={classes.leftCard}>
              <Typography className={classes.cardHeading}>
                Spend less DO, get more
              </Typography>
              <Typography className={classes.cardDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                doloribus!
              </Typography>
              <Box className={classes.learnMore}>
                <img src={card} alt="" className={classes.cardImg} />
                <Typography>Learn More</Typography>
              </Box>
            </Card>
            <Card className={classes.leftCard}>
              <Typography className={classes.cardHeading}>
                Spend less DO, get more
              </Typography>
              <Typography className={classes.cardDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                doloribus!
              </Typography>
              <Box className={classes.learnMore}>
                <img src={card} alt="" className={classes.cardImg} />
                <Typography>Learn More</Typography>
              </Box>
            </Card>
            <Card className={classes.leftCard}>
              <Typography className={classes.cardHeading}>
                Spend less DO, get more
              </Typography>
              <Typography className={classes.cardDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                doloribus!
              </Typography>
              <Box className={classes.learnMore}>
                <img src={card} alt="" className={classes.cardImg} />
                <Typography>Learn More</Typography>
              </Box>
            </Card>
            <Card className={classes.leftCard}>
              <Typography className={classes.cardHeading}>
                Spend less DO, get more
              </Typography>
              <Typography className={classes.cardDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                doloribus!
              </Typography>
              <Box className={classes.learnMore}>
                <img src={card} alt="" className={classes.cardImg} />
                <Typography>Learn More</Typography>
              </Box>
            </Card>
          </Box>
          <Box className={classes.hoverCenter}></Box>
          <Box className={classes.hoverRight}></Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
