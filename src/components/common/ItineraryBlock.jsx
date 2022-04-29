import React from "react";
import { Link } from "react-router-dom";

function ItineraryBlock({ title, badge, price, duration, src, link }) {
	return (
		<>
			<div className="itinerary_blk">
				<img src={src} alt="" />
				<span className="badge">{badge}</span>
				<div className="txt">
					<h3 className="fancy">{title}</h3>
					<div className="btm_blk">
						<span className="duration">{duration}</span>
						<span className="price">{price}</span>
					</div>
				</div>
				<Link to={link}></Link>
			</div>
		</>
	);
}

export default ItineraryBlock;
