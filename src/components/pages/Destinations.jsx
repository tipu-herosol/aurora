import React from "react";
// import Cover from "../common/Cover";
import DestinationsAll from "./section/DestinationsAll";

function Destinations() {
	const destination = {
		cover: {
			sec_bg: "/images/africa-1170004_1920.jpg",
			heading: "Destinations",
		},
		areas: {
			heading: "Our",
			heading_ex: "Destinations",
			para: "Discover 1,012 camps, lodges & hotels in 12 amazing countries. Explore where we can take you in Africa.",
			map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4855.859527591884!2d-79.3863699277487!3d43.641690188092966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2s!4v1634128919096!5m2!1sen!2s",
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
					src: "/images/giraffe-661648_1920.jpg",
					link: "/destinations/destination-detail",
				},
				{
					id: 4,
					title: "Classic Tanzania",
					subtitle: "Find captivating marine life beneath the waves ",
					src: "/images/antelopes-3816813_1280.jpg",
					link: "/destinations/destination-detail",
				},
				{
					id: 5,
					title: "South Africa",
					subtitle: "Hand-picked camps for an incredible family safari.",
					src: "/images/5dc9b04a673bd963aafaa38d_safari-drive-meregan-butteflies.jpg",
					link: "/destinations/destination-detail",
				},
				{
					id: 6,
					title: "Classic Namibia",
					subtitle: "Discover Namibia's coast and tropical desert.",
					src: "/images/amboseli-national-park-2063592_1920.jpg",
					link: "/destinations/destination-detail",
				},
				{
					id: 7,
					title: "Luxury Botswana",
					subtitle: "Diverse habitats, discreet hides and superb guiding.",
					src: "/images/white-lion-3980831_1920.jpg",
					link: "/destinations/destination-detail",
				},
				{
					id: 8,
					title: "Zimbabwe",
					subtitle: "Get an insight into Zimbabwe's cultures and history.",
					src: "/images/elephants-4864736_1920.jpg",
					link: "/destinations/destination-detail",
				},
				{
					id: 9,
					title: "Classic Tanzania",
					subtitle: "Find captivating marine life beneath the waves ",
					src: "/images/house_08.jpg",
					link: "/destinations/destination-detail",
				},
				{
					id: 10,
					title: "South Africa",
					subtitle: "Hand-picked camps for an incredible family safari.",
					src: "/images/intro_02.jpg",
					link: "/destinations/destination-detail",
				},
				{
					id: 11,
					title: "South Africa",
					subtitle: "Find captivating marine life beneath the waves ",
					src: "/images/meerkat-729400_1920.jpg",
					link: "/destinations/destination-detail",
				},
			],
		},
	};
	return (
		<>
			<DestinationsAll data={destination.areas} />
		</>
	);
}

export default Destinations;
