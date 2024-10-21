import Card from "../../components/Card";
import { titles, facultiesInfo } from "../../constants/stringConstants";
import shortid from "shortid";
import Title from "../../ui/Title";
import styles from "./styles/MainPage.module.scss";

const MainPage = () => {
  return (
    <main className="mainWrapper">
      <hr />
      <section className="mainWrapper__greetingSection">
        <Title className="greetingSection__title">{titles.greetingTitle}</Title>

        <div className="greetingSection__greetingTextWrapper">
          Lorem <span>ipsum dolor, sit</span> amet consectetur adipisicing elit.{" "}
          <span>Excepturi voluptatibus</span> quo obcaecati! Lorem ipsum dolor
          sit amet<span> consectetur adipisicing</span> elit.
          <span> Architecto</span> assumenda quis dicta dignissimos ullam!
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
