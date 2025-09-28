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
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meus Projetos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-md mx-auto"
              >
                <div className="relative h-60 bg-black overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                    loading="lazy"
                  />
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
