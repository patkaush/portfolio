import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import workProfiles from "../../data/works";
import WorkProfile from "./work_profile";

import "./styles/works.css";
import { Dialog } from "@material-ui/core";

const Works = () => {
	return (

			<div className="works-main-container">
				<div className="works-container">
					<div className="works-wrapper">
						{workProfiles.map((workProfile, index) => (
							<div
								className="works-article"
								key={(index + 1).toString()}
							>
								<WorkProfile
									key={(index + 1).toString()}
									date={workProfile().date_of_joining}
									title={workProfile().title}
									description={workProfile().description}
									// link={"/article/" + (index + 1)}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
	);
};

export default Works;
