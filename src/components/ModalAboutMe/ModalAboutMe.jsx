import { useRef, useEffect } from 'react';
import photo from '../../images/myPhoto.JPG';

export const ModalAboutMe = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.backdropAboutMe');
    const box = document.querySelector('.box');
    const leftSide = document.querySelector('.containerLeft');
    const frontSide = document.querySelector('.containerFront');
    const rightSide = document.querySelector('.containerPortfolio');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector('.containerContactMe');
    const boxAboutMeFirst = document.querySelector('.boxAboutMeFirst');
    const boxAboutMeSecond = document.querySelector('.boxAboutMeSecond');
    const boxAboutMeThird = document.querySelector('.boxAboutMeThird');
    const boxAboutMeFour = document.querySelector('.boxAboutMeFour');

    const currentSideModal = document.querySelector('.modalAboutMe');
    currentSideModal.addEventListener('click', closeFrontSide);

    function closeFrontSide(evt) {
      if (evt.target === evt.currentTarget) {
        backdrop.classList.add('ishiddenAboutMe');
        boxAboutMeFour.classList.remove('four');
        boxAboutMeThird.classList.remove('third');
        boxAboutMeSecond.classList.remove('second');
        boxAboutMeFirst.classList.remove('first');
        rightSide.classList.remove('rightSideClosePortfolioContact');
        rightSide.classList.remove('rightSideOpen');
        leftSide.classList.remove('leftSideOpen');
        topSide.classList.remove('box__face--topOpen');
        bottomSide.classList.remove('box__face--bottomOpen');
        frontSide.classList.remove('frontSideOpen');
      }
    }

    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('torightfour') ||
            box.classList.contains('default') ||
            box.classList.contains('toleftfour')
          ) {
            boxAboutMeFirst.classList.add('first');
            boxAboutMeSecond.classList.add('second');
            boxAboutMeThird.classList.add('third');
            boxAboutMeFour.classList.add('four');
            // ======
            bottomSide.classList.remove('box__face--bottomCloseContact');
            topSide.classList.remove('box__face--topCloseContact');
            leftSide.classList.remove('leftSideCloseContact');
            backSide.classList.remove('contactMeCloseContact');
            frontSide.classList.remove('frontSideClosePortfolioExp');
            bottomSide.classList.remove('box__face--bottomCloseExp');
            topSide.classList.remove('box__face--topCloseExp');
            leftSide.classList.remove('leftSideCloseExp');
            topSide.classList.remove('box__face--topCLosePortfolio');
            frontSide.classList.remove('frontSideClosePortfolio');
            bottomSide.classList.remove('box__face--bottomClosePortfolio');
            leftSide.classList.add('leftSideOpen');
            topSide.classList.add('box__face--topOpen');
            bottomSide.classList.add('box__face--bottomOpen');
            frontSide.classList.add('frontSideOpen');
            rightSide.classList.add('rightSideOpen');
            rightSide.classList.remove('rightSideClosePortfolio');
            element.classList.remove('ishiddenAboutMe');
          }
          break;
        case 27:
          if (
            box.classList.contains('torightfour') ||
            box.classList.contains('default') ||
            box.classList.contains('toleftfour')
          ) {
            boxAboutMeFour.classList.remove('four');
            boxAboutMeThird.classList.remove('third');
            boxAboutMeSecond.classList.remove('second');
            boxAboutMeFirst.classList.remove('first');
            rightSide.classList.remove('rightSideClosePortfolioContact');
            rightSide.classList.remove('rightSideOpen');
            leftSide.classList.remove('leftSideOpen');
            topSide.classList.remove('box__face--topOpen');
            bottomSide.classList.remove('box__face--bottomOpen');
            frontSide.classList.remove('frontSideOpen');
            element.classList.add('ishiddenAboutMe');
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
      <div
        id="modalAboutMe"
        className="backdropAboutMe ishiddenAboutMe"
        ref={ref}
      >
        <div className="modalAboutMe">
          <div className="boxAboutMeFirst">
            <img className="image" src={photo} alt="" />
            <div className="text-box">
              <h2 className="titleAboutMe">Valentyn Belous</h2>
              <p>
                I am junior front-end developer looking for a full - time job.
                Seeking to use my good JavaScript and React.js skills. I want
                try to do my best on my future position in order to achieve the
                maximum good result in the shortest possible time.
              </p>
            </div>
          </div>
          <div className="boxAboutMeSecond">
            <div className="skills-box">
              <h2 className="titleAboutMe">Skills</h2>
              <div className="skills-text-box">
                <h3 className="textAboutMe">Hard</h3>
                <h3 className="textAboutMe">Soft</h3>
              </div>
              <div className="skills-text-box">
                <p>
                  HTML5/CSS/SASS, Responsive/Adaptive design, GIT, JavaScript,
                  React, Redux, Axios, Parcel, MaterialUI, Chart.js
                </p>
                <p>
                  Teamwork, Good communication, Capable, Honest, Good sense of
                  humour.
                </p>
              </div>
            </div>
          </div>
          <div className="boxAboutMeThird">
            <div className="work-box">
              <h2 className="titleAboutMe">Work Experience</h2>
              <h3 className="textAboutMe">Ekvator Holiday</h3>
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
                </li>
                <li>
                  <h3 className="textAboutMe">Alex Group</h3>
                  <p className="work-text">October 2018 - 2022</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="boxAboutMeFour">
            <div className="work-box">
              <h2 className="titleAboutMe">Education</h2>
              <h3 className="textAboutMe">Chernivtsi Polytechnic College</h3>
              <ul className="work-text-box">
                <li>
                  <p className="work-text">2009 - 2013</p>
                  <p className="work-text">
                    Construction and civil engineering
                  </p>
                </li>
                <li>
                  <h3 className="textAboutMe">
                    Odessa Academy of Civil Engineering and Architecture
                  </h3>
                  <p className="work-text">2013 - 2017</p>
                  <p className="work-text">
                    Construction and civil engineering
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
