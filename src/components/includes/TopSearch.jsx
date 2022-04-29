import React from "react";

function TopSearch(props) {
	const { isActive } = props;
	return (
		<>
			{isActive && (
				<form action="" method="POST" className="top_search">
					<input type="text" name="q" id="q" className="input" placeholder="Search anything here" />
					<button type="submit">
						<img src="/images/icon-search.svg" alt="" />
					</button>
				</form>
			)}
		</>
	);
}

export default TopSearch;
