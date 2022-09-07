import { useRef, useEffect } from 'react';
import { FrontAboutMe } from './FrontAboutMe/FrontAboutMe';
import { keysFunc } from 'helpers/keyPressFunc';
import { Arrows } from './Arrows/Arrows';
import { ModalAboutMe } from './ModalAboutMe/ModalAboutMe';
import { PortfolioModal } from './PortfolioModal/PortfolioModal';
import { Portfolio } from './Portfolio/Portfolio';
import { Experience } from './Experience/Experience';
import { ContactMe } from './ContactMe/ContactMe';
import { ModalContactMe } from './ModalContactMe/ModalContactMe';
import { ModalExperience } from './ModalExperience/ModalExperience';

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
      const experienceBackdrop = document.querySelector(
        '.ModalExperience_backdropExperience__q53Ru'
      );
      const contactBackdrop = document.querySelector(
        '.ModalContactMe_backdropContactMe__MDbbj'
      );

      if (
        !aboutMeBackdrop.classList.contains('ModalAboutMe_ishidden__5OpwD') ||
        !portfolioBackdrop.classList.contains(
          'PortfolioModal_ishidden__WK0Ud'
        ) ||
        !experienceBackdrop.classList.contains(
          'ModalExperience_ishidden__I1iD2'
        ) ||
        !contactBackdrop.classList.contains('ModalContactMe_ishidden__SfNTL')
      ) {
        return;
      }
      keysFunc(element, evt.keyCode);
    };
    let element = ref.current;

    window && window.addEventListener('keydown', onKeyPress);
    return () => {
      window.removeEventListener('keydown', onKeyPress);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="scene">
          <div className="box default" id="box" ref={ref}>
            <FrontAboutMe />
            <Portfolio />
            <Experience />
            <ContactMe />
            <div className="box__face box__face--top"></div>
            <div className="box__face box__face--bottom"></div>
          </div>
        </div>
      </div>
      <Arrows />
      <ModalAboutMe />
      <PortfolioModal />
      <ModalContactMe />
      <ModalExperience />
    </>
  );
};
