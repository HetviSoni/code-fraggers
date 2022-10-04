import './container.css';
import Subcontainer1 from './sub-container1';
import Subcontainer2 from './sub-container2';
const Container=props=>{
    return (
        <section className="container">
            <h1 className="container-heading" >Solve DSA Questions while being incetivized for your work</h1>
            <div className="container2">
                <Subcontainer1/>
                <Subcontainer2/>
            </div>
           
        </section>
    );
}
export default Container;