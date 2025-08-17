// src/pages/Team.tsx
import { Container, Typography } from "@mui/material";

export default function Team() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Equipe do CATEL
      </Typography>
      <Typography variant="body1" paragraph>
        A equipe do Centro Acadêmico é formada por estudantes dedicados a
        representar seus colegas, defender seus interesses e propor atividades
        que promovam integração e aprendizado.
      </Typography>
      <Typography variant="body1" paragraph>
        Cada membro possui uma função específica dentro da gestão, como
        presidência, diretoria de eventos, comunicação e secretaria. Em breve,
        esta seção trará a apresentação completa da equipe com nomes e fotos.
      </Typography>
    </Container>
  );
}
