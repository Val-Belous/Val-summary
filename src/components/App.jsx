import { useRef, useEffect } from 'react';
import { FrontAboutMe } from './FrontAboutMe/FrontAboutMe';
import { keysFunc } from 'helpers/keyPressFunc';
import { RightMyProjects } from './RightMyProjects/RightMyProjects';
import { Arrows } from './Arrows/Arrows';
import { ModalAboutMe } from './ModalAboutMe/ModalAboutMe';
import { PortfolioModal } from './PortfolioModal/PortfolioModal';

export const App = () => {
  const ref = useRef(null);
  useEffect(() => {
    const onKeyPress = evt => {
      const aboutMeBackdrop = document.querySelector(
        '.ModalAboutMe_backdrop__v1zHC'
      );
      const portfolioBackdrop = document.querySelector(
        '.PortfolioModal_backdrop__XXUZr'
      );

      if (
        !aboutMeBackdrop.classList.contains('ModalAboutMe_ishidden__5OpwD') ||
        !portfolioBackdrop.classList.contains('PortfolioModal_ishidden__WK0Ud')
      ) {
        return;
      }
      keysFunc(element, evt.keyCode);
    };
    let element = ref.current;

    window.addEventListener('keydown', onKeyPress);
    return () => {
      window.removeEventListener('keydown', onKeyPress);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="scene">
          <div className="box default" id="box" ref={ref}>
            <div className="box__face box__face--back">Back</div>
            <FrontAboutMe />
            <RightMyProjects />
            <div className="box__face box__face--left">Left</div>
            <div className="box__face box__face--top"></div>
            <div className="box__face box__face--bottom"></div>
          </div>
        </div>
      </div>
      <Arrows />
      <ModalAboutMe />
      <PortfolioModal />
    </>
  );
};
