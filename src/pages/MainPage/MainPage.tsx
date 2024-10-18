import Card from "../../components/Card";
import { titles, facultiesInfo } from "../../constants/stringConstants";
import Title from "../../ui/Title";

const MainPage = () => {
  return (
    <main className="mainWrapper">
      <section className="mainWrapper__greetingSection">
        <Title className="greetingSection__title">{titles.greetingTitle}</Title>

        <div className="greetingSection__greetingTextWrapper">
          Lorem <span>ipsum dolor, sit</span> amet consectetur adipisicing elit.{" "}
          <span>Excepturi voluptatibus</span> quo obcaecati! Lorem ipsum dolor
          sit amet<span> consectetur adipisicing</span> elit.
          <span> Architecto</span> assumenda quis dicta dignissimos ullam!
        </div>
      </section>

      <section className="mainWrapper__facultiesSection">
        {facultiesInfo.map((facult) => (
          <Card key={facult.id} facultInfo={facult} />
        ))}
      </section>

      <section className="mainWrapper__facultiesSection">
        <Title className="facultiesSection__title">
          {titles.facultiesSection}
        </Title>
      </section>
    </main>
  );
};

export default MainPage;
