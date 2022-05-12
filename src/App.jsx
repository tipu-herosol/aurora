import React from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";
import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import ServiceDetail from "./components/pages/ServiceDetail";
import Rates from "./components/pages/Rates";
import Contact from "./components/pages/Contact";
import Faq from "./components/pages/Faq";
import Blog from "./components/pages/Blog";
import BlogDetail from "./components/pages/BlogDetail";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Disclaimer from "./components/pages/Disclaimer";
import TermsConditions from "./components/pages/TermsConditions";
import Destinations from "./components/pages/Destinations";
import DestinationDetail from "./components/pages/DestinationDetail";
import ItineraryDetail from "./components/pages/ItineraryDetail";
import Enquire from "./components/pages/Enquire";
import Inspiration from "./components/pages/Inspiration";
import Error from "./components/pages/Error";

function App() {
	const PageLayout = () => (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route element={<PageLayout />}>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/about" element={<About />} />
						<Route exact path="/services" element={<Services />} />
						<Route exact path="/service-detail" element={<ServiceDetail />} />
						<Route exact path="/contact" element={<Contact />} />
						<Route exact path="/rates" element={<Rates />} />
						<Route exact path="/faq" element={<Faq />} />
						<Route exact path="/blog" element={<Blog />} />
						<Route exact path="/blog/blog-detail" element={<BlogDetail />} />
						<Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
						<Route exact path="/disclaimer" element={<Disclaimer />} />
						<Route exact path="/terms-conditions" element={<TermsConditions />} />
						<Route exact path="/destinations" element={<Destinations />} />
						<Route exact path="/destinations/destination-detail" element={<DestinationDetail />} />
						<Route exact path="/enquire" element={<Enquire />} />
						<Route exact path="/inspiration" element={<Inspiration />} />
						<Route exact path="/itineraries/itinerary-detail" element={<ItineraryDetail />} />
					</Route>
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
