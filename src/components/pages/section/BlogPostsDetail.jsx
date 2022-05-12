import React from "react";
import Image from "../../common/Image";

function BlogPosts({ data }) {
	const { detail } = data;
	return (
		<>
			<section id="blog">
				<div className="contain">
					<div className="post_blk_detail">
						<Image src={detail.src} alt="" />
						<div className="br"></div>
						<div className="txt">
							<div className="date">{detail.date}</div>
							<h2 className="fancy">{detail.title}</h2>
							<p>{detail.para_01}</p>
							<p>{detail.para_02}</p>
							<p>{detail.para_03}</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default BlogPosts;
