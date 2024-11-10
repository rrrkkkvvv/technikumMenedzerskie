import Card from "../../components/Card";
import { titles, facultiesInfo, texts } from "../../constants/stringConstants";
import shortid from "shortid";
import Title from "../../ui/Title";
import styles from "./styles/MainPage.module.scss";

const MainPage = () => {
  return (
    <main className="mainWrapper">
      <hr />
      <section className={styles.mainWrapper__greetingSection}>
        <Title className={styles.greetingSection__title}>
          {titles.greetingTitle}
        </Title>
        <div className={styles.greetingSection__wingsContainer}>
          {/* greetingSection__leftWing is container for bg image of wing */}
          <div className={styles.greetingSection__leftWing}></div>
          {/* greetingSection__rightWing is container for bg image of wing */}
          <div className={styles.greetingSection__rightWing}></div>
        </div>
        <div className={styles.greetingSection__greetingTextWrapper}>
          {texts.greetingText}
        </div>
      </section>

      <hr />
      <section className="mainWrapper__facultiesSection">
        {facultiesInfo.map((facult) => (
          <Card key={shortid.generate()} facultInfo={facult} />
        ))}
      </section>
      <hr />

      <section className="mainWrapper__carousels">
        <Title className="carousels__practicesTitle">
          {titles.practicesImagesTitle}
        </Title>

        <div className="carousels__practicesCarouselWrapper">
          {/* PRACTICIES carousel */}
        </div>
        <Title className="carousels__sponsoresTitle">
          {titles.practiciesPlacesTitle}
        </Title>
        <div className="carousels__practiciesPlacesCarouselWrapper">
          {/* SPONSORES carousel */}
        </div>
      </section>
      <hr />
    </main>
  );
};

export default MainPage;
