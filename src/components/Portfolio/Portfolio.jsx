import kapustaImage from '../../images/kapusta-preview.PNG';
import filmotekaImage from '../../images/filmoteka-preview.PNG';
import hellenImage from '../../images/hellen-preview.PNG';
import { useEffect } from 'react';

export const Portfolio = () => {
  useEffect(() => {
    const backdrop = document.querySelector('.backdropPortfolio');
    const rightSide = document.querySelector('.containerPortfolio');
    rightSide.addEventListener('click', openFrontSide);

    function openFrontSide(evt) {
      if (evt.target !== evt.currentTarget) {
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
      </div>
    </>
  );
};
