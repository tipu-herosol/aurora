import React from "react";
import { Link } from "react-router-dom";

function Works({ data }) {
	return (
		<>
			<section id="works">
				<div className="contain">
					<div className="content text-center">
						<h3 className="fancy">
							{data.heading} <strong>{data.heading_ex}</strong>
						</h3>
						<p>{data.para}</p>
					</div>
					<div className="flex_row main_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<div className="inner">
										<h5>{val.title}</h5>
										<p>{val.text}</p>
									</div>
								</div>
							);
						})}
					</div>
					<div className="btn_blk text-center mt-5">
						<Link to={data.btn_link} className="site_btn lg long round">
							{data.btn}
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export default Works;
