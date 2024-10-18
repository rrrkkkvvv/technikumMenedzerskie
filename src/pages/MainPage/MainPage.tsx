import React from "react";

interface MainPageProps {
  children: React.ReactNode;
}
const MainPage = ({ children }: MainPageProps) => {
  return (
    <>
      {/* Wrapper of main page */}
      <div className="">
        {/* header of main page */}
        <header>
          {/* wrapper of logo */}
          <div className=""></div>

          {/* wrapper of links/buttons */}
          <div className="">{/* wrapper of links/buttons */}</div>
        </header>

        <main></main>

        <footer></footer>
        {children}
      </div>
    </>
  );
};

export default MainPage;
