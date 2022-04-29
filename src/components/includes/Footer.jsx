import React from "react";
import { Link } from "react-router-dom";
// import Newsletter from "./Newsletter";
// import SocialLinks from "./SocialLinks";

function Footer() {
	return (
		<>
			<footer>
				<div className="contain text-center">
					{/* <Newsletter /> */}
					<ul className="list">
						<li>
							<Link to="/blog">Blog Posts</Link>
						</li>
						<li>
							<Link to="/privacy-policy">Privacy Policy</Link>
						</li>
						<li>
							<Link to="/terms-conditions">Terms & conditions</Link>
						</li>
						<li>
							<Link to="/disclaimer">Disclaimer</Link>
						</li>
					</ul>
					<p className="copyright">
						© Copyright 2022 <Link to="/">Aurora</Link> All rights reserved.
					</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
