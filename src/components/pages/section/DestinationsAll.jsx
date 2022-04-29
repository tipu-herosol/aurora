import React from "react";
import AreaBlock from "../../common/AreaBlock";

function DestinationsAll({ data }) {
	return (
		<>
			<section id="destination">
				<div id="map_blk">
					<iframe src={data.map} width="600" height="450" allowFullScreen="" loading="lazy" title="map"></iframe>
					<a href="#AllDestinations" className="run_btn">
						&nbsp;
					</a>
				</div>
				<div id="AllDestinations" className="contain">
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
									<AreaBlock {...val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default DestinationsAll;
