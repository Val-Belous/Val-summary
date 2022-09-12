import { useRef, useEffect } from 'react';
import svg from '../../images/symbol-defs.svg';

export const ModalExperience = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.backdropExperience');
    const box = document.querySelector('.box');
    const leftSide = document.querySelector('.containerLeft');
    const frontSide = document.querySelector('.containerFront');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector('.containerContactMe');
    const rightSide = document.querySelector('.containerPortfolio');
    const boxAboutMeThird = document.querySelector('.boxAboutMeThird');

    const currentSideModal = document.querySelector('.modalExperience');
    currentSideModal.addEventListener('click', closeCurrentSide);

    function closeCurrentSide(evt) {
      if (evt.target === evt.currentTarget) {
        backdrop.classList.add('ishidden');
        boxAboutMeThird.classList.remove('third');
        bottomSide.classList.add('box__face--bottomCloseExp');
        bottomSide.classList.remove('box__face--bottomOpenExp');
        topSide.classList.remove('box__face--topOpenExp');
        topSide.classList.add('box__face--topCloseExp');
        frontSide.classList.remove('frontSideOpenPortfolioExp');
        frontSide.classList.add('frontSideClosePortfolioExp');
        leftSide.classList.remove('leftSideOpenExp');
        backSide.classList.remove('contactMeOpenExp');
        backSide.classList.add('contactMeCloseExp');
        leftSide.classList.add('leftSideCloseExp');
      }
    }

    const closeBtn = document.querySelector('.modal__close-btnE');
    closeBtn.addEventListener('click', closeModal);
    function closeModal(evt) {
      if (evt.target !== evt.currentTarget) {
        boxAboutMeThird.classList.remove('third');
        bottomSide.classList.add('box__face--bottomCloseExp');
        bottomSide.classList.remove('box__face--bottomOpenExp');
        topSide.classList.remove('box__face--topOpenExp');
        topSide.classList.add('box__face--topCloseExp');
        frontSide.classList.remove('frontSideOpenPortfolioExp');
        frontSide.classList.add('frontSideClosePortfolioExp');
        leftSide.classList.remove('leftSideOpenExp');
        backSide.classList.remove('contactMeOpenExp');
        backSide.classList.add('contactMeCloseExp');
        element.classList.add('ishidden');
        leftSide.classList.add('leftSideCloseExp');
      }
    }

    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('toleftone') ||
            box.classList.contains('torightthree')
          ) {
            boxAboutMeThird.classList.add('third');
            leftSide.classList.add('leftSideOpenExp');
            bottomSide.classList.remove('box__face--bottomCloseContact');
            topSide.classList.remove('box__face--topCloseContact');
            leftSide.classList.remove('leftSideCloseContact');
            rightSide.classList.remove('rightSideClosePortfolioContact');
            backSide.classList.remove('contactMeCloseContact');
            leftSide.classList.remove('leftSideCloseExp');
            backSide.classList.add('contactMeOpenExp');
            backSide.classList.remove('contactMeCloseExp');
            backSide.classList.remove('contactMeClose');
            frontSide.classList.add('frontSideOpenPortfolioExp');
            frontSide.classList.remove('frontSideClosePortfolioExp');
            topSide.classList.add('box__face--topOpenExp');
            topSide.classList.remove('box__face--topCloseExp');
            bottomSide.classList.add('box__face--bottomOpenExp');
            bottomSide.classList.remove('box__face--bottomCloseExp');
            element.classList.remove('ishidden');
          }
          break;
        case 27:
          if (
            box.classList.contains('toleftone') ||
            box.classList.contains('torightthree')
          ) {
            boxAboutMeThird.classList.remove('third');
            bottomSide.classList.add('box__face--bottomCloseExp');
            bottomSide.classList.remove('box__face--bottomOpenExp');
            topSide.classList.remove('box__face--topOpenExp');
            topSide.classList.add('box__face--topCloseExp');
            frontSide.classList.remove('frontSideOpenPortfolioExp');
            frontSide.classList.add('frontSideClosePortfolioExp');
            leftSide.classList.remove('leftSideOpenExp');
            backSide.classList.remove('contactMeOpenExp');
            backSide.classList.add('contactMeCloseExp');
            element.classList.add('ishidden');
            leftSide.classList.add('leftSideCloseExp');
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
      <div className="backdropExperience ishidden" ref={ref}>
        <div className="modalExperience">
          <div className="boxAboutMeThird">
            <button
              className="modal__close-btnE"
              type="button"
              data-modal-close
            >
              <svg className="modal__close-icon" width="18" height="18">
                <use href={`${svg}#icon-close`}></use>
              </svg>
            </button>
            <div className="work-box">
              <h2 className="workTitle">Work Experience</h2>
              <h3 className="workText">Ekvator Holiday</h3>
              <ul className="work-text-box">
                <li>
                  <p className="work-text">
                    Сanteen cashier | May 2015 - October 2017
                  </p>
                  <p className="work-text">Responsibilities:</p>
                  <ul className="work-list">
                    <li>Communication with clients</li>
                    <li>Ordered goods</li>
                  </ul>
                </li>
                <li>
                  <p className="work-text">
                    Canteen Administrator | May 2018 - October 2021
                  </p>
                  <p className="work-text">Responsibilities:</p>
                  <ul className="work-list">
                    <li>Communication with clients</li>
                    <li>Work with staff</li>
                    <li>Control of quality and service</li>
                  </ul>
                  <p className="work-text">
                    Achievements: for 2 seasons of work reached a managerial
                    position.
                  </p>
                </li>
                <li>
                  <h3 className="textAboutMe">Alex Group</h3>
                  <p className="work-text">October 2018 - 2022</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
