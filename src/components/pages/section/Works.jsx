import React from "react";
import { Link } from "react-router-dom";
import OwlWorks from "../../common/OwlWorks";

function Works({ data }) {
	return (
		<>
			<section id="works" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain text-center">
					<div className="content">
						<h3 className="fancy">
							{data.heading} <strong>{data.heading_ex}</strong>
						</h3>
						<p>{data.para}</p>
					</div>
					<OwlWorks owlData={data} />
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
