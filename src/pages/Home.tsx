import logo from "/images/logo.png";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Avatar,
  Chip,
  Stack,
  Container,
} from "@mui/material";
import {
  School,
  Event,
  Archive,
  Group,
  AccessTime,
  ArrowForward,
  Star,
  EmojiEvents,
  Announcement,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import heroImage from "../../public/images/hero-image.webp";

export default function Home() {
  const features = [
    {
      icon: <Archive sx={{ fontSize: 40 }} />,
      title: "Arquivo de Provas",
      description:
        "Acesse provas anteriores organizadas por disciplina e período",
      color: "#3f51b5",
      link: "/archive",
    },
    {
      icon: <Event sx={{ fontSize: 40 }} />,
      title: "Eventos",
      description:
        "Fique por dentro dos próximos eventos, palestras e atividades",
      color: "#43a047",
      link: "/events",
    },
    {
      icon: <Group sx={{ fontSize: 40 }} />,
      title: "Nossa Equipe",
      description: "Conheça os representantes que trabalham pelos estudantes",
      color: "#ff8f00",
      link: "/team",
    },
    {
      icon: <Announcement sx={{ fontSize: 40 }} />,
      title: "Notícias",
      description: "Acompanhe as últimas novidades e comunicados importantes",
      color: "#8e24aa",
      link: "/news",
    },
  ];

  const stats = [
    { number: "150+", label: "Estudantes Representados", icon: <School /> },
    { number: "2+", label: "Eventos Anuais", icon: <Event /> },
    { number: "20+", label: "Provas Arquivadas", icon: <Archive /> },
    { number: "1", label: "Anos de Atuação", icon: <EmojiEvents /> },
  ];

  const recentNews = [
    {
      title: "Semana de Integração 2025",
      date: "20 Set 2025",
      category: "Eventos",
      excerpt:
        "A tradicional semana de integração está chegando com muitas atividades...",
      color: "#3f51b5",
    },
    {
      title: "Nova Parceria com Empresas",
      date: "15 Set 2025",
      category: "Oportunidades",
      excerpt:
        "Firmamos parcerias que oferecerão estágios para nossos estudantes...",
      color: "#43a047",
    },
    {
      title: "Melhorias no Sistema Acadêmico",
      date: "10 Set 2025",
      category: "Conquistas",
      excerpt:
        "Conseguimos implementar melhorias solicitadas pelos estudantes...",
      color: "#ff8f00",
    },
  ];

  return (
    <Box>
      {/* Hero Image - Ocupando toda a largura */}
      <Box
        sx={{
          width: "100vw",
          height: { xs: "300px", sm: "400px", md: "600px" },
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          mb: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundPositionY: "35%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Hero Content - Abaixo da imagem */}
      <Paper
        elevation={0}
        sx={{
          marginTop: "5px",
          marginBottom: "5px",
          background: "linear-gradient(135deg, #5c6bc0 0%, #031335 100%)",
          color: "white",
          py: { xs: 4, md: 6 },
          px: { xs: 2, sm: 4 },
          mb: 6,
          borderRadius: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.08)",
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                }}
              >
                Bem-vindo ao CATEL
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  opacity: 0.95,
                  fontSize: { xs: "1.25rem", sm: "1.5rem" },
                }}
              >
                Centro Acadêmico de Telemática
              </Typography>
              <Typography
                variant="h6"
                paragraph
                sx={{
                  opacity: 0.9,
                  mb: 4,
                  maxWidth: "90%",
                  lineHeight: 1.6,
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                Representando, apoiando e conectando os estudantes de Telemática
                para uma experiência universitária completa e enriquecedora.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  component={Link}
                  to="/about"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "white",
                    color: "#5c6bc0",
                    "&:hover": {
                      backgroundColor: "grey.100",
                      transform: "translateY(-2px)",
                    },
                    py: 1.5,
                    px: 4,
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 16px rgba(255,255,255,0.2)",
                  }}
                  endIcon={<ArrowForward />}
                >
                  Conheça Nossos Serviços
                </Button>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255,255,255,0.15)",
                      transform: "translateY(-2px)",
                    },
                    py: 1.5,
                    px: 4,
                    fontWeight: "medium",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Entre em Contato
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Avatar
                  src={logo}
                  alt="Logo CATEL"
                  sx={{
                    width: { xs: 150, sm: 180, md: 200 },
                    height: { xs: 150, sm: 180, md: 200 },
                    backgroundColor: "rgba(255,255,255,0.15)",
                    border: "3px solid rgba(255,255,255,0.25)",
                    backdropFilter: "blur(15px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                  }}
                ></Avatar>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      <Container maxWidth="lg">
        {/* About Section */}
        <Box mb={10}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                fontWeight="bold"
                sx={{ color: "#424242" }}
              >
                Nossa Missão
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  color: "text.secondary",
                }}
              >
                O Centro Acadêmico de Telemática (CATEL) é a entidade estudantil
                responsável por representar os alunos do curso de Telemática,
                fortalecendo a integração entre estudantes, professores e
                instituição.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  color: "text.secondary",
                }}
              >
                Promovemos eventos, debates e iniciativas que contribuam para a
                formação acadêmica e profissional dos discentes, sempre buscando
                melhorias na qualidade do ensino e na experiência universitária.
              </Typography>
              <Button
                component={Link}
                to="/about"
                variant="outlined"
                size="large"
                sx={{
                  mt: 2,
                  borderColor: "#5c6bc0",
                  color: "#5c6bc0",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    backgroundColor: "rgba(92, 107, 192, 0.04)",
                    borderColor: "#5c6bc0",
                  },
                  transition: "all 0.3s ease",
                }}
                endIcon={<ArrowForward />}
              >
                Saiba Mais Sobre Nós
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={8}
                sx={{
                  p: 4,
                  background:
                    "linear-gradient(45deg, #f8f9fa 0%, #e9ecef 100%)",
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Grid container spacing={3}>
                  {stats.map((stat, index) => (
                    <Grid size={{ xs: 6 }} key={index}>
                      <Box textAlign="center">
                        <Box
                          sx={{
                            color: "#5c6bc0",
                            mb: 1,
                            "& svg": {
                              fontSize: 32,
                            },
                          }}
                        >
                          {stat.icon}
                        </Box>
                        <Typography
                          variant="h4"
                          fontWeight="bold"
                          sx={{ color: "#5c6bc0" }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Features Section */}
        <Box mb={10}>
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              fontWeight="bold"
              sx={{ color: "#424242" }}
            >
              Como Podemos Te Ajudar
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              Oferecemos diversos recursos e serviços para apoiar sua jornada
              acadêmica
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  elevation={4}
                  component={Link}
                  to={feature.link}
                  sx={{
                    height: "100%",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 8,
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", p: 4 }}>
                    <Box
                      sx={{
                        color: feature.color,
                        mb: 3,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      fontWeight="bold"
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={3}>
                      {feature.description}
                    </Typography>
                    <Button
                      variant="text"
                      endIcon={<ArrowForward />}
                      sx={{ color: feature.color }}
                    >
                      Acessar
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Recent News Section */}
        <Box mb={10}>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            mb={6}
            gap={2}
          >
            <Box>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                fontWeight="bold"
                sx={{ color: "#424242" }}
              >
                Últimas Notícias
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Fique por dentro das novidades do CATEL
              </Typography>
            </Box>
            <Button
              component={Link}
              to="/news"
              variant="outlined"
              endIcon={<ArrowForward />}
              sx={{
                display: { xs: "none", md: "flex" },
                borderColor: "#5c6bc0",
                color: "#5c6bc0",
                "&:hover": {
                  transform: "translateY(-2px)",
                  backgroundColor: "rgba(92, 107, 192, 0.04)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Ver Todas
            </Button>
          </Box>
          <Grid container spacing={4}>
            {recentNews.map((news, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  elevation={3}
                  sx={{
                    height: "100%",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 120,
                      background: `linear-gradient(135deg, ${news.color} 0%, ${news.color}CC 100%)`,
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Chip
                      label={news.category}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        backgroundColor: "rgba(255,255,255,0.9)",
                        color: news.color,
                        fontWeight: "bold",
                      }}
                    />
                    <Star sx={{ fontSize: 40, color: "white", opacity: 0.8 }} />
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <AccessTime
                        sx={{ fontSize: 16, mr: 1, color: "text.secondary" }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        {news.date}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      fontWeight="bold"
                    >
                      {news.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={3}>
                      {news.excerpt}
                    </Typography>
                    <Button
                      variant="text"
                      size="small"
                      endIcon={<ArrowForward />}
                      sx={{ color: news.color }}
                    >
                      Leia mais
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box
            textAlign="center"
            mt={4}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <Button
              component={Link}
              to="/news"
              variant="outlined"
              endIcon={<ArrowForward />}
              sx={{
                borderColor: "#5c6bc0",
                color: "#5c6bc0",
                "&:hover": {
                  backgroundColor: "rgba(92, 107, 192, 0.04)",
                },
              }}
            >
              Ver Todas as Notícias
            </Button>
          </Box>
        </Box>

        {/* Call to Action Section */}
        <Paper
          elevation={8}
          sx={{
            background: "linear-gradient(135deg, #5c6bc0 0%, #031335 100%)",
            color: "white",
            p: { xs: 4, md: 6 },
            borderRadius: 3,
            textAlign: "center",
            mb: 8,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.08)",
              zIndex: 1,
            }}
          />
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1.75rem", sm: "2.125rem" },
              }}
            >
              Faça Parte da Nossa Comunidade
            </Typography>
            <Typography
              variant="h6"
              paragraph
              sx={{
                opacity: 0.95,
                mb: 4,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Junte-se aos estudantes que já se beneficiam dos nossos serviços e
              atividades
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "white",
                  color: "#5c6bc0",
                  "&:hover": {
                    backgroundColor: "grey.100",
                    transform: "translateY(-2px)",
                  },
                  py: 1.5,
                  px: 4,
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 16px rgba(255,255,255,0.2)",
                }}
              >
                Entre em Contato
              </Button>
              <Button
                component={Link}
                to="/team"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.15)",
                    transform: "translateY(-2px)",
                  },
                  py: 1.5,
                  px: 4,
                  fontWeight: "medium",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                }}
              >
                Conheça a Equipe
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
