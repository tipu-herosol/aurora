import React from "react";
import Works from "./section/Works";

function Rates() {
	const rates = {
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
					text: "Browse this Expert Africa website, then call us. We’ll match you with the Specialist in our team who is best suited to help you. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officia, dolor nulla qui veniam id odio, omnis repudiandae quaerat culpa tenetur eaque dignissimos veritatis eveniet quas. Sapiente velit magni illo.",
					btn: "View More",
				},
				{
					id: 2,
					src: "/images/white-lion-3980831_1920.jpg",
					alt: "Service Photo",
					title: "Set up your itinerary",
					link: "/service-detail",
					text: "Based on our experience and your ideas, your specialist will create a detailed, costed itinerary. We’ll refine it together, until we have a trip that you’re perfectly happy with. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officia, dolor nulla qui veniam id odio, omnis repudiandae quaerat culpa tenetur eaque dignissimos veritatis eveniet quas. Sapiente velit magni illo.",
					btn: "View More",
				},
				{
					id: 3,
					src: "/images/book_04.jpg",
					alt: "Service Photo",
					title: "Prepare for your trip",
					link: "/service-detail",
					text: "The same Specialist will make the seamless arrangements for your trip, send you detailed travel documents, and be available to answer any questions before you depart. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officia, dolor nulla qui veniam id odio, omnis repudiandae quaerat culpa tenetur eaque dignissimos veritatis eveniet quas. Sapiente velit magni illo.",
					btn: "View More",
				},
				{
					id: 4,
					src: "/images/5d9e42a98c9b8d0cd28453b2_Eningu-Clayhouse-Lodge.jpg",
					alt: "Service Photo",
					title: "Travel with peace of mind",
					link: "/service-detail",
					text: "After you set off, you’ll be cared for by our partners in Africa, most of whom have worked with Expert Africa for decades. And if you ever need us urgently, we’re available 24/7. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officia, dolor nulla qui veniam id odio, omnis repudiandae quaerat culpa tenetur eaque dignissimos veritatis eveniet quas. Sapiente velit magni illo.",
					btn: "View More",
				},
				{
					id: 5,
					src: "/images/meerkat-729400_1920.jpg",
					alt: "Service Photo",
					title: "Set up your itinerary",
					link: "/service-detail",
					text: "Based on our experience and your ideas, your specialist will create a detailed, costed itinerary. We’ll refine it together, until we have a trip that you’re perfectly happy with. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officia, dolor nulla qui veniam id odio, omnis repudiandae quaerat culpa tenetur eaque dignissimos veritatis eveniet quas. Sapiente velit magni illo.",
					btn: "View More",
				},
			],
		},
	};
	return (
		<>
			<Works data={rates.works} />
		</>
	);
}

export default Rates;
