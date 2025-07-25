import PageWrapper from '@/lib/PageWrapper'
import FadeInSection from '@/lib/FadeInSection'
import { DownloadButton } from '@/lib/DesignButtons'

type Project = {
    name: string
    description: string
    html_url: string
    topics: string[]
}

type GitHubRepo = {
    name: string
    description: string
    html_url: string
    topics: string[]
    owner: {
        login: string
    }
}

const fallbackProjects: Project[] = [
    {
        name: 'Smart Password Manager',
        html_url: 'https://github.com/mahendra-mr/smart-password-manager',
        topics: ['fastapi', 'react', 'aes-gcm', 'postgresql', 'docker'],
        description:
            'Secure password manager using FastAPI and React with AES-GCM encryption, JWT auth, Dockerized PostgreSQL, and analytics dashboard (in progress).',
    },
    {
        name: 'Legal Assistant Chatbot',
        html_url: 'https://github.com/mahendra-mr/legal-assistant-chatbot',
        topics: ['fastapi', 'langchain', 'rag', 'chromadb', 'ollama'],
        description:
            'AI-powered legal assistant using local LLMs with LangChain, ChromaDB, and RAG pipeline to process Indian legal documents via FastAPI APIs.',
    },
    {
        name: 'Ethereum Validator Tracker',
        html_url: 'https://github.com/mahendra-mr/eth-validator-tracker',
        topics: ['react', 'ethereum', 'beaconcha.in', 'staking'],
        description:
            'React-based Ethereum validator stats viewer using beaconcha.in API, showing top validator insights and interactive dashboard UI.',
    },
    {
        name: 'GitHub Repo Viewer',
        html_url: 'https://github.com/mahendra-mr/github-repo-viewer',
        topics: ['android', 'kotlin', 'jetpack compose', 'github-api', 'material3', 'fastapi', 'oauth'],
        description:
            'An Android app built with Kotlin and Jetpack Compose to explore GitHub profiles using the GitHub API, featuring real-time search, README viewer, OAuth login, and a sleek Material3 UI.',
    },
]

async function fetchStarredProjects() {
    const username = process.env.GITHUB_USERNAME
    const token = process.env.GITHUB_TOKEN

    if (!username || !token) return []

    try {
        const res = await fetch(
            `https://api.github.com/users/${username}/starred?per_page=100`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/vnd.github.mercy-preview+json',
                },
                next: { revalidate: 3600 },
      }
    )

        if (!res.ok) throw new Error(`GitHub API Error: ${res.status}`)

        const starredRepos = (await res.json()) as GitHubRepo[]

        const userStarredRepos = starredRepos.filter(
          (repo) => repo.owner.login === username
      )

        return userStarredRepos.map((repo): Project => ({
            name: repo.name,
            description: repo.description || `Featured project: ${repo.name}`,
            html_url: repo.html_url,
            topics: repo.topics || [],
        }))
  } catch {
      return []
  }
}

export default async function ResumePage() {
    const starredProjects = await fetchStarredProjects()
    const projectsToShow = starredProjects.length > 0 ? starredProjects : fallbackProjects

  return (
      <div className="relative min-h-screen bg-black text-white py-20 px-4 sm:px-8">
          <DownloadButton />
          <PageWrapper>
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
                          <li>Built Node.js (NestJS) tools for blockchain metrics and node performance monitoring, optimizing concurrency and resource usage for high scalability.</li>
                          <li>Ensured high uptimes (99%) and accurate payouts for staking operations.</li>
                          <li>Integrated public Ethereum APIs to facilitate seamless Ethereum staking operations.</li>
                          <li>Automated Jira ticket creation by processing emails received via the &quot;Contact Us&quot; link on the website.</li>
                          <li>Developed functionality to generate CSV documents from JSON responses which contained transaction history.</li>
                          <li>Monitored node metrics with Datadog to enhance reliability and operational insight.</li>
                          <li>Identified and resolved node issues to maintain performance.</li>
                          <li>Created and managed Vault and Nomad configurations, and JFrog pipelines for dockerizing the node clients (SSV, Obol, Solana, AVAX, Livepeer, NEAR, DOT).</li>
                          <li>Utilized agile development methodologies with Jira to collaborate effectively across teams and ensure timely feature delivery.</li>
                      </ul>
                  </FadeInSection>

                  <FadeInSection>
                      <h2 className="text-2xl font-semibold text-blue-400 mb-4">Skills</h2>
                      <div className="text-base text-gray-300 leading-7">
                          <p><strong>Languages:</strong> Python, JavaScript, TypeScript, Java, C, HTML, CSS, SQL, C#</p>
                          <p><strong>Frameworks & Tools:</strong> React, FastAPI, Node.js, NestJS, Docker, LangChain, ChromaDB, Git, Jira, GitLab, ASP.Net, VB.Net</p>
                          <p><strong>Domains:</strong> Blockchain Technology, Bitcoin Mining, Staking, Gen AI, RAG, Encryption (AES-GCM)</p>
                      </div>
                  </FadeInSection>

                  <FadeInSection>
                      <h2 className="text-2xl font-semibold text-blue-400 mb-6">Featured Projects</h2>
                      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                          {projectsToShow.map((project) => (
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
                                      <span className="text-xs bg-yellow-600/30 text-yellow-200 px-2 py-1 rounded-full">
                                          ⭐ Featured
                                      </span>
                                  </div>

                                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                      {project.description}
                                  </p>

                                  {project.topics && project.topics.length > 0 && (
                                      <div className="flex flex-wrap gap-2 mb-3">
                                          {project.topics.slice(0, 4).map((topic: string) => (
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
  )
}
