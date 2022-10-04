import Boy from "./boy";
import Container from "./container";
import './homepage.css';
const HomePage=props=>{
    return (
        <div className="home">
            <Boy classname="img"/>
            <Container/>
        </div>
    )
}
export default HomePage;