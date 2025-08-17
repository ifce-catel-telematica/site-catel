// src/components/Layout.tsx
import { Box, Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container sx={{ flex: 1, py: 4 }}>{children}</Container>
      <Footer />
    </Box>
  );
}
