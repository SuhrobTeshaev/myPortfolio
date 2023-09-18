import { useParams } from 'react-router-dom';

import BtnGitHub from '../components/gitHub/BtnGitHub';
import { projects } from '../components/helpers/projectList';

const Project1 = () => {
    const   {id} = useParams();
    const project = projects[id];
      
    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>

                    <p>{id}</p>

                <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>{project.skils}</p>
                </div>
                {project.gitHubLink && <BtnGitHub link='https://github.com/SuhrobTeshaev'/>}
               

            </div>
        </div>
    </main>
     );
}
 
export default Project1;