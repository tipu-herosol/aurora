import React from "react";

function Experience(props) {
	const { Data } = props;

	return (
		<>
			<section id="experience">
				<div className="contain">
					<h3 className="heading fancy text-center">{Data.heading}</h3>
					<div className="flex_row main_row">
						<div className="col">
							<div className="inner">
								<figure>
									<a href={Data.block_01.link}>
										<img src={Data.block_01.img_src} alt="" />
									</a>
								</figure>
								<div className="txt">
									<h4 className="fancy">{Data.block_01.title}</h4>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="inner">
								<figure>
									<a href={Data.block_02.link}>
										<img src={Data.block_02.img_src} alt="" />
									</a>
								</figure>
								<div className="txt">
									<h4 className="fancy">{Data.block_02.title}</h4>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="inner">
								<figure>
									<a href={Data.block_03.link}>
										<img src={Data.block_03.img_src} alt="" />
									</a>
								</figure>
								<div className="txt">
									<h4 className="fancy">{Data.block_03.title}</h4>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="inner">
								<figure>
									<a href={Data.block_04.link}>
										<img src={Data.block_04.img_src} alt="" />
									</a>
								</figure>
								<div className="txt">
									<h4 className="fancy">{Data.block_04.title}</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Experience;
