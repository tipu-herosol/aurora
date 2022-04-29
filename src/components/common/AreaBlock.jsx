import React from "react";
import { Link } from "react-router-dom";

function AreaBlock({ src, title, subtitle, link }) {
	return (
		<>
			<div className="area_blk">
				<img src={src} alt="" />
				<div className="txt">
					<h4 className="fancy">{title}</h4>
					<p>{subtitle}</p>
				</div>
				<Link to={link}></Link>
			</div>
		</>
	);
}

export default AreaBlock;
