import boyImage from "../../assets/Frameboy.png";
import { Fade } from "react-awesome-reveal";

import "../../styles/boy.css";

const Boy = (props) => {
	return (
		<Fade direction="left">
			<section>
				<img src={boyImage} alt="Boy" className="boyImg"></img>
			</section>
		</Fade>
	);
};
export default Boy;
