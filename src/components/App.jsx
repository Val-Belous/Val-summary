import { useRef, useEffect, useState } from 'react';
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
  const [box, setBox] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    let element = ref.current;
    setBox(ref.current);
    const onKeyPress = evt => {
      const aboutMeBackdrop = document.querySelector('#modalAboutMe');
      const portfolioBackdrop = document.querySelector('.backdropPortfolio');
      const experienceBackdrop = document.querySelector('.backdropExperience');
      const contactBackdrop = document.querySelector('.backdropContactMe');

      if (
        !aboutMeBackdrop.classList.contains('ishiddenAboutMe') ||
        !portfolioBackdrop.classList.contains('ishiddenPortfolio') ||
        !experienceBackdrop.classList.contains('ishidden') ||
        !contactBackdrop.classList.contains('ishiddenContactMe')
      ) {
        return;
      }
      keysFunc(element, evt.keyCode);
    };

    window.addEventListener('keydown', onKeyPress);
    return () => {
      window.removeEventListener('keydown', onKeyPress);
    };
  }, [ref, setBox]);

  return (
    <>
      <p className="lol">beta v 1.5.0a</p>
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
        {box && <Arrows el={box} />}
      </div>
      <ModalAboutMe />
      <PortfolioModal />
      <ModalContactMe />
      <ModalExperience />
    </>
  );
};
