import kapustaImage from '../../images/kapusta-preview.PNG';
import filmotekaImage from '../../images/filmoteka-preview.PNG';
import hellenImage from '../../images/hellen-preview.PNG';
import { useEffect } from 'react';

export const Portfolio = () => {
  useEffect(() => {
    const backdrop = document.querySelector('.backdropPortfolio');
    const currentSide = document.querySelector('.containerPortfolio');
    currentSide.addEventListener('click', openFrontSide);

    const leftSide = document.querySelector('.containerLeft');
    const frontSide = document.querySelector('.containerFront');
    const rightSide = document.querySelector('.containerPortfolio');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector('.containerContactMe');
    const portfolioList = document.querySelector('.portfolioList');

    function openFrontSide(evt) {
      if (
        evt.target === evt.currentTarget ||
        !evt.target.classList.contains('containerPortfolio')
      ) {
        portfolioList.classList.add('modalPortfolioList');
        bottomSide.classList.remove('box__face--bottomCloseContact');
        topSide.classList.remove('box__face--topCloseContact');
        leftSide.classList.remove('leftSideCloseContact');
        rightSide.classList.remove('rightSideClosePortfolioContact');
        backSide.classList.remove('contactMeCloseContact');
        frontSide.classList.remove('frontSideClosePortfolioExp');
        bottomSide.classList.remove('box__face--bottomCloseExp');
        topSide.classList.remove('box__face--topCloseExp');
        backSide.classList.remove('contactMeCloseExp');
        leftSide.classList.remove('leftSideCloseExp');
        topSide.classList.remove('box__face--topCLosePortfolio');
        topSide.classList.add('box__face--topOpenPortfolio');
        backSide.classList.remove('contactMeClose');
        backSide.classList.add('contactMeOpen');
        bottomSide.classList.add('box__face--bottomOpenPortfolio');
        bottomSide.classList.remove('box__face--bottomClosePortfolio');
        frontSide.classList.add('frontSideOpenPortfolio');
        frontSide.classList.remove('frontSideClosePortfolio');
        rightSide.classList.add('rightSideOpenPortfolio');
        rightSide.classList.remove('rightSideClosePortfolio');
        backdrop.classList.remove('ishiddenPortfolio');
      }
    }
  }, []);
  return (
    <>
      <div className="containerPortfolio">
        <h2 className="mainTitle">Portfolio</h2>
        <ul className="containerList">
          <li className="containerItem">
            <img className="itemImagePortfolio" src={kapustaImage} alt="" />
          </li>
          <li className="containerItem">
            <img className="itemImagePortfolio" src={filmotekaImage} alt="" />
          </li>
          <li className="containerItem">
            <img className="itemImagePortfolio" src={hellenImage} alt="" />
          </li>
        </ul>
        <p className="About-text__desktop">
          "Click" or press "Enter" for details
        </p>
        <p className="About-text__mobile">"Tap" for details</p>
      </div>
    </>
  );
};
