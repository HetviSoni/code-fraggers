import Boy from "./boy";
import Container from "./container";
import '../../styles/homepage.css';

const HomePage= (props) =>{
    return (
        <div className="home">
            <Boy classname="img"/>
            <Container className="home--content"/>
        </div>
    )
}
export default HomePage;