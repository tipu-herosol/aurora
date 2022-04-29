import React from "react";
import Cover from "../common/Cover";
import EnquireNow from "./section/EnquireNow";

function Enquire() {
	const enquire = {
		cover: {
			sec_bg: "/images/panorama-2675966_1920.jpg",
			heading: "Enquire Now",
		},
		contact: {
			form: {
				heading: "Enquire Now",
				btn: "Submit Enquiry",
			},
		},
	};
	return (
		<>
			<Cover data={enquire.cover} />
			<EnquireNow data={enquire.contact} />
		</>
	);
}

export default Enquire;
