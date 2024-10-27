import React from "react";
import Header from './../components/Header/header';
const Home = () => {
    return (
      <>
        <Header />
        <main className="section">
          <div className="container">
            <ul className="content-list">
              <li className="content-list__item">
                <h2 className="title-2">Frontend</h2>
                <p>
                  JavaScript, TypeScript, React.js, Redux, HTML, NPM,
                  BootStrap,CSS, SASS,Tailwind, RTK Query, Next.js, Vue.js
                </p>
              </li>
            </ul>
          </div>
        </main>
      </>
    );
}

export default Home;