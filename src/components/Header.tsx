import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CATEL
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Início
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            Sobre o Curso
          </Button>
          <Button color="inherit" component={RouterLink} to="/news">
            Notícias
          </Button>
          <Button color="inherit" component={RouterLink} to="/archive">
            Acervo de Provas
          </Button>
          <Button color="inherit" component={RouterLink} to="/team">
            Equipe
          </Button>
          <Button color="inherit" component={RouterLink} to="/events">
            Eventos
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact">
            Contato
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
