import React from "react";

function ItineraryTabs({ data }) {
	return (
		<>
			<section id="tabs">
				<div className="contain">
					<ul>
						<li>
							<a href={"#" + data.link_hash_01}>{data.link_01}</a>
						</li>
						<li>
							<a href={"#" + data.link_hash_02}>{data.link_02}</a>
						</li>
						<li>
							<a href={"#" + data.link_hash_03}>{data.link_03}</a>
						</li>
						<li>
							<a href={"#" + data.link_hash_04}>{data.link_04}</a>
						</li>
						<li>
							<a href={"#" + data.link_hash_05}>{data.link_05}</a>
						</li>
						<li>
							<a href={"#" + data.link_hash_06}>{data.link_06}</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default ItineraryTabs;
