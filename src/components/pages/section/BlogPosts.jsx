import React from "react";
import BlogBlock from "../../common/BlogBlock";

function BlogPosts({ data }) {
	return (
		<>
			<section id="blog">
				<div className="contain">
					<div className="flex_row sub_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<BlogBlock {...val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default BlogPosts;
