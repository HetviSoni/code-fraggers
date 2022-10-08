import './subcontainer.css';
import Button from './button';
const Subcontainer1 = props => {
    const buttonText = 'Start Recruiting';
    return (
        <div>
            <h3 className="heading">For Companies</h3>
            <p>
                Get the best fragger for <br />
                your company with minimal <br />
                effort
            </p>
            <Button color="rgba(67, 127, 252, 1)" text={buttonText} />
        </div>
    )
}
export default Subcontainer1;
