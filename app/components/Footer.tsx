import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";

export function Footer() {
  const LINKEDIN_URL =
    import.meta.env.VITE_LINKEDIN_URL ??
    "https://www.linkedin.com/in/andr%C3%A9-delarovera-rezende-b3a716387";
  const GITHUB_URL =
    import.meta.env.VITE_GITHUB_URL ?? "https://github.com/Andre-D-Rez";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">André D. Rezende</h3>
            <p className="text-gray-400 mb-4">
              Estudante de Engenharia de Computação na Universidade Senai
              Cimatec, focado em desenvolvimento de jogos.
            </p>
            <div className="flex space-x-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <img src={githubLogo} alt="GitHub" className="w-9 h-9 object-contain rounded-lg" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <img src={linkedinLogo} alt="LinkedIn" className="w-9 h-9 object-contain rounded-lg" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Sobre Mim
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("social")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Social
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Tecnologias</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} André D. Rezende. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

const technologies = [
  "Unity/C#",
  "React",
  "TypeScript",
  "JavaScript",
  "HTML/CSS",
  "TailwindCSS",
];
