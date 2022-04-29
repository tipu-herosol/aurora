import React from "react";
import { Link } from "react-router-dom";

function EnquireBlk(props) {
	const { Data } = props;

	return (
		<>
			<section id="enquire_blk">
				<div className="contain">
					<div className="inside">
						<div className="txt text-center">
							<h2 className="fancy">{Data.title}</h2>
							<p>{Data.para}</p>
							<div className="btn_blk">
								<Link to={Data.btn_link} className="site_btn lg round">
									{Data.btn}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default EnquireBlk;
