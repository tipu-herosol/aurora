import React from "react";
import Cover from "../common/Cover";
import Inspire from "./section/Inspire";
import Partners from "./section/Partners";

function Inspiration() {
	const inspire = {
		cover: {
			sec_bg: "/images/panorama-2675966_1920.jpg",
			heading: "Let us Inspire you",
			para: "Consulting is a corporate membership organization of management consulting firms which aims to support and strengthen its individual partners market position.",
		},
		content: {
			sec_bg: "/images/pattern.jpg",
			heading: "Our travellers’",
			heading_ex: "opinions",
		},
		partner: {
			heading: "We work with successful companies",
			para: "We’ll let you in on the whole story when we meet. For now, let us just assure you it works like a charm.",
		},
	};
	return (
		<>
			<Cover data={inspire.cover} />
			<Inspire data={inspire.content} />
			<Partners data={inspire.partner} />
		</>
	);
}

export default Inspiration;
