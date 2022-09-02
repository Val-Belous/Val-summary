import { FrontAboutMe } from './FrontAboutMe/FrontAboutMe';

export const App = () => {
  return (
    <div className="container">
      <h1 className="maintext">Val Belous Summary</h1>
      <div>
        <div className="box">
          <FrontAboutMe />
          <div className="box__face box__face--back">Back</div>
          {/* <div className="box__face box__face--front">Front</div> */}
          <div className="box__face box__face--left">Left</div>
          <div className="box__face box__face--right">Right</div>
          <div className="box__face box__face--top">Top</div>
          <div className="box__face box__face--bottom">Bottom</div>
        </div>
      </div>
    </div>
  );
};
