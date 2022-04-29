import React from "react";
import Cover from "../common/Cover";
import Accordion from "./section/Accordion";

function Faq() {
	const faq = {
		cover: {
			sec_bg: "/images/hero_banner.jpg",
			heading: "FAQ’s",
		},
		faqs: {
			heading_01: "General questions",
			heading_02: "Most asked questions",
			block_01: [
				{
					id: 1,
					qst: "Obcaecati laborum architecto neque possimus?",
					ans: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
				},
				{
					id: 2,
					qst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
					ans: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
				},
				{
					id: 3,
					qst: "Deleniti illum ex numquam eos laudantium?",
					ans: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
				},
				{
					id: 4,
					qst: "Molestias quidem, maiores reiciendis sint?",
					ans: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
				},
				{
					id: 5,
					qst: "Iusto harum temporibus vel, rem numquam quia?",
					ans: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
				},
			],
			block_02: [
				{
					id: 1,
					qst: "Obcaecati laborum architecto neque possimus?",
					ans: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
				},
				{
					id: 2,
					qst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
					ans: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
				},
				{
					id: 3,
					qst: "Deleniti illum ex numquam eos laudantium?",
					ans: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
				},
				{
					id: 4,
					qst: "Molestias quidem, maiores reiciendis sint?",
					ans: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
				},
				{
					id: 5,
					qst: "Iusto harum temporibus vel, rem numquam quia?",
					ans: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
				},
			],
		},
	};
	return (
		<>
			<Cover data={faq.cover} />
			<Accordion data={faq.faqs} />
		</>
	);
}

export default Faq;
