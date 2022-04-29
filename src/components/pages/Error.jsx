import React from "react";
import Cover from "../common/Cover";

function Error() {
	const error = {
		cover: {
			sec_bg: "/images/africa-1170004_1920.jpg",
			heading: "404 page not found",
			btn: "Back to Home page",
			btn_link: "/",
		},
	};
	return (
		<>
			<Cover data={error.cover} btn={true} />
		</>
	);
}

export default Error;
