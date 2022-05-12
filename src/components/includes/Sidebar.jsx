import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar(props) {
	const { isActive, isToggle } = props;

	return (
		<>
			<div id="sidebar" className={isActive ? "fancy" : "active fancy"}>
				<ul>
					<li>
						<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={isToggle}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={isToggle}>
							The Story
						</NavLink>
					</li>
					<li className="sm">
						<NavLink to="/destinations" className={({ isActive }) => (isActive ? "active" : "")} onClick={isToggle}>
							Destinations
						</NavLink>
					</li>
					<li className="sm">
						<NavLink to="/inspiration" className={({ isActive }) => (isActive ? "active" : "")} onClick={isToggle}>
							Inspire Me
						</NavLink>
					</li>
					<li className="sm">
						<NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")} onClick={isToggle}>
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")} onClick={isToggle}>
							Our Services
						</NavLink>
					</li>
					<li>
						<NavLink to="/privacy-policy" className={({ isActive }) => (isActive ? "active" : "")} onClick={isToggle}>
							Rates
						</NavLink>
					</li>
					<li>
						<NavLink to="/faq" className={({ isActive }) => (isActive ? "active" : "")} onClick={isToggle}>
							FAQ's
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={isToggle}>
							Contact us
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Sidebar;
