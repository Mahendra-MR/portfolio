import PageWrapper from '@/lib/PageWrapper';
import AnimatedHeading from '@/lib/AnimatedHeading';
import SocialLinks from '@/lib/SocialLinks';
import FullAnimatedBackground from '@/lib/FullAnimatedBackground';
import TiltButton from '@/lib/TiltButton';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black text-white">
      <FullAnimatedBackground />

      <PageWrapper>
        <AnimatedHeading text="Hi, I’m Mahendra 👋" />
        <p className="text-xl text-white/90 mb-4">
          Software Engineer | Blockchain Enthusiast | MERN Developer
        </p>

        <TiltButton />

        <div className="mt-6">
          <SocialLinks />
        </div>
      </PageWrapper>
    </div>
  );
}
