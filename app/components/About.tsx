export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Sou um estudante de Engenharia de Computação na Universidade Senai
              Cimatec, com foco em desenvolvimento de jogos. Tenho interesse em
              criar experiências interativas e inovadoras, explorando tanto o
              front-end quanto o back-end de aplicações web e jogos digitais.
              Busco constantemente aprender novas tecnologias e aprimorar minhas
              habilidades para entregar soluções criativas e eficientes.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tecnologias
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map(({ name, level }) => (
                <div key={name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const skills = [
  "Unity Engine",
  "C#",
  "C++",
  "Java",
  "React",
  "TypeScript",
  "JavaScript",
  "HTML/CSS",
  "TailwindCSS",
  "Node.js",
  "Git",
  "Responsive Design",
];

const technologies = [
  { name: "Unity/C#", level: 75 },
  { name: "React", level: 65 },
  { name: "TypeScript", level: 65 },
  { name: "JavaScript", level: 60 },
  { name: "HTML/CSS", level: 70 },
  { name: "TailwindCSS", level: 70 },
];
