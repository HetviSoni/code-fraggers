import boyImage from '../../assets/Frameboy.png';
import './boy.css';
import { Fade } from "react-awesome-reveal";


const Boy=props=>{
    return( 
        <Fade direction='left'> 
    <section>
        <img src={boyImage} alt='Boy Image' className='boyImg' ></img>
    </section>
    </Fade>
    )
}
export default Boy;