import svg from '../../images/symbol-defs.svg';

export const Arrows = () => {
  return (
    <>
      <div className="arrow-container">
        <h1 className="arrow__title">Use keyboard:</h1>
        <div className="arrow-box">
          <svg className="arrows" height="50" width="50">
            <use href={`${svg}#icon-arrow-left`}></use>
          </svg>
          <svg className="arrows enter" height="50" width="50">
            <use href={`${svg}#icon-enter`}></use>
          </svg>
          <svg className="arrows" height="50" width="50">
            <use href={`${svg}#icon-arrow-right`}></use>
          </svg>
        </div>
      </div>
    </>
  );
};
