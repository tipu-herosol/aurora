import React from "react";
import Cover from "../common/Cover";
import BlogPostsDetail from "./section/BlogPostsDetail";

function Blog() {
	const blog_detail = {
		cover: {
			sec_bg: "/images/africa-4278135_1920.jpg",
			heading: "Blog Detail",
		},
		posts: {
			detail: {
				src: "/images/elephants-4864736_1920.jpg",
				title: "Best places to go when is winter",
				date: "28 February, 2022",
				para_01: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veritatis culpa voluptates, vero quis consectetur ratione! Cumque quidem, cum rerum, molestias eaque odio animi illum, nemo maiores eum eligendi ullam?",
				para_02: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati deserunt eligendi nulla nihil consequatur reprehenderit nisi, earum soluta quidem incidunt possimus libero accusamus quis minus, laudantium porro fugiat consequuntur temporibus!",
				para_03: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatem! Fuga et at nulla corrupti, esse consectetur mollitia ut odit consequuntur a saepe odio repellendus maxime voluptas voluptate nihil molestiae.",
			},
			article: [
				{
					id: 1,
					title: "Best places to go when is winter",
					date: "28 February, 2022",
					src: "/images/antelopes-3816813_1280.jpg",
					link: "/blog/blog-detail",
				},
				{
					id: 2,
					title: "Do you have to hike to Diablo lake?",
					date: "07 July, 2021",
					src: "/images/amboseli-national-park-2063592_1920.jpg",
					link: "/blog/blog-detail",
				},
				{
					id: 3,
					title: "Best places to go when is winter",
					date: "19 May 2020",
					src: "/images/meerkat-729400_1920.jpg",
					link: "/blog/blog-detail",
				},
				{
					id: 4,
					title: "Do you have to hike to Diablo lake?",
					date: "17 January 2020",
					src: "/images/giraffe-661648_1920.jpg",
					link: "/blog/blog-detail",
				},
				{
					id: 5,
					title: "Best places to go when is winter",
					date: "30 October 2020",
					src: "/images/white-lion-3980831_1920.jpg",
					link: "/blog/blog-detail",
				},
			],
		},
	};
	return (
		<>
			<Cover data={blog_detail.cover} />
			<BlogPostsDetail data={blog_detail.posts} />
		</>
	);
}

export default Blog;
