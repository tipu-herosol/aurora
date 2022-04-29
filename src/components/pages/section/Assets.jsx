import React from "react";

function Assets({ data }) {
	return (
		<>
			<section id="assets" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain">
					<div className="flex_blk">
						<div className="content text-center">
							<p>{data.para}</p>
							<h1 className="heading fancy">{data.heading}</h1>
							<button type="button" className="play_btn">
								<img src={data.btn_img_src} alt="" />
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Assets;
