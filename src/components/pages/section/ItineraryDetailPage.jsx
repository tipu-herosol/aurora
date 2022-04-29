import React from "react";
// import ItineraryBlock from "../../common/ItineraryBlock";

function ItineraryDetailPage({ data, itinerary }) {
	return (
		<>
			<section id="itinerary_page">
				<div className="contain">
					<div id="OverviewBlk" className="flex_row master_row">
						<div className="col col1">
							<h3 className="fancy text-center">Overview</h3>
						</div>
						<div className="col col2">
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
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore minima amet ut aliquam, nihil earum? Dolore amet, ut, nisi voluptatum ex iste corporis magni ratione voluptas, iure debitis modi.</p>
								<p>Whether you be camping under the stars with your vehicle, or exploring the floodplains of the Okavango Delta by mokoro, be prepared to be amazed.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore minima amet ut aliquam, nihil earum? Dolore amet, ut, nisi voluptatum ex iste corporis magni ratione voluptas, iure debitis modi.</p>
							</div>
						</div>
					</div>
					<div className="br"></div>
					<hr />
					<div className="br"></div>
					{/* <div id="ItineraryBlk" className="flex_row master_row">
						<div className="col col1">
							<h3 className="fancy text-center">Itineraries</h3>
						</div>
						<div className="col col2">
							<div className="flex_row itinerary_row">
								{itinerary.block.map((val) => {
									return (
										<div className="col col1" key={val.id}>
											<ItineraryBlock {...val} />
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="br"></div>
					<hr />
					<div className="br"></div> */}
					<div id="AccommodationBlk" className="flex_row master_row">
						<div className="col col1">
							<h3 className="fancy text-center">Accommodation</h3>
						</div>
						<div className="col col2">
							<div className="in_col">
								<h4 className="fancy">Etosha Safari Lodge, Etosha National Park</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum quo eius quia sit accusantium impedit laudantium quaerat cumque perferendis! Debitis fugit similique aperiam maxime temporibus. Corrupti non repellat nisi.</p>
								<div className="fig mb-5">
									<img src="/images/5d9e42650ae6068c976fb25b_Etosha-Safari-Lodge.jpg" alt="" />
								</div>
								<div className="br"></div>
								<h4 className="fancy">Olive Grove, Windhoek</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum quo eius quia sit accusantium impedit laudantium quaerat cumque perferendis! Debitis fugit similique aperiam maxime temporibus. Corrupti non repellat nisi.</p>
								<div className="fig mb-5">
									<img src="/images/5d9e424ea143c8d246e87c7b_Olive-Grove-Guesthouse.jpg" alt="" />
								</div>
								{/* <div className="br"></div>
								<h4 className="fancy">Etendeka Mountain Camp, Damaraland</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum quo eius quia sit accusantium impedit laudantium quaerat cumque perferendis! Debitis fugit similique aperiam maxime temporibus. Corrupti non repellat nisi.</p>
								<div className="fig mb-5">
									<img src="/images/5d9e42a98c9b8d0cd28453b2_Eningu-Clayhouse-Lodge.jpg" alt="" />
								</div> */}
							</div>
						</div>
					</div>
					<div className="br"></div>
					<hr />
					<div className="br"></div>
					<div id="MapBlk" className="flex_row master_row">
						<div className="col col1">
							<h3 className="fancy text-center">Map</h3>
						</div>
						<div className="col col2">
							<div className="in_col">
								<div id="map_blk">
									<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4855.859527591884!2d-79.3863699277487!3d43.641690188092966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2s!4v1634128919096!5m2!1sen!2s" width="600" height="450" allowFullScreen="" loading="lazy" title="map"></iframe>
								</div>
							</div>
						</div>
					</div>
					<div className="br"></div>
					<hr />
					<div className="br"></div>
					<div id="TransportBlk" className="flex_row master_row">
						<div className="col col1">
							<h3 className="fancy text-center">Transport</h3>
						</div>
						<div className="col col2">
							<div className="in_col">
								<div className="fig mb-5">
									<img src="/images/safari-382383_1280.jpg" alt="" />
								</div>
								<div className="content">
									<p>A self-drive safari through the vast and varied landscapes, combined with an awe-inspiring spectacle of wildlife, is an unbeatable experience. From the unforgiving Kalahari Desert and the extensive Makgadikgadi salt pans to the riverbanks of Chobe National Park, nature lovers will be spoilt for choice.</p>
									<p>
										<strong>Botswana's deserts, pans and deltas are some of the last great, untouched wildernesses in Southern Africa. With vast expanses of diverse terrain and a thriving ecosystem like no other on earth, Botswana is undoubtedly one of the best safari locations in the world.</strong>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="br"></div>
					<hr />
					<div className="br"></div>
					<div id="DocumentsBlk" className="flex_row master_row">
						<div className="col col1">
							<h3 className="fancy text-center">Documents</h3>
						</div>
						<div className="col col2">
							<div className="in_col">
								<div className="flex_row docs_row">
									<div className="col">
										<div className="inner">
											<div className="fig">
												<img src="/images/pdf.png" alt="" />
											</div>
											<h6>Lorem ipsum dolor sit.</h6>
										</div>
									</div>
									<div className="col">
										<div className="inner">
											<div className="fig">
												<img src="/images/pdf.png" alt="" />
											</div>
											<h6>Pariatur, nam similique sed.</h6>
										</div>
									</div>
									<div className="col">
										<div className="inner">
											<div className="fig">
												<img src="/images/pdf.png" alt="" />
											</div>
											<h6>Nulla quo quibusdam.</h6>
										</div>
									</div>
									<div className="col">
										<div className="inner">
											<div className="fig">
												<img src="/images/pdf.png" alt="" />
											</div>
											<h6>Lorem aiores incidunt nulla.</h6>
										</div>
									</div>
									<div className="col">
										<div className="inner">
											<div className="fig">
												<img src="/images/pdf.png" alt="" />
											</div>
											<h6>Lorem ipsum dolor sed.</h6>
										</div>
									</div>
									<div className="col">
										<div className="inner">
											<div className="fig">
												<img src="/images/pdf.png" alt="" />
											</div>
											<h6>Dolor sit amet consectetur.</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default ItineraryDetailPage;
