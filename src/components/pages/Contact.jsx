import React from "react";
import Cover from "../common/Cover";
import ContactUs from "./section/ContactUs";

function Contact() {
	const contact = {
		cover: {
			sec_bg: "/images/elephants-4864736_1920.jpg",
			heading: "Contact us",
			para: "Consulting is a corporate membership organization of management consulting firms which aims to support and strengthen its individual partners market position.",
		},
		contact: {
			heading_01: "Don't Hesitate to",
			heading_ex_01: "Contact us",
			info: [
				{
					id: 1,
					icon: "/images/icon-map-marker.svg",
					title: "Visit the office",
					text: "22, Hoxton, Wenlock Road, London, N1 7TA",
				},
				{
					id: 2,
					icon: "/images/icon-phone.svg",
					title: "Phone Number",
					text: "559-579-8833",
				},
				{
					id: 3,
					icon: "/images/icon-envelope-fill.svg",
					title: "Email Address",
					text: "info@aurora.co.uk",
				},
			],
			form: {
				heading: "Let’s start the conversation",
				btn: "Submit",
			},
		},
	};
	return (
		<>
			<Cover data={contact.cover} />
			<ContactUs data={contact.contact} />
		</>
	);
}

export default Contact;
