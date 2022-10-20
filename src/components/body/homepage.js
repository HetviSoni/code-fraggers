import Boy from "./boy";
import Container from "./container";
import '../../styles/homepage.css';
import Header from "../header/header";
import { Fragment } from "react";

const HomePage = (props) => {
    return (
        <section>
            <Header />
            <div className="home">
                <Boy classname="img" fade={true} />
                <Container className="home--content" />
            </div>
        </section>
    )
}
export default HomePage;