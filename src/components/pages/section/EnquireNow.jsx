import React from "react";
import ContactForm from "../../common/ContactForm";

function EnquireNow({ data }) {
	return (
		<>
			<section id="contact">
				<div className="contain sm">
					<ContactForm formData={data.form} />
				</div>
			</section>
		</>
	);
}

export default EnquireNow;
