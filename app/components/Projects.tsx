import { useState } from "react";
import calcPreviewPng from "../assets/calculadorapreview.png";
import ticketPreviewPng from "../assets/ticketpreview.png";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState<string | null>(null);

  const openPreview = (projectId: string, liveUrl?: string) => {
    if (liveUrl) {
      setShowPreview(projectId);
    }
  };

  const closePreview = () => {
    setShowPreview(null);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meus Projetos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Principais projetos desenvolvidos com foco em funcionalidade, design
            moderno e experiência do usuário
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group w-full max-w-md mx-auto"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative h-56 bg-black overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="absolute inset-0 w-full h-full object-contain p-6"
                    loading="lazy"
                  />
                  {activeProject === project.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center transition-all duration-300">
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-3">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm font-medium flex items-center gap-2"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            GitHub
                          </a>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                            >
                              Ver Projeto
                            </a>
                          )}
                        </div>
                        {project.liveUrl && (
                          <button
                            onClick={() =>
                              openPreview(project.id, project.liveUrl)
                            }
                            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-medium"
                          >
                            Abrir Preview
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed text-center">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                    >
                      Código Fonte
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                      >
                        Acessar Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showPreview && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-6xl w-full h-5/6 flex flex-col">
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {projects.find((p) => p.id === showPreview)?.title} - Preview
                </h3>
                <button
                  onClick={closePreview}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 p-6">
                <iframe
                  src={projects.find((p) => p.id === showPreview)?.liveUrl}
                  className="w-full h-full border-0 rounded-lg shadow-lg"
                  title={`Preview - ${projects.find((p) => p.id === showPreview)?.title}`}
                />
              </div>
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-4 justify-center">
                  <a
                    href={projects.find((p) => p.id === showPreview)?.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    Abrir em Nova Aba
                  </a>
                  <a
                    href={projects.find((p) => p.id === showPreview)?.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const projects: ProjectData[] = [
  {
    id: "ticket-generator",
    title: "Gerador de Tickets",
    description:
      "Sistema web moderno para geração automática de tickets personalizados. Interface intuitiva com preview em tempo real",
    image: ticketPreviewPng,
    technologies: ["HTML", "CSS", "JavaScript", "Canvas API"],
    githubUrl: "https://github.com/Andre-D-Rez/Ticket-Generator-FullStack",
    liveUrl: "https://ticketgenerator.andredrez.tech/",
    featured: true,
  },
  {
    id: "age-calculator",
    title: "Calculadora de Idade",
    description:
      "Aplicação web precisa para cálculo de idade. Calcula idade em anos, meses e dias com interface responsiva e moderna.",
    image: calcPreviewPng,
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "React Router",
      "Date API",
    ],
    githubUrl: "https://github.com/Andre-D-Rez/React-Age-Calculator",
    liveUrl: "https://agecalculator.andredrez.tech/",
    featured: true,
  },
];
