import React from "react";
import ContactForm from "../../common/ContactForm";
import Image from "../../common/Image";

function ContactUs({ data }) {
	return (
		<>
			<section id="contact">
				<div className="contain sm">
					<div className="content text-center">
						<h3 className="heading fancy">
							{data.heading_01} <strong>{data.heading_ex_01}</strong>
						</h3>
					</div>
					<div className="info_row flex_row text-center">
						{data.info.map((val) => {
							return (
								<div className="col" key={val.id}>
									<div className="inner">
										<div className="icon">
											<Image src={val.icon} alt="" />
										</div>
										<div className="txt">
											<h6>{val.title}</h6>
											<span>{val.text}</span>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className="br"></div>
					<div className="br"></div>
					<ContactForm formData={data.form} />
				</div>
			</section>
		</>
	);
}

export default ContactUs;
