import PageWrapper from '@/lib/PageWrapper';
import FadeInSection from '@/lib/FadeInSection';
import { DownloadButton } from '@/lib/DesignButtons';

export default function ResumePage() {
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
                          <li>Automated Jira ticketing via “Contact Us” email handler.</li>
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

                  <FadeInSection>
                      <h2 className="text-2xl font-semibold text-blue-400 mb-4">Projects</h2>
                      <div className="space-y-5 text-base text-gray-300">
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
                          <p><strong>Strengths:</strong>Highly motivated, ability to learn quickly, capable of working with minimum supervision</p>
                          <p><strong>Languages Known:</strong> English, Kannada, Hindi</p>
                      </div>
                  </FadeInSection>
              </div>
          </PageWrapper>
    </div>
  );
}
