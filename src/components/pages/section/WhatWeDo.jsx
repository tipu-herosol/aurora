import React from "react";

function WhatWeDo(props) {
	const { Data } = props;

	return (
		<>
			<section id="what" style={{ backgroundImage: "url(" + Data.sec_bg + ")" }}>
				<div className="contain">
					<h3 className="heading fancy text-center">{Data.heading}</h3>
					<div className="flex_row main_row">
						<div className="col">
							<div className="what_blk">
								<figure>
									<img src={Data.block_01.img_src} alt="" />
								</figure>
								<div className="txt">
									<h4 className="fancy">{Data.block_01.title}</h4>
									<p>{Data.block_01.para}</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="what_blk">
								<figure>
									<img src={Data.block_02.img_src} alt="" />
								</figure>
								<div className="txt">
									<h4 className="fancy">{Data.block_02.title}</h4>
									<p>{Data.block_02.para}</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="what_blk">
								<figure>
									<img src={Data.block_03.img_src} alt="" />
								</figure>
								<div className="txt">
									<h4 className="fancy">{Data.block_03.title}</h4>
									<p>{Data.block_03.para}</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="what_blk">
								<figure>
									<img src={Data.block_04.img_src} alt="" />
								</figure>
								<div className="txt">
									<h4 className="fancy">{Data.block_04.title}</h4>
									<p>{Data.block_04.para}</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="what_blk">
								<figure>
									<img src={Data.block_05.img_src} alt="" />
								</figure>
								<div className="txt">
									<h4 className="fancy">{Data.block_05.title}</h4>
									<p>{Data.block_05.para}</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="what_blk">
								<figure>
									<img src={Data.block_06.img_src} alt="" />
								</figure>
								<div className="txt">
									<h4 className="fancy">{Data.block_06.title}</h4>
									<p>{Data.block_06.para}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default WhatWeDo;
