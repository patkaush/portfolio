import React from "react";

function getOpentextDetails() {
	return {
		date_of_joining: "Sep 21 2021",
		data_of_ending: "Aug 6 2023",
		title: "Software Engineer",
		description:
			"Full stack engineer",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}


const workProfiles = [getOpentextDetails];

export default workProfiles;
