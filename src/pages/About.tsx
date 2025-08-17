// src/pages/About.tsx
import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Sobre o Curso
      </Typography>
      <Typography variant="body1" paragraph>
        O curso de Telemática tem como foco a integração entre as áreas de
        telecomunicações e informática, formando profissionais aptos a projetar,
        implementar e gerenciar sistemas de comunicação e redes de computadores.
      </Typography>
      <Typography variant="body1" paragraph>
        Durante a graduação, os alunos têm acesso a disciplinas de programação,
        redes, eletrônica, sistemas distribuídos e segurança da informação, além
        de desenvolverem projetos práticos que aproximam a teoria da realidade
        do mercado.
      </Typography>
    </Container>
  );
}
