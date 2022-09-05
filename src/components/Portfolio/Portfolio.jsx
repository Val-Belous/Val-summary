import styles from './Portfolio.module.css';
// import kapustaImage from '../../images/kapusta-preview.PNG';
// import filmotekaImage from '../../images/filmoteka-preview.PNG';
// import hellenImage from '../../images/hellen-preview.PNG';

export const Portfolio = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Portfolio</h2>
        <span className={styles.rightSideClosePortfolio}></span>
        {/* <ul className={styles.containerList}>
          <li className={styles.containerItem}>
            <h3>Kapu$ta</h3>
            <div className={styles.itemBox}>
              <img className={styles.itemImage} src={kapustaImage} alt="" />
              <div className={styles.textBox}>
                <p className={styles.techText}>
                  [HTML, CSS, React, Redux, Formik, Chart.js]
                </p>
                <p className={styles.descrText}>
                  A app with a responsive layout. For finance management. Worked
                  with Chart.js logic and styles.
                </p>
                <p className={styles.positionText}>Position: Developer</p>
              </div>
            </div>
          </li>
          <li className={styles.containerItem}>
            <h3>Filmoteka</h3>
            <div className={styles.itemBox}>
              <img className={styles.itemImage} src={filmotekaImage} alt="" />
              <div className={styles.textBox}>
                <p className={styles.techText}> [HTML, SASS, JS, API,Parcel]</p>
                <p className={styles.descrText}>
                  Application for choosing a movie. Worked on modal window and
                  localstorage logic.
                </p>
                <p className={styles.positionText}>Position: Developer</p>
              </div>
            </div>
          </li>
          <li className={styles.containerItem}>
            <h3>Hellen</h3>
            <div className={styles.itemBox}>
              <img className={styles.itemImage} src={hellenImage} alt="" />
              <div className={styles.textBox}>
                <p className={styles.techText}> [HTML, SASS, Parcel]</p>
                <p className={styles.descrText}>
                  A website with a responsive layout. For learning
                  English.Worked on sections: "Our program" and "Teacher".
                </p>
                <p className={styles.positionText}>Position: Developer</p>
              </div>
            </div>
          </li>
        </ul> */}
      </div>
    </>
  );
};
