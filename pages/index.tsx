import HomeSectionFeature from '@/components/home/home-section-feature';
import HomeSectionManual from '@/components/home/home-section-manual';
import HomeSectionVisual from '@/components/home/home-section-visual';
import RendingFooter from '@/components/rending-footer/rending-footer';
import RendingHeader from '@/components/rending-header/rending-header';

export default function Home() {
  return (
    <>
      <RendingHeader isDarkmode={true} />
      <main className="bg-black text-white">
        <HomeSectionVisual />
        <HomeSectionManual />
        <HomeSectionFeature />
      </main>
      <RendingFooter />
    </>
  );
}
