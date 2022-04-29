import React from "react";
import { Link } from "react-router-dom";
import ItineraryBlock from "../../common/ItineraryBlock";

function Itinerary(props) {
	const { data } = props;
	return (
		<>
			<section id="itinerary">
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
								<div className="col col1" key={val.id}>
									{/* <ItineraryBlock blockData={val} /> */}
								</div>
							);
						})}
					</div>
					<div className="btn_blk form_btn text-center">
						<Link to={data.btn_link} className="site_btn lg blank stroke round">
							{data.btn}
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export default Itinerary;
