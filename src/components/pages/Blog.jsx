import React from "react";
import Cover from "../common/Cover";
import BlogPosts from "./section/BlogPosts";

function Blog() {
	const blog = {
		cover: {
			sec_bg: "/images/africa-4278135_1920.jpg",
			heading: "Blog Posts",
		},
		posts: {
			block: [
				{
					id: 1,
					title: "Best places to go when is winter",
					date: "28 February, 2022",
					src: "/images/elephants-4864736_1920.jpg",
					link: "/blog/blog-detail",
				},
				{
					id: 2,
					title: "Do you have to hike to Diablo lake?",
					date: "07 July, 2021",
					src: "/images/safari-382383_1280.jpg",
					link: "/blog/blog-detail",
				},
				{
					id: 3,
					title: "Best places to go when is winter",
					date: "19 May 2020",
					src: "/images/book_04.jpg",
					link: "/blog/blog-detail",
				},
				{
					id: 4,
					title: "Do you have to hike to Diablo lake?",
					date: "17 January 2020",
					src: "/images/antelope-4683340_1920.jpg",
					link: "/blog/blog-detail",
				},
				{
					id: 5,
					title: "Best places to go when is winter",
					date: "30 October 2020",
					src: "/images/intro_02.jpg",
					link: "/blog/blog-detail",
				},
				{
					id: 6,
					title: "Do you have to hike to Diablo lake?",
					date: "19 May 2020",
					src: "/images/white-lion-3980831_1920.jpg",
					link: "/blog/blog-detail",
				},
				{
					id: 7,
					title: "Best places to go when is winter",
					date: "17 January 2020",
					src: "/images/safari-382383_1280.jpg",
					link: "/blog/blog-detail",
				},
				{
					id: 8,
					title: "Do you have to hike to Diablo lake?",
					date: "30 October 2020",
					src: "/images/house_08.jpg",
					link: "/blog/blog-detail",
				},
				{
					id: 9,
					title: "Best places to go when is winter",
					date: "19 May 2020",
					src: "/images/house_06.jpg",
					link: "/blog/blog-detail",
				},
				{
					id: 10,
					title: "Do you have to hike to Diablo lake?",
					date: "07 July, 2021",
					src: "/images/hero_banner.jpg",
					link: "/blog/blog-detail",
				},
				{
					id: 11,
					title: "Do you have to hike to Diablo lake?",
					date: "07 July, 2021",
					src: "/images/cheetah-737417_1920.jpg",
					link: "/blog/blog-detail",
				},
			],
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
			<Cover data={blog.cover} />
			<BlogPosts data={blog.posts} />
		</>
	);
}

export default Blog;
