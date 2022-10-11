import "../../styles/subcontainer.css";
import Button from "./button";
const Subcontainer1 = (props) => {
	const buttonText = "Start Recruiting";
	return (
		<div className="subcontainer">
			<h3 className="heading">For Companies</h3>
			<p>
				Get the best fragger for your <br />
				company with minimal <br />
				effort
			</p>
			<Button text={buttonText} type="primary-btn" />
		</div>
	);
};
export default Subcontainer1;
