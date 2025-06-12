import PageWrapper from '@/lib/PageWrapper';
import { fetchUserRepos, GitHubRepo } from '@/lib/github';
import Link from 'next/link';

export default async function ProjectsPage() {
    const repos = await fetchUserRepos();

    return (
        <div className="relative min-h-screen bg-black text-white py-20 px-4 sm:px-8">
            <PageWrapper>
                <h1 className="text-4xl font-bold tracking-wide text-center mb-16">My Projects</h1>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {repos.map((repo) => (
                        <Link
                            key={repo.name}
                            href={repo.html_url}
                            target="_blank"
                            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-md transition-transform hover:scale-[1.02]"
                        >
                            <h2 className="text-xl font-semibold text-blue-400 group-hover:underline">
                                {repo.name}
                            </h2>
                            <p className="mt-2 text-sm text-gray-300 line-clamp-3">{repo.description}</p>

                            {repo.topics.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {repo.topics.map((topic) => (
                                        <span
                                            key={topic}
                                            className="bg-blue-600/30 text-xs text-white px-2 py-1 rounded-full"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </Link>
                    ))}
                </div>
            </PageWrapper>
        </div>
    );
}
