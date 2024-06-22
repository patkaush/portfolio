import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

 
import ProjectDetails from "./projectDetails";
import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    };
 
 
	return (
		<React.Fragment>
			<div className="project">
				<Link onClick={handleClickToOpen}>
					<div className="project-container">
						{/* <div className="project-logo">
							<img src={logo} alt="logo" />
						</div> */}
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
							
						</div>
					</div>
				</Link>
            <div className="homepage-projects">
                <ProjectDetails
                open = {open}
                setOpen = {setOpen}
                project = {props}
                />
            </div>

        </div>
		</React.Fragment>
	);
};

export default Project;
