import logo from "/images/logo.png";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  useTheme,
  useMediaQuery,
  Avatar,
  Container,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home,
  Info,
  Archive,
  Event,
  Article,
  Group,
  ContactMail,
  School,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { name: "INÍCIO", path: "/", icon: <Home /> },
  { name: "SOBRE O CURSO", path: "/about", icon: <Info /> },
  { name: "NOTÍCIAS", path: "/news", icon: <Article /> },
  { name: "ARQUIVO DE PROVAS", path: "/archive", icon: <Archive /> },
  { name: "EQUIPE", path: "/team", icon: <Group /> },
  { name: "EVENTOS", path: "/events", icon: <Event /> },
  { name: "CONTATO", path: "/contact", icon: <ContactMail /> },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box
        sx={{
          p: 2,
          background: "linear-gradient(135deg, #667eea 0%, #031335 100%)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 2,
              backdropFilter: "blur(10px)",
            }}
          >
            <School />
          </Box>
          <Typography variant="h6" fontWeight="bold">
            CATEL
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <List sx={{ p: 0 }}>
        {navigationItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                py: 1.5,
                px: 2,
                backgroundColor: isActiveRoute(item.path)
                  ? "#5c6bc0"
                  : "transparent",
                color: isActiveRoute(item.path) ? "white" : "text.primary",
                "&:hover": {
                  backgroundColor: isActiveRoute(item.path)
                    ? "#3f51b5"
                    : "action.hover",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: isActiveRoute(item.path) ? "white" : "#5c6bc0",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontWeight: isActiveRoute(item.path) ? "bold" : "medium",
                  fontSize: "0.9rem",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ mt: 2 }} />

      <Box sx={{ p: 2, textAlign: "center", backgroundColor: "grey.50" }}>
        <Typography variant="caption" color="text.secondary">
          Centro Acadêmico de Telemática
        </Typography>
        <Typography variant="caption" display="block" color="text.secondary">
          © 2025 CATEL
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "linear-gradient(135deg, #5c6bc0 0%, #031335 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 3,
          backdropFilter: "blur(20px)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ px: { xs: 0, sm: 2 }, py: 1 }}>
            {/* Logo e Nome */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                mr: 4,
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "12px",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                  border: "2px solid rgba(255,255,255,0.25)",
                  backdropFilter: "blur(15px)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                }}
              >
                <Avatar
                  src={logo}
                  alt="Logo CATEL"
                  sx={{
                    width: { xs: 64, sm: 64, md: 64 },
                    height: { xs: 64, sm: 64, md: 64 },
                  }}
                ></Avatar>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  component="h1"
                  fontWeight="bold"
                  sx={{ lineHeight: 1.2 }}
                >
                  CATEL
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    opacity: 0.9,
                    fontSize: "0.75rem",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Centro Acadêmico de Telemática
                </Typography>
              </Box>
            </Box>

            {/* Spacer */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {navigationItems.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: "white",
                      textTransform: "none",
                      fontWeight: isActiveRoute(item.path) ? "bold" : "medium",
                      fontSize: "0.85rem",
                      px: 2,
                      py: 1.2,
                      borderRadius: 2,
                      backgroundColor: isActiveRoute(item.path)
                        ? "rgba(255,255,255,0.2)"
                        : "transparent",
                      backdropFilter: isActiveRoute(item.path)
                        ? "blur(15px)"
                        : "none",
                      border: isActiveRoute(item.path)
                        ? "1px solid rgba(255,255,255,0.3)"
                        : "1px solid transparent",
                      boxShadow: isActiveRoute(item.path)
                        ? "0 4px 16px rgba(255,255,255,0.1)"
                        : "none",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.1)",
                        backdropFilter: "blur(10px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="abrir menu"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            boxShadow: theme.shadows[8],
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
