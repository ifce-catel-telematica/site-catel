import logo from "/images/logo.png";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Avatar,
  Stack,
  Chip,
} from "@mui/material";
import {
  School,
  Email,
  Phone,
  LocationOn,
  Facebook,
  Instagram,
  WhatsApp,
  LinkedIn,
  ArrowUpward,
} from "@mui/icons-material";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre o Curso", href: "/about" },
    { name: "Arquivo de Provas", href: "/archive" },
    { name: "Nossa Equipe", href: "/team" },
  ];

  const resources = [
    { name: "Notícias", href: "/news" },
    { name: "Eventos", href: "/events" },
    { name: "Contato", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: "#", label: "Facebook", color: "#1877F2" },
    { icon: <Instagram />, href: "#", label: "Instagram", color: "#E4405F" },
    { icon: <WhatsApp />, href: "#", label: "WhatsApp", color: "#25D366" },
    { icon: <LinkedIn />, href: "#", label: "LinkedIn", color: "#0A66C2" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #37474f 0%, #455a64 100%)",
        color: "white",
        mt: "auto",
      }}
    >
      {/* Main Footer Content */}
      <Container maxWidth="lg">
        <Box sx={{ py: 6 }}>
          <Grid container spacing={4}>
            {/* Brand Section */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "16px",
                      background:
                        "linear-gradient(135deg, #5c6bc0 0%, #031335 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      boxShadow: "0 8px 32px rgba(92, 107, 192, 0.3)",
                      backdropFilter: "blur(10px)",
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
                    <Typography variant="h5" fontWeight="bold">
                      CATEL
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Centro Acadêmico de Telemática
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="body2"
                  sx={{ opacity: 0.9, mb: 3, lineHeight: 1.6 }}
                >
                  Representando, apoiando e conectando os estudantes de
                  Telemática para uma experiência universitária completa e
                  enriquecedora.
                </Typography>

                {/* Status Badge */}
                <Chip
                  icon={<School />}
                  label="Gestão 2025"
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "white",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    "& .MuiChip-icon": { color: "white" },
                  }}
                />
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Links Rápidos
              </Typography>
              <Stack spacing={1}>
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      "&:hover": {
                        color: "#5c6bc0",
                        textDecoration: "underline",
                      },
                      transition: "color 0.2s ease",
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* Resources */}
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Recursos
              </Typography>
              <Stack spacing={1}>
                {resources.map((resource, index) => (
                  <Link
                    key={index}
                    href={resource.href}
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      "&:hover": {
                        color: "#5c6bc0",
                        textDecoration: "underline",
                      },
                      transition: "color 0.2s ease",
                    }}
                  >
                    {resource.name}
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Contato
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Email sx={{ mr: 2, opacity: 0.8, fontSize: 20 }} />
                  <Link
                    href="mailto:contato@catel.edu.br"
                    sx={{
                      color: "rgba(255,255,255,0.9)",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#5c6bc0",
                        textDecoration: "underline",
                      },
                      transition: "color 0.2s ease",
                    }}
                  >
                    contato@catel.edu.br
                  </Link>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Phone sx={{ mr: 2, opacity: 0.8, fontSize: 20 }} />
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    (11) 99999-9999
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <LocationOn
                    sx={{ mr: 2, opacity: 0.8, fontSize: 20, mt: 0.5 }}
                  />
                  <Box>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Campus Universitário
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Bloco A - Sala 101
                    </Typography>
                  </Box>
                </Box>

                {/* Social Links */}
                <Box sx={{ pt: 2 }}>
                  <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                    Siga-nos nas redes sociais:
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: "white",
                          backgroundColor: "rgba(255,255,255,0.1)",
                          backdropFilter: "blur(10px)",
                          "&:hover": {
                            backgroundColor: social.color,
                            transform: "translateY(-2px)",
                            boxShadow: `0 4px 16px ${social.color}40`,
                          },
                          transition: "all 0.3s ease",
                        }}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            py: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ opacity: 0.8, textAlign: { xs: "center", sm: "left" } }}
          >
            © {currentYear} Centro Acadêmico de Telemática (CATEL). Todos os
            direitos reservados.
          </Typography>

          {/* Back to Top Button */}
          <IconButton
            onClick={scrollToTop}
            sx={{
              backgroundColor: "rgba(92, 107, 192, 0.2)",
              color: "#5c6bc0",
              backdropFilter: "blur(10px)",
              "&:hover": {
                backgroundColor: "#5c6bc0",
                color: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 16px rgba(92, 107, 192, 0.3)",
              },
              transition: "all 0.3s ease",
            }}
            aria-label="Voltar ao topo"
          >
            <ArrowUpward />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
