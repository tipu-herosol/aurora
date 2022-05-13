import React from "react";
import Works from "./section/Works";
import Affiliate from "./section/Affiliate";

function Services() {
	const services = {
		works: {
			sec_bg: "/images/elephants-4864736_1920.jpg",
			heading: "Let us help you customise",
			heading_ex: "your trip",
			para: "Like all of our holidays on this site, this is just an idea. All of our trips are tailor-made, so we'll always adapt them to suit you.",
			btn: "Our Services",
			btn_link: "/privacy-policy",
			block: [
				{
					id: 1,
					src: "/images/safari-382383_1280.jpg",
					alt: "Service Photo",
					title: "Talk to an Expert",
					link: "/service-detail",
					text: "Browse this Expert Africa website, then call us. We’ll match you with the Specialist in our team who is best suited to help you.",
					btn: "View More",
				},
				{
					id: 2,
					src: "/images/white-lion-3980831_1920.jpg",
					alt: "Service Photo",
					title: "Set up your itinerary",
					link: "/service-detail",
					text: "Based on our experience and your ideas, your specialist will create a detailed, costed itinerary. We’ll refine it together, until we have a trip that you’re perfectly happy with.",
					btn: "View More",
				},
				{
					id: 3,
					src: "/images/book_04.jpg",
					alt: "Service Photo",
					title: "Prepare for your trip",
					link: "/service-detail",
					text: "The same Specialist will make the seamless arrangements for your trip, send you detailed travel documents, and be available to answer any questions before you depart.",
					btn: "View More",
				},
				{
					id: 4,
					src: "/images/5d9e42a98c9b8d0cd28453b2_Eningu-Clayhouse-Lodge.jpg",
					alt: "Service Photo",
					title: "Travel with peace of mind",
					link: "/service-detail",
					text: "After you set off, you’ll be cared for by our partners in Africa, most of whom have worked with Expert Africa for decades. And if you ever need us urgently, we’re available 24/7.",
					btn: "View More",
				},
				{
					id: 5,
					src: "/images/meerkat-729400_1920.jpg",
					alt: "Service Photo",
					title: "Set up your itinerary",
					link: "/service-detail",
					text: "Based on our experience and your ideas, your specialist will create a detailed, costed itinerary. We’ll refine it together, until we have a trip that you’re perfectly happy with.",
					btn: "View More",
				},
			],
		},
		affiliate: {
			sec_bg: "/images/pattern.jpg",
			heading: "Our ",
			heading_ex: "Guarantees",
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
	};
	return (
		<>
			<Works data={services.works} />
			<Affiliate data={services.affiliate} />
		</>
	);
}

export default Services;
