import React from "react";
// import Cover from "../common/Cover";
import Since from "./section/Since";
// import Affiliate from "./section/Affiliate";
// import Strip from "./section/Strip";
// import Assets from "./section/Assets";

function About() {
	const about = {
		cover: {
			sec_bg: "/images/africa-1170004_1920.jpg",
			heading: "Get to know us",
			para: "Consulting is a corporate membership organization of management consulting firms which aims to support and strengthen its individual partners market position.",
			btn: "Get a Call Back",
			btn_link: "/contact",
		},
		since: {
			heading: "About",
			heading_ex: "me",
			para: "Lorem ipsum dolor, sit amet maiores autem magnam amet at nulla itaque illo amet consectetur adipisicing elit. Velit ullam ipsa non dolore placeat molestiae vel dicta ut, temporibus in dolorem provident id recusandae numquam, distinctio est deserunt. Reprehenderit, blanditiis.",
			btn: "Contact us",
			btn_link: "/contact",
			image: [
				{
					id: 1,
					src: "/images/5.jpg",
				},
				{
					id: 2,
					src: "/images/5dc2a049acd63f66ce0803e6_safari-drive-vehicle-camping.jpg",
				},
			],
		},
		affiliate: {
			sec_bg: "/images/pattern.jpg",
			heading: "How we",
			heading_ex: "support you",
			block: [
				{
					id: 1,
					icon: "/images/icon-roller.svg",
					title: "Host protection programs",
					para: "To support you in the rare event of an incident, most Airbnb bookings include property damage protection and liability insurance of up to $1M USD.",
				},
				{
					id: 2,
					icon: "/images/icon-stats-up.svg",
					title: "Covid-19 safety guidelines",
					para: "To help protect the health of our community, we've partnered with experts to create safety practices for everyone, plus a cleaning process for hosts.",
				},
				{
					id: 3,
					icon: "/images/icon-blackboard.svg",
					title: "High guest standards",
					para: "To give Hosts peace of mind, we offer guest identification and let you check out reviews of guests before they book. Our new Guest Standards Policy sets higher expectations for behavior.",
				},
			],
		},
		assets: {
			sec_bg: "/images/africa-1170004_1920.jpg",
			heading: "Travel early and travel often. Live abroad, if you can.",
			para: "A video is worth 1.8 million words.",
			btn_img_src: "/images/play_icon.svg",
		},
		strip: {
			heading: "Our original concept was the “self-drive safari” - a way to discover Africa for oneself.",
			para: "Aurora was founded in 1993 by Charles and Meregan Norwood. Charles; a highly experienced expedition leader across vast swathes of Africa and Meregan, a race car driver and born adventurer. In 1993 they both flew to Africa to pick up a Land Rover that belonged to Charles and the birth of Aurora soon followed.",
			src: "/images/safari-382383_1280.jpg",
		},
	};
	return (
		<>
			{/* <Cover data={about.cover} btn={true} /> */}
			<Since data={about.since} />
			{/* <Affiliate data={about.affiliate} /> */}
			{/* <Assets data={about.assets} /> */}
			{/* <Strip data={about.strip} /> */}
		</>
	);
}

export default About;
