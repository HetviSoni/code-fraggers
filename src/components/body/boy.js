import boyImage from "../../assets/Frameboy.png";
import "../../styles/boy.css";

const Boy = (props) => {
	return (
		<section className="boy">
			<img src={boyImage} alt="Boy" className="boyImg"></img>
		</section>
	);
};
export default Boy;
