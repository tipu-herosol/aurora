import React from "react";
import { Link } from "react-router-dom";
import Image from "../common/Image";

function BlogBlock({ src, title, date, link }) {
	return (
		<>
			<div className="post_blk">
				<Image src={src} alt="" />
				<div className="txt">
					<h4 className="fancy">{title}</h4>
					<div className="date">{date}</div>
				</div>
				<Link to={link}></Link>
			</div>
		</>
	);
}

export default BlogBlock;
