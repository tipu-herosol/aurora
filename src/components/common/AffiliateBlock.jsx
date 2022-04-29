import React from "react";
import Image from "./Image";

function WorkBlock({ icon, title, para }) {
	return (
		<>
			<div className="aff_blk">
				<div className="icon">
					<Image src={icon} alt="" />
				</div>
				<div className="txt">
					<h5>{title}</h5>
					<p>{para}</p>
				</div>
			</div>
		</>
	);
}

export default WorkBlock;
