import IntroTop from "../components/Main/Introduce/Top/IntroTop";
import IntroBottom from "../components/Main/Introduce/Bottom/IntroBottom";
import IntroMid from "../components/Main/Introduce/Mid/IntroMid";
import useHideNav from "../hooks/Nav/useHideNav";

function IntroducePage() {
  useHideNav();

  return (
    <>
      <IntroTop />
      <IntroMid />
      <IntroBottom />
    </>
  );
}

export default IntroducePage;
