// src/pages/Events.tsx
import { Container, Typography } from "@mui/material";

export default function Events() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Eventos
      </Typography>
      <Typography variant="body1" paragraph>
        Os eventos promovidos pelo CATEL incluem palestras, minicursos, visitas
        técnicas e confraternizações. Essas atividades têm como objetivo
        enriquecer a formação acadêmica e aproximar os estudantes do mercado de
        trabalho.
      </Typography>
      <Typography variant="body1" paragraph>
        Fique atento ao calendário para não perder nenhuma oportunidade de
        participar das iniciativas do centro acadêmico. Novos eventos serão
        divulgados nesta seção.
      </Typography>
    </Container>
  );
}
