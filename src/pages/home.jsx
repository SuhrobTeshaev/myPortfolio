import React from "react";
import Header from './../components/Header/header';
const Home = () => {
    return (
        <>
            <Header/>
            <main className="section">
                <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, TypeScript,  React, Redux, HTML, CSS, NPM, BootStrap,  Yarn, Fetch , Axios</p>
                        </li>

                    </ul>

                </div>
            </main>
        </>
    );
}

export default Home;