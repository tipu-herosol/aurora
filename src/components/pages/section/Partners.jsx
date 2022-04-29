import React from "react";

function Partners({ data }) {
	return (
		<>
			<section id="partners">
				<div className="contain text-center">
					<div className="content">
						<h3 className="fancy">{data.heading}</h3>
						<p>{data.para}</p>
					</div>
					<ul className="list">
						<li>
							<a href="https://eqtgroup.com/" target="_blank" rel="noreferrer" className="ico">
								<img src="/images/partners/1.png" alt="" />
							</a>
						</li>
						<li>
							<a href="https://fsncapital.com/en/" target="_blank" rel="noreferrer" className="ico">
								<img src="/images/partners/2.png" alt="" />
							</a>
						</li>
						<li>
							<a href="https://www.axcel.dk/" target="_blank" rel="noreferrer" className="ico">
								<img src="/images/partners/3.png" alt="" />
							</a>
						</li>
						<li>
							<a href="https://www.capidea.dk/" target="_blank" rel="noreferrer" className="ico">
								<img src="/images/partners/4.png" alt="" />
							</a>
						</li>
						<li>
							<a href="https://www.nordiccapital.com/" target="_blank" rel="noreferrer" className="ico">
								<img src="/images/partners/5.png" alt="" />
							</a>
						</li>
						<li>
							<a href="https://altor.com/" target="_blank" rel="noreferrer" className="ico">
								<img src="/images/partners/6.png" alt="" />
							</a>
						</li>
						<li>
							<a href="https://polarisequity.dk/" target="_blank" rel="noreferrer" className="ico">
								<img src="/images/partners/7.png" alt="" />
							</a>
						</li>
						<li>
							<a href="https://www.promentumequity.dk/" target="_blank" rel="noreferrer" className="ico">
								<img src="/images/partners/8.png" alt="" />
							</a>
						</li>
						<li>
							<a href="https://www.plesner.com/" target="_blank" rel="noreferrer" className="ico">
								<img src="/images/partners/9.png" alt="" />
							</a>
						</li>
						<li>
							<a href="https://apmollercapital.com/en/" target="_blank" rel="noreferrer" className="ico">
								<img src="/images/partners/10.png" alt="" />
							</a>
						</li>
						<li>
							<a href="https://www.kirkkapital.dk/da/" target="_blank" rel="noreferrer" className="ico">
								<img src="/images/partners/11.png" alt="" />
							</a>
						</li>
						<li>
							<a href="https://www.kirkbi.com/" target="_blank" rel="noreferrer" className="ico">
								<img src="/images/partners/12.png" alt="" />
							</a>
						</li>
						<li>
							<a href="https://danskeprivateequity.com/" target="_blank" rel="noreferrer" className="ico">
								<img src="/images/partners/13.png" alt="" />
							</a>
						</li>
						<li>
							<a href="https://vf.dk/" target="_blank" rel="noreferrer" className="ico">
								<img src="/images/partners/14.png" alt="" />
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default Partners;
