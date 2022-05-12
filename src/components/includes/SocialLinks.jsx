import React from "react";
import { Link } from "react-router-dom";

function SocialLinks() {
	return (
		<>
			<ul className="social_links">
				<li>
					<Link to="?">
						<img src="/images/icon-envelope-fill.svg" alt="" />
					</Link>
				</li>
				<li>
					<Link to="?">
						<img src="/images/social-facebook.svg" alt="" />
					</Link>
				</li>
				<li>
					<Link to="?">
						<img src="/images/social-instagram.svg" alt="" />
					</Link>
				</li>
				<li>
					<Link to="?">
						<img src="/images/social-youtube.svg" alt="" />
					</Link>
				</li>
			</ul>
		</>
	);
}

export default SocialLinks;
