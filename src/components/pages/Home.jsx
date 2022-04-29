import React from "react";
import Banner from "./section/Banner";
import Areas from "./section/Areas";
// import Assets from "./section/Assets";
import Works from "./section/Works";
import Guide from "./section/Guide";
import Posts from "./section/Posts";

function Home() {
	const home = {
		banner: {
			heading: "Dream. Discover. Your Way.",
			para: "There are many variations",
			btn_01: "Our Destination",
			btn_link_01: "/destinations",
			btn_02: "Inspire me",
			btn_link_02: "/inspiration",
			video: {
				src: "/videos/Giraffes - 81466.mp4",
			},
		},
		areas: {
			sec_bg: "/images/pattern.jpg",
			heading: "Our",
			heading_ex: "Destinations",
			para: "Discover 1,012 camps, lodges & hotels in 12 amazing countries. Explore where we can take you in Africa.",
			block: [
				{
					id: 1,
					title: "Classic Namibia",
					subtitle: "Discover Namibia's coast and tropical desert.",
					src: "/images/5dc2a049acd63f66ce0803e6_safari-drive-vehicle-camping.jpg",
					link: "/destinations/destination-detail",
				},
				{
					id: 2,
					title: "Luxury Botswana",
					subtitle: "Diverse habitats, discreet hides and superb guiding.",
					src: "/images/cheetah-737417_1920.jpg",
					link: "/destinations/destination-detail",
				},
				{
					id: 3,
					title: "Zimbabwe",
					subtitle: "Get an insight into Zimbabwe's cultures and history.",
					src: "/images/antelope-4683340_1920.jpg",
					link: "/destinations/destination-detail",
				},
				{
					id: 4,
					title: "Classic Tanzania",
					subtitle: "Find captivating marine life beneath the waves ",
					src: "/images/meerkat-729400_1920.jpg",
					link: "/destinations/destination-detail",
				},
				{
					id: 5,
					title: "South Africa",
					subtitle: "Hand-picked camps for an incredible family safari.",
					src: "/images/house_10.jpg",
					link: "/destinations/destination-detail",
				},
			],
		},
		itinerary: {
			heading: "Ready made or",
			heading_ex: "build your own",
			para: "All our itineraries are tailor made, but here are some of our favourite routes and camp combinations.",
			btn: "View all Destinations",
			btn_link: "/destinations",
			block: [
				{
					id: 1,
					title: "Classic Namibia",
					badge: "Namibia",
					price: "£ 2367",
					duration: "14 Nights",
					src: "/images/antelopes-3816813_1280.jpg",
					link: "/destinations/destination-detail",
				},
				{
					id: 2,
					title: "Luxury Namibia",
					badge: "Namibia",
					price: "£ 7899",
					duration: "18 Nights",
					src: "/images/giraffe-661648_1920.jpg",
					link: "/destinations/destination-detail",
				},
				{
					id: 3,
					title: "Classic Botswana",
					badge: "Botswana",
					price: "£ 3383",
					duration: "14 Nights",
					src: "/images/house-home-residence-interior.jpg",
					link: "/destinations/destination-detail",
				},
			],
		},
		assets: {
			sec_bg: "/images/africa-1170004_1920.jpg",
			heading: "Travel early and travel often. Live abroad, if you can.",
			para: "A video is worth 1.8 million words.",
			btn_img_src: "/images/play_icon.svg",
		},
		works: {
			heading: "Let us help you customise",
			heading_ex: "your trip",
			para: "Like all of our holidays on this site, this is just an idea. All of our trips are tailor-made, so we'll always adapt them to suit you.",
			btn: "Our Services",
			btn_link: "/privacy-policy",
			block: [
				{
					id: 1,
					title: "Talk to an Expert",
					text: "Browse this Expert Africa website, then call us. We’ll match you with the Specialist in our team who is best suited to help you. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officia, dolor nulla qui veniam id odio, omnis repudiandae quaerat culpa tenetur eaque dignissimos veritatis eveniet quas. Sapiente velit magni illo.",
				},
				{
					id: 2,
					title: "Set up your itinerary",
					text: "Based on our experience and your ideas, your specialist will create a detailed, costed itinerary. We’ll refine it together, until we have a trip that you’re perfectly happy with. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officia, dolor nulla qui veniam id odio, omnis repudiandae quaerat culpa tenetur eaque dignissimos veritatis eveniet quas. Sapiente velit magni illo.",
				},
				{
					id: 3,
					title: "Prepare for your trip",
					text: "The same Specialist will make the seamless arrangements for your trip, send you detailed travel documents, and be available to answer any questions before you depart. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officia, dolor nulla qui veniam id odio, omnis repudiandae quaerat culpa tenetur eaque dignissimos veritatis eveniet quas. Sapiente velit magni illo.",
				},
				{
					id: 4,
					title: "Travel with peace of mind",
					text: "After you set off, you’ll be cared for by our partners in Africa, most of whom have worked with Expert Africa for decades. And if you ever need us urgently, we’re available 24/7. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officia, dolor nulla qui veniam id odio, omnis repudiandae quaerat culpa tenetur eaque dignissimos veritatis eveniet quas. Sapiente velit magni illo.",
				},
			],
		},
		guide: {
			sec_bg: "/images/pattern.jpg",
			heading: {
				first: "The",
				italic: "ultimate guide to",
				bold: "Munroe Island",
				last: "in India.",
			},
			heading_02: "A short guide to know about Munroe Island",
			para: "This post is about Munroe Island Kerala and my wonderful homestay experience with Vijeesh and his family that showed me the most beautiful place to see Kerala’s backwaters. Travelling always gives you welcoming surprises, sometimes in the most unexpected remote places in this world. While looking for ways to explore the backwaters of Kerala I stumbled upon a place called Munroturuttu, or in English: “Munroe Island”.",
			img_src: "/images/8.jpg",
			btn_01: "Travel Tips",
			btn_link_01: "/privacy-policy",
			btn_02: "Blog Posts",
			btn_link_02: "/blog",
		},
		posts: {
			heading: "Latest news and articles about travel and adventure",
			btn: "View all posts",
			btn_link: "/blog",
			block: [
				{
					id: 1,
					title: "Best places to go when is winter",
					date: "28 February, 2022",
					src: "/images/elephants-4864736_1920.jpg",
					link: "blog/blog-detail",
				},
				{
					id: 2,
					title: "Do you have to hike to Diablo lake?",
					date: "07 July, 2021",
					src: "/images/safari-382383_1280.jpg",
					link: "blog/blog-detail",
				},
			],
		},
	};
	return (
		<>
			<Banner data={home.banner} />
			<Areas data={home.areas} />
			{/* <Assets data={home.assets} /> */}
			<Works data={home.works} />
			<Guide data={home.guide} />
			<Posts data={home.posts} />
		</>
	);
}

export default Home;
