import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/workProfile.css";

const WorkProfile = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="workProfile-main">
				<div className="workProfile-content">
					<div className="workProfile-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="workProfile-title">{title}</div>
					<div className="workProfile-description">
						{description}
					</div>
					<div className="workProfile-link">
						<Link to={link}>
							Read article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default WorkProfile;
