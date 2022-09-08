import kapustaImage from '../../images/kapusta-preview.PNG';
import filmotekaImage from '../../images/filmoteka-preview.PNG';
import hellenImage from '../../images/hellen-preview.PNG';

export const Portfolio = () => {
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
