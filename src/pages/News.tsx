// src/pages/News.tsx
import { Container, Typography } from "@mui/material";

export default function News() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Notícias
      </Typography>
      <Typography variant="body1" paragraph>
        Aqui você encontrará as principais novidades sobre o curso, eventos
        promovidos pelo CATEL e oportunidades acadêmicas. Esta seção é
        atualizada semanalmente com notícias relevantes para a comunidade
        estudantil.
      </Typography>
      <Typography variant="body1" paragraph>
        Exemplos de conteúdo incluem chamadas para congressos, divulgação de
        palestras, workshops, competições de tecnologia e resultados de
        atividades desenvolvidas pelos estudantes.
      </Typography>
    </Container>
  );
}
