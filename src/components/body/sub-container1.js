import './subcontainer.css';
import Button from './button';
const Subcontainer1= props=>{
    const buttonText='Start Recruiting';
    return (
        <div>
            <h3 className="heading">For Companies</h3>
            <p>
                Get the best fragger for <br/>
                your company with minimal <br/>
                effort
            </p>    
            <Button text={buttonText}/>
        </div>
    )
}
export default Subcontainer1;
