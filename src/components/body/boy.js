import boyImage from '../../assets/Frameboy.png';
import { Fade } from "react-awesome-reveal";

import '../../styles/boy.css';

const Boy=props=>{

    if(!props.fade ){
        console.log('hello')
        return( 

        
                <Fade>

                <section className='boy'>
                    <img src={boyImage} alt='Boy' className='boyImg' ></img>
                </section>
                </Fade>
      
        )
    }
    else{
        return( 

        
            <Fade direction='left'> 
                <section className='boy'>
                    <img src={boyImage} alt='Boy' className='boyImg' ></img>
                </section>
            </Fade>
        )

    }
   
}
export default Boy;