import boyImage from '../../assets/Frameboy.png';
import './boy.css';

const Boy=props=>{
    return( 
    <section>
        <img src={boyImage} alt='Boy Image' className='boyImg' ></img>
    </section>
    )
}
export default Boy;