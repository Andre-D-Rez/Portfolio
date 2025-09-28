import githubLogo from "../assets/github-logo2.svg";
import linkedinLogo from "../assets/linkedin-logo2.png";

export function Social() {
  const LINKEDIN_URL =
    import.meta.env.VITE_LINKEDIN_URL ??
    "https://www.linkedin.com/in/andr%C3%A9-delarovera-rezende-b3a716387";
  const GITHUB_URL =
    import.meta.env.VITE_GITHUB_URL ?? "https://github.com/Andre-D-Rez";

  return (
    <section id="social" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Social
          </h2>
        </div>

        <div className="flex justify-center gap-8">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border-2 border-transparent hover:border-purple-600 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center mb-4">
              <img
                src={githubLogo}
                alt="GitHub"
                className="w-11 h-11 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              GitHub
            </h3>
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border-2 border-transparent hover:border-purple-600 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              LinkedIn
            </h3>
          </a>
        </div>
      </div>
    </section>
  );
}
