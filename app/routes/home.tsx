import type { Route } from "./+types/home";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Social } from "../components/Social";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "André D. Rezende - Portfolio" },
    {
      name: "description",
      content:
        "Estudante de Engenharia de Computação na Universidade Senai Cimatec, focado em desenvolvimento de jogos.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main id="hero">
        <Hero />
        <About />
        <Projects />
        <Social />
      </main>
      <Footer />
    </div>
  );
}
