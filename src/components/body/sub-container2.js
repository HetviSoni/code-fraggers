import '../../styles/subcontainer.css';
import Button from './button';

const Subcontainer2= props=>{
    const buttonText='Get Fragging';
    return (
        <div className='subcontainer'>
            <h3 className="heading">For Fraggers</h3>
            <p >
                10k+ Leetcode fraggers get <br/>
                incetivized for problem solving <br/>
                skills
            </p>
            <Button text={buttonText}/>
        </div>
    )
}
export default Subcontainer2;