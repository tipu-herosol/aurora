import React from "react";
import { Link } from "react-router-dom";

function Guide({ data }) {
	return (
		<>
			<section id="guide" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain">
					<div className="flex_row main_row">
						<div className="col col1">
							<div className="in_col">
								<figure>
									<img src={data.img_src} alt="" />
								</figure>
								<div className="title text-center">
									<h2 className="fancy">{data.heading_02}</h2>
								</div>
							</div>
						</div>
						<div className="col col2">
							<div className="txt">
								<h3 className="fancy">
									{data.heading.first} <em>{data.heading.italic}</em> <strong>{data.heading.bold}</strong> {data.heading.last}
								</h3>
								<p>{data.para}</p>
								<div className="btn_blk">
									<Link to={data.btn_link_01} className="site_btn lg long round">
										{data.btn_01}
									</Link>
									<Link to={data.btn_link_02} className="site_btn lg long round blank stroke">
										{data.btn_02}
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Guide;
