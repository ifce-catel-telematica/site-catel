// src/pages/Contact.tsx
import { Container, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Contato
      </Typography>
      <Typography variant="body1" paragraph>
        Caso queira entrar em contato com o Centro Acadêmico de Telemática,
        utilize os seguintes canais:
      </Typography>
      <Typography variant="body1" paragraph>
        Email: catel@email.com
        <br />
        Telefone: (00) 00000-0000
      </Typography>
      <Typography variant="body1" paragraph>
        Estamos à disposição para esclarecer dúvidas, ouvir sugestões e receber
        contribuições da comunidade acadêmica.
      </Typography>
    </Container>
  );
}
