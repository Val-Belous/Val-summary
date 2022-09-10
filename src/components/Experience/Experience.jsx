import { useEffect } from 'react';
export const Experience = () => {
  useEffect(() => {
    const backdrop = document.querySelector('.backdropExperience');
    const currentSide = document.querySelector('.containerLeft');
    currentSide.addEventListener('click', openCurrentSide);

    const boxAboutMeThird = document.querySelector('.boxAboutMeThird');
    const leftSide = document.querySelector('.containerLeft');
    const frontSide = document.querySelector('.containerFront');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector('.containerContactMe');
    const rightSide = document.querySelector('.containerPortfolio');

    function openCurrentSide(evt) {
      if (
        evt.target === evt.currentTarget ||
        !evt.target.classList.contains('containerLeft')
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
        boxAboutMeThird.classList.add('third');
        backdrop.classList.remove('ishidden');
      }
    }
  }, []);
  return (
    <div className="containerLeft">
      <h2 className="mainTitleAbout">Experience</h2>
      <p>"Click" or press "Enter" to read information about my experience</p>
    </div>
  );
};
