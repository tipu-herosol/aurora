import React from "react";
import ServiceDetailBlk from "./section/ServiceDetailBlk";

function ServiceDetail() {
	const services = {
		cover: {
			sec_bg: "/images/antelopes-3816813_1280.jpg",
			heading: "Terms & Conditions",
		},
		detail: {
			heading: "Service Detail",
		},
	};
	return (
		<>
			{/* <Cover data={services.cover} /> */}
			<ServiceDetailBlk data={services.detail} />
		</>
	);
}

export default ServiceDetail;
