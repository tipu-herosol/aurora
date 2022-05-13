import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

function OwlWorks(props) {
	const { block } = props.owlData;
	return (
		<>
			<OwlCarousel id="owl-works" className="owl-carousel owl-theme" items={4} loop margin={30} nav dots={false}>
				{block.map((val) => {
					return (
						<div className="work_blk" key={val.id}>
							<div className="fig">
								<img src={val.src} alt={val.alt} />
							</div>
							<div className="txt">
								<h4 className="fancy">
									<Link to={val.link}>{val.title}</Link>
								</h4>
								<p>{val.text}</p>
								<div className="btn_blk">
									<Link to={val.link} className="site_btn text">
										{val.btn}
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</OwlCarousel>
		</>
	);
}

export default OwlWorks;
