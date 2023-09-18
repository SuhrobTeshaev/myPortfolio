import { NavLink } from 'react-router-dom';
import './style.css';

const Project = ({title,img,github,index}) => {
    return ( 
        <NavLink to ={`/project1/${index}`}>
        <li className="project">
                    
                        <img 
                        src={img} 
                        alt={title} 
                        className="project__img"/>
                        <h3 className="project__title">{title}</h3>
                        <h2>{github}</h2>
                   
                </li>
                </NavLink>
     );
}
 
export default Project;