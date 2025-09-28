// src/__tests__/Home.test.tsx
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import Home from "../pages/Home";

// Mock da imagem
vi.mock("/images/logo.png", () => ({
  default: "test-logo.png",
}));

describe("Home Page", () => {
  const renderWithRouter = (component: React.ReactNode) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
  };

  it("renders the main heading", () => {
    renderWithRouter(<Home />);
    expect(screen.getByText("Bem-vindo ao CATEL")).toBeInTheDocument();
  });

  it("renders all feature cards", () => {
    renderWithRouter(<Home />);

    // Use getByRole para elementos mais específicos
    expect(
      screen.getByRole("heading", { name: "Arquivo de Provas" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Eventos" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Nossa Equipe" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Notícias" }),
    ).toBeInTheDocument();
  });

  it("renders feature descriptions", () => {
    renderWithRouter(<Home />);

    expect(
      screen.getByText(
        "Acesse provas anteriores organizadas por disciplina e período",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Fique por dentro dos próximos eventos, palestras e atividades",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Conheça os representantes que trabalham pelos estudantes",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Acompanhe as últimas novidades e comunicados importantes",
      ),
    ).toBeInTheDocument();
  });

  it("renders call to action buttons", () => {
    renderWithRouter(<Home />);

    // Para textos únicos, use getByText
    expect(screen.getByText("Conheça Nossos Serviços")).toBeInTheDocument();

    // Para textos que aparecem múltiplas vezes, use getAllByText e verifique a quantidade
    const contactButtons = screen.getAllByText("Entre em Contato");
    expect(contactButtons).toHaveLength(2); // Verifica que existem 2 botões
    expect(contactButtons[0]).toBeInTheDocument(); // Verifica que pelo menos um está presente
  });

  it("renders navigation links correctly", () => {
    renderWithRouter(<Home />);

    // Verifica links pelos seus atributos href
    const aboutLink = screen.getByRole("link", {
      name: "Conheça Nossos Serviços",
    });
    expect(aboutLink).toHaveAttribute("href", "/about");

    const contactLinks = screen.getAllByRole("link", {
      name: "Entre em Contato",
    });
    expect(contactLinks).toHaveLength(2);

    // Verifica que ambos os links de contato apontam para /contact
    contactLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "/contact");
    });
  });
});
