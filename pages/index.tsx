import getToken from '@/apis/localStorage';
import AuthHOC from '@/auth/auth-hoc';
import HomeSectionFeature from '@/components/home/home-section-feature';
import HomeSectionManual from '@/components/home/home-section-manual';
import HomeSectionVisual from '@/components/home/home-section-visual';
import RendingFooter from '@/components/rending-footer/rending-footer';
import RendingHeader from '@/components/rending-header/rending-header';

const Home = () => {
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
};

export default Home;
