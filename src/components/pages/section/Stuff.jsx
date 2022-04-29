import React from "react";

function Stuff(props) {
	const { img_src, content_01, content_02 } = props.Data;
	const { title: title1, title_tail: title_tail1, para: para1, btn: btn1, btn_link: btn_link1 } = content_01;
	const { title: title2, title_tail: title_tail2, para: para2, btn: btn2, btn_link: btn_link2 } = content_02;
	return (
		<>
			<section id="stuff">
				<div className="contain">
					<div className="outer">
						<div className="img">
							<figure>
								<img src={img_src} alt="" />
							</figure>
						</div>
						<div className="content">
							<div className="txt dark">
								<h3 className="fancy">
									{title1} <strong>{title_tail1}</strong>
								</h3>
								<p>{para1}</p>
								<div className="btn_blk">
									<a href={btn_link1} className="site_btn lg long blank stroke round">
										{btn1}
									</a>
								</div>
							</div>
							<div className="txt light">
								<h3 className="fancy">
									<em>{title2}</em> <br /> <strong>{title_tail2}</strong>
								</h3>
								<p>{para2}</p>
								<div className="btn_blk">
									<a href={btn_link2} className="site_btn lg long dark round">
										{btn2}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Stuff;
