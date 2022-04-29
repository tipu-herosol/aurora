import React from "react";
import AreaBlock from "../../common/AreaBlock";

function Areas({ data }) {
	return (
		<>
			<section id="area" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain">
					<div className="content text-center">
						<h3 className="fancy">
							{data.heading} <strong>{data.heading_ex}</strong>
						</h3>
						<p>{data.para}</p>
					</div>
					<div className="grid_row main_row">
						{data.block.map((val) => {
							const { id } = val;
							return (
								<div className="col" key={id}>
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

export default Areas;
