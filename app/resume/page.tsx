import PageWrapper from '@/lib/PageWrapper';
import FadeInSection from '@/lib/FadeInSection';
import { DownloadButton } from '@/lib/DesignButtons';
import { fetchUserRepos } from '@/lib/github';

// New type for projects with README
type ProjectWithReadme = {
    name: string;
    description: string;
    html_url: string;
    topics: string[];
    readmeContent?: string;
    hasReadme: boolean;
};

// Function to check if repo has README and fetch basic info
async function fetchProjectsWithReadme() {
    const repos = await fetchUserRepos();
    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;

    if (!username || !token) {
        return repos.map(repo => ({ ...repo, hasReadme: false }));
    }

    const projectsWithReadme = await Promise.all(
        repos.map(async (repo): Promise<ProjectWithReadme> => {
            try {
                // Check if README exists
                const readmeRes = await fetch(
                    `https://api.github.com/repos/${username}/${repo.name}/readme`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: 'application/vnd.github.v3+json',
                        },
                    }
                );

                if (readmeRes.ok) {
                    return { ...repo, hasReadme: true };
                }
            } catch (error) {
                console.warn(`Could not fetch README for ${repo.name}:`, error);
            }

            return { ...repo, hasReadme: false };
        })
    );

    // Filter to only include projects with README files
    return projectsWithReadme.filter(project => project.hasReadme);
}

export default async function ResumePage() {
    const projectsWithReadme = await fetchProjectsWithReadme();

  return (
      <div className="relative min-h-screen bg-black text-white py-20 px-4 sm:px-8">
          {/* Floating download button (bottom-right corner) */}
          <DownloadButton />

          <PageWrapper>
              {/* Header */}
              <div className="text-center mb-12">
                  <h1 className="text-5xl font-bold tracking-wide mb-4">Mahendra M R</h1>
                  <p className="text-md text-gray-400">
                      <a href="mailto:mrmahendra1206@gmail.com" className="hover:underline">
                          mrmahendra1206@gmail.com
                      </a>{' '}
                      · +91-9606458627
                  </p>
                  <p className="text-md text-gray-400">
                      <a href="https://github.com/mahendra-mr" target="_blank" className="hover:underline">
                          GitHub
                      </a>{' '}
                      ·{' '}
                      <a
                          href="https://linkedin.com/in/mahendra-mr-1039151ba"
                          target="_blank"
                          className="hover:underline"
                      >
                          LinkedIn
                      </a>
                  </p>
              </div>

              <div className="grid gap-14 max-w-4xl mx-auto">
                  <FadeInSection>
                      <h2 className="text-2xl font-semibold text-blue-400 mb-4">Experience</h2>
                      <p className="font-semibold text-lg">Software Engineer – Foundry Digital</p>
                      <p className="text-sm text-gray-400">Bengaluru, India · Oct 2023 – Dec 2024</p>
                      <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 text-base">
                          <li>Implemented secure Auth0 authentication for staking systems.</li>
                          <li>Automated Jira ticketing via &quot;Contact Us&quot; email handler.</li>
                          <li>Integrated Ethereum APIs for staking workflows.</li>
                          <li>Generated CSVs from JSON transaction data.</li>
                          <li>Used Datadog for node monitoring & uptime (99%).</li>
                          <li>Built scalable tools with NestJS for node ops.</li>
                          <li>Configured Vault/Nomad/JFrog for containerized node clients (Solana, AVAX, DOT, etc).</li>
                      </ul>
                  </FadeInSection>

                  <FadeInSection>
                      <h2 className="text-2xl font-semibold text-blue-400 mb-4">Skills</h2>
                      <div className="text-base text-gray-300 leading-7">
                          <p><strong>Languages:</strong> Python, JS, TS, Java, C, SQL, C#, HTML, CSS</p>
                          <p><strong>Frameworks:</strong> React, Node.js, NestJS, ASP.Net, VB.Net</p>
                          <p><strong>Tools:</strong> Git, Jira, GitLab, Docker</p>
                          <p><strong>Domains:</strong> Blockchain, Staking, Bitcoin Mining</p>
                      </div>
                  </FadeInSection>

                  {/* Enhanced Projects Section with GitHub Integration */}
                  <FadeInSection>
                      <h2 className="text-2xl font-semibold text-blue-400 mb-6">Projects</h2>
                      {projectsWithReadme.length > 0 ? (
                          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                              {projectsWithReadme.map((project) => (
                                  <div
                                      key={project.name}
                                      className="bg-white/5 backdrop-blur-md rounded-lg p-5 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                                  >
                                      <div className="flex justify-between items-start mb-3">
                                          <h3 className="font-semibold text-lg text-white">
                                              <a
                                                  href={project.html_url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="hover:text-blue-400 transition-colors"
                                              >
                                                  {project.name}
                                              </a>
                                          </h3>
                                          <span className="text-xs bg-green-600/30 text-green-200 px-2 py-1 rounded-full">
                                              📄 README
                                          </span>
                                      </div>

                                      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                          {project.description}
                                      </p>

                                      {/* Technology Tags */}
                                      {project.topics.length > 0 && (
                                          <div className="flex flex-wrap gap-2 mb-3">
                                              {project.topics.slice(0, 4).map((topic) => (
                                                  <span
                                                      key={topic}
                                                      className="bg-blue-600/20 text-blue-200 text-xs px-2 py-1 rounded-full border border-blue-500/30"
                                                  >
                                                      {topic}
                                                  </span>
                                              ))}
                                              {project.topics.length > 4 && (
                                                  <span className="text-xs text-gray-400">
                                                      +{project.topics.length - 4} more
                                                  </span>
                                              )}
                                          </div>
                                      )}

                                      <div className="flex justify-between items-center">
                                          <a
                                              href={project.html_url}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-xs text-gray-400 hover:text-blue-400 transition-colors"
                                          >
                                              View on GitHub →
                                          </a>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      ) : (
                          <div className="text-center py-8">
                              <p className="text-gray-400 mb-4">Loading projects from GitHub...</p>
                              <div className="space-y-5 text-base text-gray-300">
                                      {/* Fallback to static projects if GitHub fetch fails */}
                                      <div>
                                          <p className="font-semibold">Ethereum Validator Tracker</p>
                                          <p className="text-sm text-gray-400">
                                              React UI to visualize validator stats via beaconcha.in API
                                          </p>
                                      </div>
                                      <div>
                                          <p className="font-semibold">Job Portal Website</p>
                                          <p className="text-sm text-gray-400">
                                              ASP.Net + SQL based portal with resume upload and filters
                                          </p>
                                      </div>
                                      <div>
                                          <p className="font-semibold">Blood Bank Management System</p>
                                          <p className="text-sm text-gray-400">
                                              VB.Net + SQL Windows app for donor and stock tracking
                                          </p>
                                      </div>
                                  </div>
                          </div>
                      )}
                  </FadeInSection>

                  <FadeInSection>
                      <h2 className="text-2xl font-semibold text-blue-400 mb-4">Education</h2>
                      <div className="space-y-4 text-base text-gray-300">
                          <div>
                              <p className="font-semibold">MCA – IGNOU (Pursuing)</p>
                              <p className="text-sm text-gray-400">Jan 2024 – Present</p>
                          </div>
                          <div>
                              <p className="font-semibold">BCA – National College Basavanagudi</p>
                              <p className="text-sm text-gray-400">Oct 2020 – Aug 2023 · CGPA: 7.07/10</p>
                          </div>
                      </div>
                  </FadeInSection>

                  <FadeInSection>
                      <h2 className="text-2xl font-semibold text-blue-400 mb-4">Additional Details</h2>
                      <div className="text-base text-gray-300">
                          <p><strong>Strengths:</strong> Highly motivated, ability to learn quickly, capable of working with minimum supervision</p>
                          <p><strong>Languages Known:</strong> English, Kannada, Hindi</p>
                      </div>
                  </FadeInSection>
              </div>
          </PageWrapper>
    </div>
  );
}