import React from 'react'

function About(props) {
  return (
    
    <section className="tg-main-section tg-haslayout">
				<div className="container">
					<div className="tg-section-name">
						<h2>{props.projectDetails.name}</h2>
					</div>
					<div className="col-sm-11 col-xs-11 pull-right">
						<div className="row">
							<div className="tg-aboutussection">
								<div className="row">
									<div className="col-md-6 col-sm-12 col-xs-12">
										<figure>
											<img src="images/img-01.jpg" alt="image description" />
										</figure>
									</div>
									<div className="col-md-6 col-sm-12 col-xs-12">
										<div className="tg-contentbox">
											<div className="tg-section-heading"><h2>About {props.projectDetails.name}</h2></div>
											<div className="tg-description">
												<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt utia labore et dolore magna aliqua enim ad minim veniam quistrud on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doloreeu fugiat nulla pariatur cepteur sint occaecat.</p>
											</div>
											<div className="tg-btnbox">
												<a className="tg-btn" href="#"><span>read more</span></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
  )
}

export default About