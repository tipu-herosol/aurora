import React from "react";
import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";

function Nav() {
	return (
		<>
			<nav className="ease">
				<div id="nav">
					<ul id="lst">
						<li className="drop">
							<NavLink to="/destinations" className={({ isActive }) => (isActive ? "active" : "")}>
								Destinations
							</NavLink>
							<ul className="sub">
								<li>
									<NavLink to="/destinations/destination-detail" className={({ isActive }) => (isActive ? "active" : "")}>
										Classic Namibia
									</NavLink>
								</li>
								<li>
									<NavLink to="/destinations/destination-detail" className={({ isActive }) => (isActive ? "active" : "")}>
										Luxury Botswana
									</NavLink>
								</li>
								<li>
									<NavLink to="/destinations/destination-detail" className={({ isActive }) => (isActive ? "active" : "")}>
										Zimbabwe
									</NavLink>
								</li>
								<li>
									<NavLink to="/destinations/destination-detail" className={({ isActive }) => (isActive ? "active" : "")}>
										Classic Tanzania
									</NavLink>
								</li>
								<li>
									<NavLink to="/destinations/destination-detail" className={({ isActive }) => (isActive ? "active" : "")}>
										South Africa
									</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<NavLink to="/inspiration" className={({ isActive }) => (isActive ? "active" : "")}>
								Inspire Me
							</NavLink>
						</li>
					</ul>
					<ul id="cta">
						<li>
							<NavLink to="/privacy-policy" className={({ isActive }) => (isActive ? "active" : "")}>
								Travel Tips
							</NavLink>
						</li>
						<li>
							<NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
								Blog
							</NavLink>
						</li>
						{/* <li>
							<Link to="/contact" className="site_btn long shade">
								Contact us
							</Link>
						</li> */}
					</ul>
				</div>
				<SocialLinks />
			</nav>
		</>
	);
}

export default Nav;
