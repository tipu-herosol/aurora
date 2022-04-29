import React from "react";
import { Link } from "react-router-dom";
import OwlTrip from "../../common/OwlTrip";
import ItineraryBlock from "../../common/ItineraryBlock";

function Trip({ data, itinerary }) {
	return (
		<>
			<section id="trip">
				<div className="contain">
					<h3 className="heading fancy text-center">{data.heading}</h3>
					<div className="flex_row main_row">
						<div className="col col1">
							<div className="in_col">
								<OwlTrip owlData={data} />
							</div>
						</div>
						<div className="col col2 trip_col">
							<div className="flex_row sub_row">
								{itinerary.block.map((val) => {
									return (
										<div className="col col1" key={val.id}>
											<ItineraryBlock {...val} />
										</div>
									);
								})}
							</div>
							<div className="btn_blk form_btn text-center">
								<Link to={itinerary.btn_link_01} className="site_btn site_btn_blk" style={{ backgroundImage: "url(" + itinerary.site_btn_img_01 + ")" }}>
									<span>{itinerary.btn_01}</span>
								</Link>
								<Link to={itinerary.btn_link_02} className="site_btn site_btn_blk" style={{ backgroundImage: "url(" + itinerary.site_btn_img_02 + ")" }}>
									<span>{itinerary.btn_02}</span>
								</Link>
								<Link to={itinerary.btn_link_03} className="site_btn site_btn_blk" style={{ backgroundImage: "url(" + itinerary.site_btn_img_03 + ")" }}>
									<span>{itinerary.btn_03}</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Trip;
