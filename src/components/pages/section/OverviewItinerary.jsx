import React from "react";

function OverviewItinerary(props) {
	const { Data } = props;

	return (
		<>
			<section id="overview">
				<div className="contain">
					<div className="flex_row main_row" hidden>
						<div className="col col1">
							<div className="content">
								<p>
									<strong>Botswana's deserts, pans and deltas are some of the last great, untouched wildernesses in Southern Africa. With vast expanses of diverse terrain and a thriving ecosystem like no other on earth, Botswana is undoubtedly one of the best safari locations in the world.</strong>
								</p>
								<p>A self-drive safari through the vast and varied landscapes, combined with an awe-inspiring spectacle of wildlife, is an unbeatable experience. From the unforgiving Kalahari Desert and the extensive Makgadikgadi salt pans to the riverbanks of Chobe National Park, nature lovers will be spoilt for choice.</p>
								<p>
									<strong>Pristine African wilderness.</strong>
								</p>
								<p>The National Parks in Botswana are extremely protected. They only allow for a small number of lodges, tented camps, and campsites to be built. This means that there is a huge amount of demand for a small number of properties, so you need to book early to get your first choice properties – we advise a year in advance if possible.</p>
								<p>Whether you be camping under the stars with your vehicle, or exploring the floodplains of the Okavango Delta by mokoro, be prepared to be amazed.</p>
								<div className="btn_blk form_btn">
									<Link to={Data.btn_link_01} className="site_btn lg auto">
										{Data.btn_01}
									</Link>
									<Link to={Data.btn_link_02} className="site_btn lg auto blank stroke">
										{Data.btn_02}
									</Link>
								</div>
							</div>
						</div>
						<div className="col col2">
							<div id="map_blk">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4855.859527591884!2d-79.3863699277487!3d43.641690188092966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2s!4v1634128919096!5m2!1sen!2s" width="600" height="450" allowFullScreen="" loading="lazy" title="map"></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default OverviewItinerary;
