import Sidebar from "../../components/Sidebar/Sidebar.js";
import styles from "./ForthPage.module.css";
import Header from "../../components/Header/Header.js";
import ResultBarGender from "../../components/Result_Bar_Gender/Result_Bar_Gender.js";
import Result_Bar_Age from "../../components/Result_Bar_Age/Result_Bar_Age.js";
import Result_Bar_Crowd from "../../components/Result_Bar_Crowd/Result_Bar_Crowd.js";

const ForthPage = () => {

  return (
    <>
    <Sidebar />
      <div className={styles.content}>
        <div id={styles.title}>
          <h2>결과 페이지</h2>
        </div>
        <div className={`${styles.graphContainer} ${styles.row1}`}>
          <Header>분석 결과</Header>
          <div className={styles.left}>
            <ResultBarGender />
            <Result_Bar_Age />
            <Result_Bar_Crowd />
          </div>
          <div className={styles.right}>
            <div className={styles.shiftDown}>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForthPage;