import React from "react";
// import { Link } from "react-router-dom";
import Heading from "../../common/Heading";

function Banner({ data }) {
	// const { para, heading, btn_01, btn_02, btn_link_01, btn_link_02, video } = data;
	const { para, heading, video } = data;
	return (
		<>
			<section id="banner">
				<div className="contain">
					<div className="flex_blk">
						<div className="content text-center">
							{/* <p>{para}</p> */}
							<Heading className="fancy" size={1} text={heading} />
							{/* <div className="btn_blk">
								<Link to={btn_link_01} className="site_btn lg shade block_sm">
									{btn_01}
								</Link>
								<Link to={btn_link_02} className="site_btn lg simple block_sm">
									{btn_02}
								</Link>
							</div> */}
						</div>
					</div>
				</div>
				<video autoPlay loop muted playsInline>
					<source src={video.src} type="video/mp4" />
				</video>
			</section>
		</>
	);
}

export default Banner;
