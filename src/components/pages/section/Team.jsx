import React from "react";
import TeamBlock from "../../common/TeamBlock";

function Team(props) {
	const { Data } = props;
	const block = [
		{
			id: 1,
			title: Data.block_01.title,
			subtitle: Data.block_01.subtitle,
			src: Data.block_01.img_src,
		},
		{
			id: 2,
			title: Data.block_02.title,
			subtitle: Data.block_02.subtitle,
			src: Data.block_02.img_src,
		},
		{
			id: 3,
			title: Data.block_03.title,
			subtitle: Data.block_03.subtitle,
			src: Data.block_03.img_src,
		},
		{
			id: 4,
			title: Data.block_04.title,
			subtitle: Data.block_04.subtitle,
			src: Data.block_04.img_src,
		},
	];

	return (
		<>
			<section id="team">
				<div className="contain text-center">
					<div className="content">
						<h3 className="fancy">{Data.heading}</h3>
					</div>
					<div className="main_row flex_row">
						{block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<TeamBlock blockData={val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Team;
