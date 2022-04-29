import React from "react";
import OwlCarousel from "react-owl-carousel";

function OwlTrip(props) {
	const { owl_trip } = props.owlData;
	return (
		<>
			<OwlCarousel id="owl-trip" className="owl-carousel owl-theme" items={1} loop margin={0} nav>
				{owl_trip.map((val, index) => {
					return (
						<div className="fig" key={index}>
							<figure>
								<img src={val.src} alt="" />
							</figure>
						</div>
					);
				})}
			</OwlCarousel>
		</>
	);
}

export default OwlTrip;
