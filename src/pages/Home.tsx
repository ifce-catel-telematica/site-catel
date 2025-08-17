// src/pages/Home.tsx
import { Container, Box, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Bem-vindo ao CATEL
        </Typography>
        <Typography variant="body1" paragraph>
          O Centro Acadêmico de Telemática (CATEL) é a entidade estudantil
          responsável por representar os alunos do curso de Telemática. Aqui
          você encontrará informações sobre o curso, as atividades do centro
          acadêmico, notícias e um acervo organizado de provas anteriores.
        </Typography>
        <Typography variant="body1" paragraph>
          Nosso objetivo é fortalecer a integração entre estudantes, professores
          e a instituição, promovendo eventos, debates e iniciativas que
          contribuam para a formação acadêmica e profissional dos discentes.
        </Typography>
        <Button variant="contained">Saiba Mais</Button>
      </Box>
    </Container>
  );
}
