import React from "react";

function Inspire({ data }) {
	return (
		<>
			<section id="inspire" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain">
					<h3 className="heading fancy text-center">
						{data.heading} <strong>{data.heading_ex}</strong>
					</h3>
					<div className="flex_row main_row">
						<div className="col">
							<div className="review">
								<div className="ico fill">
									<img src="/images/01.jpg" alt="" />
								</div>
								<div className="txt">
									<div className="ico_txt">
										<div className="title">
											<h6>Jennifer Kem</h6>
											<div className="rating">
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
											</div>
										</div>
										<div className="date">February 2018</div>
									</div>
									<p>Had a short stay with my dad and younger sis. Very comfortable and cozy room. The host Jeka is nice and prepared snacks for us in advance. The location is good and we particularly like the view of the room. Strongly recommend:)</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="review">
								<div className="ico fill">
									<img src="/images/02.jpg" alt="" />
								</div>
								<div className="txt">
									<div className="ico_txt">
										<div className="title">
											<h6>Brent Phillips</h6>
											<div className="rating">
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
											</div>
										</div>
										<div className="date">January 2018</div>
									</div>
									<p>This place was wonderful. Very walkable to the subway and very close to the Bund. Host is easily reachable and the space was very clean. My only complaint is that during the day the construction nearby gets a bit loud.</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="review">
								<div className="ico fill">
									<img src="/images/03.jpg" alt="" />
								</div>
								<div className="txt">
									<div className="ico_txt">
										<div className="title">
											<h6>Sara Fernandas</h6>
											<div className="rating">
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
											</div>
										</div>
										<div className="date">December 2017</div>
									</div>
									<p>Jeka is totally great,the room is clean and delicate.There is a little kitchen, loudspeaker and a humidifier in (Website hidden by Virtual Iceland) easy to go to Duolun road and 1933 workshop.Watching night scene of Shanghai in room is super amazing.Drink some beer and enjoy the travel!</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="review">
								<div className="ico fill">
									<img src="/images/04.jpg" alt="" />
								</div>
								<div className="txt">
									<div className="ico_txt">
										<div className="title">
											<h6>Michel Jones</h6>
											<div className="rating">
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
											</div>
										</div>
										<div className="date">December 2017</div>
									</div>
									<p>This place was great. You’ll love it, very clean, and a great view. Host is very attentive and pro-active.</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="review">
								<div className="ico fill">
									<img src="/images/01.jpg" alt="" />
								</div>
								<div className="txt">
									<div className="ico_txt">
										<div className="title">
											<h6>Sana Safinaz</h6>
											<div className="rating">
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
											</div>
										</div>
										<div className="date">September 2017</div>
									</div>
									<p>Jeka was an amazing host throughout our time in Shanghai. She responded so quickly to all our questions and really made the space feel like home. The flat was very central and very walkable to restaurants and public transport. Thanks to Jeka, the apartment was very easy to find.</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="review">
								<div className="ico fill">
									<img src="/images/01.jpg" alt="" />
								</div>
								<div className="txt">
									<div className="ico_txt">
										<div className="title">
											<h6>Jennifer Kem</h6>
											<div className="rating">
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
											</div>
										</div>
										<div className="date">February 2018</div>
									</div>
									<p>Had a short stay with my dad and younger sis. Very comfortable and cozy room. The host Jeka is nice and prepared snacks for us in advance. The location is good and we particularly like the view of the room. Strongly recommend:)</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="review">
								<div className="ico fill">
									<img src="/images/02.jpg" alt="" />
								</div>
								<div className="txt">
									<div className="ico_txt">
										<div className="title">
											<h6>Brent Phillips</h6>
											<div className="rating">
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
											</div>
										</div>
										<div className="date">January 2018</div>
									</div>
									<p>This place was wonderful. Very walkable to the subway and very close to the Bund. Host is easily reachable and the space was very clean. My only complaint is that during the day the construction nearby gets a bit loud.</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="review">
								<div className="ico fill">
									<img src="/images/03.jpg" alt="" />
								</div>
								<div className="txt">
									<div className="ico_txt">
										<div className="title">
											<h6>Sara Fernandas</h6>
											<div className="rating">
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
											</div>
										</div>
										<div className="date">December 2017</div>
									</div>
									<p>Jeka is totally great,the room is clean and delicate.There is a little kitchen, loudspeaker and a humidifier in (Website hidden by Virtual Iceland) easy to go to Duolun road and 1933 workshop.Watching night scene of Shanghai in room is super amazing.Drink some beer and enjoy the travel!</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="review">
								<div className="ico fill">
									<img src="/images/04.jpg" alt="" />
								</div>
								<div className="txt">
									<div className="ico_txt">
										<div className="title">
											<h6>Michel Jones</h6>
											<div className="rating">
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
											</div>
										</div>
										<div className="date">December 2017</div>
									</div>
									<p>This place was great. You’ll love it, very clean, and a great view. Host is very attentive and pro-active.</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="review">
								<div className="ico fill">
									<img src="/images/01.jpg" alt="" />
								</div>
								<div className="txt">
									<div className="ico_txt">
										<div className="title">
											<h6>Sana Safinaz</h6>
											<div className="rating">
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
												<i className="star"></i>
											</div>
										</div>
										<div className="date">September 2017</div>
									</div>
									<p>Jeka was an amazing host throughout our time in Shanghai. She responded so quickly to all our questions and really made the space feel like home. The flat was very central and very walkable to restaurants and public transport. Thanks to Jeka, the apartment was very easy to find.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Inspire;
