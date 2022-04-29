import React from "react";
import BlogBlock from "../../common/BlogBlock";
import Button from "../../common/Button";

function Posts({ data }) {
	return (
		<>
			<section id="posts">
				<div className="contain">
					<div className="flex_row main_row">
						<div className="col col1">
							<div className="title text-right">
								<h1 className="fancy">{data.heading}</h1>
								<div className="btn_blk">
									<Button className="blank stroke round" text={data.btn} size="lg"></Button>
								</div>
							</div>
						</div>
						<div className="col col2">
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
					</div>
				</div>
			</section>
		</>
	);
}

export default Posts;
