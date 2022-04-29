import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Nav from "./Navigation";
// import TopSearch from "./TopSearch";
import Sidebar from "./Sidebar";

function Header() {
	const [scroll, setScroll] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [sidebar, setSidebar] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, [scroll]);
	const ToggleActive = () => {
		setToggle(!toggle);
		setSidebar(!sidebar);
	};
	// const ToggleSrch = () => {
	// 	setActive(!active);
	// };

	return (
		<>
			<header className={scroll ? "fixed" : ""}>
				<div className="contain">
					<Logo />
					<button type="button" className={!toggle ? "toggle" : "toggle active"} onClick={() => ToggleActive(!toggle, !sidebar)}>
						<span></span>
					</button>
					<Nav />
					{/* <button type="button" id="srch_btn" onClick={ToggleSrch}> */}
					{/* <img src="/images/icon-search.svg" alt="" /> */}
					{/* </button> */}
					{/* <TopSearch isActive={active} /> */}
					<div className="clearfix"></div>
				</div>
				<Sidebar isActive={!sidebar} isToggle={ToggleActive} />
			</header>
		</>
	);
}

export default Header;
