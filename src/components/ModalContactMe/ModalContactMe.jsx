import { ContactForm } from 'components/Form/Form';
import { useRef, useEffect } from 'react';
export const ModalContactMe = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.backdropContactMe');
    backdrop.addEventListener('click', onHandlerClick);

    const box = document.querySelector('.box');
    const leftSide = document.querySelector('.containerLeft');
    const rightSide = document.querySelector('.containerPortfolio');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector('.containerContactMe');

    function onHandlerClick(evt) {
      if (evt.target === evt.currentTarget) {
        closeBackdrop();
      }
    }

    const closeBackdrop = () => {
      if (
        box.classList.contains('torighttwo') ||
        box.classList.contains('tolefttwo')
      ) {
        bottomSide.classList.add('box__face--bottomCloseContact');
        bottomSide.classList.remove('box__face--bottomOpenContact');
        topSide.classList.add('box__face--topCloseContact');
        topSide.classList.remove('box__face--topOpenContact');
        leftSide.classList.add('leftSideCloseContact');
        leftSide.classList.remove('leftSideOpenContact');
        rightSide.classList.remove('rightSideOpenPortfolioContact');
        rightSide.classList.add('rightSideClosePortfolioContact');
        element.classList.add('ishiddenContactMe');
        backSide.classList.remove('contactMeOpenContact');
        backSide.classList.add('contactMeCloseContact');
      }
    };

    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('torighttwo') ||
            box.classList.contains('tolefttwo')
          ) {
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
            bottomSide.classList.add('box__face--bottomCloseContact');
            bottomSide.classList.remove('box__face--bottomOpenContact');
            topSide.classList.add('box__face--topCloseContact');
            topSide.classList.remove('box__face--topOpenContact');
            leftSide.classList.add('leftSideCloseContact');
            leftSide.classList.remove('leftSideOpenContact');
            rightSide.classList.remove('rightSideOpenPortfolioContact');
            rightSide.classList.add('rightSideClosePortfolioContact');
            element.classList.add('ishiddenContactMe');
            backSide.classList.remove('contactMeOpenContact');
            backSide.classList.add('contactMeCloseContact');
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
                <a
                  className="modalContactMe__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/val-belous/"
                >
                  www.linkedin.com/in/valbelous
                </a>
              </li>
              <li className="modalContactMe__item">
                <a
                  className="modalContactMe__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Val-Belous"
                >
                  https://github.com/ValBelous
                </a>
              </li>
              <li className="modalContactMe__item">
                <p>Chernivtsi, Ukraine</p>
              </li>
            </ul>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};
