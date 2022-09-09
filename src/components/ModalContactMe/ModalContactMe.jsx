import { ContactForm } from 'components/Form/Form';
import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import resume from '../../resume/cv-val-bilous.pdf';

export const ModalContactMe = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.backdropContactMe');
    const box = document.querySelector('.box');
    const leftSide = document.querySelector('.containerLeft');
    const rightSide = document.querySelector('.containerPortfolio');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector('.containerContactMe');
    const ContactMe__box = document.querySelector('.modalContactMe__box');

    const currentSideModal = document.querySelector('.modalContactMe');
    currentSideModal.addEventListener('click', closeCurrentSide);

    function closeCurrentSide(evt) {
      if (evt.target === evt.currentTarget) {
        backdrop.classList.add('ishiddenContactMe');
        bottomSide.classList.add('box__face--bottomCloseContact');
        bottomSide.classList.remove('box__face--bottomOpenContact');
        topSide.classList.add('box__face--topCloseContact');
        topSide.classList.remove('box__face--topOpenContact');
        leftSide.classList.add('leftSideCloseContact');
        leftSide.classList.remove('leftSideOpenContact');
        rightSide.classList.remove('rightSideOpenPortfolioContact');
        rightSide.classList.add('rightSideClosePortfolioContact');
        backSide.classList.remove('contactMeOpenContact');
        backSide.classList.add('contactMeCloseContact');
        ContactMe__box.classList.remove('third');
      }
    }

    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('torighttwo') ||
            box.classList.contains('tolefttwo')
          ) {
            ContactMe__box.classList.add('third');
            element.classList.remove('ishiddenContactMe');
            backSide.classList.add('contactMeOpenContact');
            backSide.classList.remove('contactMeCloseContact');
            backSide.classList.remove('contactMeClose');
            rightSide.classList.add('rightSideOpenPortfolioContact');
            rightSide.classList.remove('rightSideClosePortfolioContact');
            leftSide.classList.add('leftSideOpenContact');
            leftSide.classList.remove('leftSideCloseContact');
            topSide.classList.add('box__face--topOpenContact');
            topSide.classList.remove('box__face--topCloseContact');
            bottomSide.classList.add('box__face--bottomOpenContact');
            bottomSide.classList.remove('box__face--bottomCloseContact');
          }
          break;
        case 27:
          if (
            box.classList.contains('torighttwo') ||
            box.classList.contains('tolefttwo')
          ) {
            ContactMe__box.classList.remove('third');
            bottomSide.classList.add('box__face--bottomCloseContact');
            bottomSide.classList.remove('box__face--bottomOpenContact');
            topSide.classList.add('box__face--topCloseContact');
            topSide.classList.remove('box__face--topOpenContact');
            leftSide.classList.add('leftSideCloseContact');
            leftSide.classList.remove('leftSideOpenContact');
            rightSide.classList.remove('rightSideOpenPortfolioContact');
            rightSide.classList.add('rightSideClosePortfolioContact');
            backSide.classList.remove('contactMeOpenContact');
            backSide.classList.add('contactMeCloseContact');
            element.classList.add('ishiddenContactMe');
          }
          break;
        default:
          return;
      }
    };

    const element = ref.current;
    window.addEventListener('keydown', onKeyPress);
    return () => {
      window.removeEventListener('keydown', onKeyPress);
    };
  }, []);

  return (
    <>
      <div className="backdropContactMe ishiddenContactMe" ref={ref}>
        <div className="modalContactMe">
          <div className="modalContactMe__box">
            <h3 className="titleAboutMe">Contact information</h3>
            <ul className="modalContactMe__list">
              <li className="modalContactMe__item">
                <a className="modalContactMe__link" href="tel:+380953307070">
                  +38 095 330 70 70
                </a>
              </li>
              <li className="modalContactMe__item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modalContactMe__link"
                  href="mailto:vaaalbelous@gmail.com"
                >
                  vaaalbelous@gmail.com
                </a>
              </li>
              <li className="modalContactMe__item">
                <ul className="modalContactMe__item-social">
                  <li>
                    <a
                      className="modalContactMe__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/val-belous/"
                    >
                      <FontAwesomeIcon className="fa" icon={faLinkedin} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="modalContactMe__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Val-Belous"
                    >
                      <FontAwesomeIcon className="fa" icon={faGithub} />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="modalContactMe__item">
                <p>Chernivtsi, Ukraine</p>
              </li>
            </ul>
            <div>
              <a className="modalContactMe__link-cv" href={resume} download>
                <FontAwesomeIcon className="fa" icon={faFolder} />
                <p>Download CV</p>
              </a>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};
