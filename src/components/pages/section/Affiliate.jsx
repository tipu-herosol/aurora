import React from "react";
import AffiliateBlock from "../../common/AffiliateBlock";

function Affiliate({ data }) {
	return (
		<>
			<section id="affiliate" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain">
					<div className="content text-center">
						<h3 className="fancy">
							{data.heading} <strong>{data.heading_ex}</strong>
						</h3>
					</div>
					<div className="flex_row main_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<AffiliateBlock {...val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Affiliate;
