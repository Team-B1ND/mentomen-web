import IntroTop from "../components/Main/Introduce/Top/IntroTop";
import IntroBottom from "../components/Main/Introduce/Bottom/IntroBottom";
import useHideHeaderOrNav from "../hooks/common/useHideHeaderOrNav";

function IntroducePage() {
  useHideHeaderOrNav("Nav");

  return (
    <>
      <IntroTop />
      <IntroBottom />
    </>
  );
}

export default IntroducePage;
