import React, { useState } from "react";
import Button from "./Button";

function ContactForm({ formData }) {
	const { heading, btn } = formData;
	const [formVal, setFormVal] = useState({
		name: "",
		phone: "",
		subject: "",
		email: "",
		comments: "",
	});
	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
	};
	return (
		<>
			<form action="" method="post" onSubmit={handleInput}>
				<h3 className="heading fancy text-center">{heading}</h3>
				<div className="form_row row">
					<div className="col-sm-6">
						<h6 className="require">Name</h6>
						<div className="form_blk">
							<input type="text" name="name" id="name" className="input" value={formVal.name} onChange={handleInput} placeholder="eg: John Wick" />
						</div>
					</div>
					<div className="col-sm-6">
						<h6 className="require">Phone</h6>
						<div className="form_blk">
							<input type="text" name="phone" id="phone" className="input" value={formVal.phone} onChange={handleInput} placeholder="eg: 559-579-8833" />
						</div>
					</div>
					<div className="col-sm-6">
						<h6 className="require">Subject</h6>
						<div className="form_blk">
							<input type="text" name="subject" id="subject" className="input" value={formVal.subject} onChange={handleInput} placeholder="eg: Lorem Ipsum" />
						</div>
					</div>
					<div className="col-sm-6">
						<h6 className="require">Email Address</h6>
						<div className="form_blk">
							<input type="text" name="email" id="email" className="input" value={formVal.email} onChange={handleInput} placeholder="eg: sample@gmail.com" />
						</div>
					</div>
					<div className="col-sm-12">
						<h6>Comments</h6>
						<div className="form_blk">
							<textarea name="comments" id="comments" className="input" value={formVal.comments} onChange={handleInput} placeholder="Type something here"></textarea>
						</div>
					</div>
				</div>
				<div className="btn_blk form_btn text-center">
					<Button className="long" text={btn} size="lg" type="submit"></Button>
				</div>
			</form>
		</>
	);
}

export default ContactForm;
