import PageWrapper from '@/lib/PageWrapper';
import AnimatedHeading from '@/lib/AnimatedHeading';
import SocialLinks from '@/lib/SocialLinks';
import FullAnimatedBackground from '@/lib/FullAnimatedBackground';
import { TiltButton, GitHubButton } from '@/lib/DesignButtons';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black text-white px-4">
      <FullAnimatedBackground />

      <PageWrapper>
        <AnimatedHeading text="Hi, I’m Mahendra 👋" />
        <p className="text-xl text-white/90 mb-6">
          Software Engineer | Blockchain Enthusiast | MERN Developer
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <TiltButton />
          <GitHubButton />
        </div>

        <div className="mt-8">
          <SocialLinks />
        </div>
      </PageWrapper>
    </div>
  );
}
