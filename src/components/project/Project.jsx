import { NavLink } from 'react-router-dom';
import './style.css';

const Project = ({title,img,github,id}) => {
    return ( 
        <NavLink to ={`/project1/${id}`}>
        <li className="project">
                    
                        <img 
                        src={img} 
                        alt={title} 
                        className="project__img"/>
                        <h3 className="project__title">{title}</h3>
                        {/* <h2>{github}</h2> */}
                   
                </li>
                </NavLink>
     );
}
 
export default Project;