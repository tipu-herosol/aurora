import React from "react";
import Image from "../../common/Image";

function Strip({ data }) {
	return (
		<>
			<section id="strip">
				<div className="contain">
					<div className="flex_row main_row">
						<div className="col col1">
							<h1 className="title fancy">
								<em>{data.heading}</em>
							</h1>
						</div>
						<div className="col col2">
							<div className="in_col">
								<figure>
									<Image src={data.src} alt="" />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Strip;
