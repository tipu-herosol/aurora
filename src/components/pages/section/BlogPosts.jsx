import React from "react";
import { Link } from "react-router-dom";
import BlogBlock from "../../common/BlogBlock";

function BlogPosts({ data }) {
	return (
		<>
			<section id="blog">
				<div className="contain">
					<div className="flex_row main_row">
						<div className="col col1">
							<div className="in_col">
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
						</div>
						<div className="col col2">
							<div className="in_col article_wrap">
								{data.article.map((val) => {
									return (
										<div className="article" key={val.id}>
											<div className="ico fill">
												<Link to={val.link}>
													<img src={val.src} alt="" />
												</Link>
											</div>
											<div className="txt">
												<h5 className="fancy">
													<Link to={val.link}>{val.title}</Link>
												</h5>
												<div className="date">{val.date}</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default BlogPosts;
