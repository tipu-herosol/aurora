import React from "react";

function Newsletter() {
	return (
		<>
			<div className="subscribe">
				<span className="fancy text-center">Subscribe to keep update on new products, offers and more.</span>
				<form action="" method="POST">
					<input type="text" name="" id="" className="input" placeholder="Enter Email Address" />
					<button type="submit">
						<img src="/images/icon-send.svg" alt="" />
					</button>
				</form>
			</div>
		</>
	);
}

export default Newsletter;
