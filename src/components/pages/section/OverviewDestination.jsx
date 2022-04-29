import React from "react";

function OverviewDestination({ data }) {
	return (
		<>
			<section id="overview">
				<div className="contain">
					<h3 className="heading fancy text-center">{data.heading_01}</h3>
					<div className="flex_row main_row">
						<div className="col col1">
							<div className="fig">
								<figure>
									<img src={data.map_img} alt="" />
								</figure>
							</div>
						</div>
						<div className="col col2">
							<ol className="list_item size_5">
								<li>Lorem ipsum dolor sit amet consectetur elit.</li>
								<li>Debitis consequuntur illo amet dicta iusto ipsam.</li>
								<li>Ipsa dolorum placeat asperiores nam corporis, numquam vel omnis?</li>
								<li>Quasi quibusdam doloremque harum blanditiis id.</li>
								<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
								<li>Consequuntur dolorum placeat asperiores nam corporis, numquam vel?</li>
								<li>Aut porro natus culpa mollitia iure eius quasi sit.</li>
								<li>Pptio omnis laborum explicabo accusantium repudiandae! Error aut eum expedita?</li>
								<li>Lorem ipsum dolor sit amet consectetur elit.</li>
								<li>Debitis consequuntur illo amet dicta iusto ipsam.</li>
								<li>Ipsa dolorum placeat asperiores nam corporis, numquam vel omnis?</li>
								<li>Quasi quibusdam doloremque harum blanditiis id.</li>
								<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
							</ol>
						</div>
					</div>
					{/* <div id="country">
						<h3 className="heading fancy text-center">{data.heading_02}</h3>
						<figure>
							<img src={data.main_img} alt="" />
						</figure>
					</div> */}
				</div>
			</section>
		</>
	);
}

export default OverviewDestination;
