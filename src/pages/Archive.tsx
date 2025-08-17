// src/pages/Archive.tsx
import { Container, Typography } from "@mui/material";

export default function Archive() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Acervo de Provas
      </Typography>
      <Typography variant="body1" paragraph>
        O acervo de provas tem como objetivo auxiliar os estudantes na
        preparação para avaliações, reunindo provas anteriores de diversas
        disciplinas do curso de Telemática.
      </Typography>
      <Typography variant="body1" paragraph>
        Os arquivos estarão organizados por ano e por disciplina, facilitando a
        busca do material de estudo. Ao longo do tempo, este repositório será
        constantemente atualizado com novas contribuições dos alunos.
      </Typography>
    </Container>
  );
}
