import React from "react";
import Cover from "../common/Cover";
import DisclaimerBlk from "./section/DisclaimerBlk";

function Disclaimer() {
	const disclaimer = {
		cover: {
			sec_bg: "/images/antelopes-3816813_1280.jpg",
			heading: "Disclaimer",
		},
	};
	return (
		<>
			<Cover data={disclaimer.cover} />
			<DisclaimerBlk />
		</>
	);
}

export default Disclaimer;
