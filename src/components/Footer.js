import React from 'react'

import logo from '../images/logo.png'

function Footer() {
  return (
<footer id="tg-footer" class="tg-footer tg-haslayout">

<div class="tg-haslayout tg-footerinfobox">
				<div class="tg-bgboxone"></div>
				<div class="tg-bgboxtwo"></div>
				<div class="tg-footerinfo">
					<div class="container">
						<div class="row">
							<div class="col-sm-4">
								<div class="tg-footercol">
									<div class="tg-posttitle">
										<h3>signup newsletter</h3>
									</div>
									<div class="tg-description">
										<p>Adipisicing elit, sed do eiusmod tempor incidunta utiai labore et dolore magna si aliqua quis.</p>
									</div>
									<form class="tg-form-newsletter">
										<fieldset>
											<div class="form-group">
												<input type="email" class="form-control" name="email" placeholder="Email" />
											</div>
											<button class="tg-btn" type="submit">signup</button>
										</fieldset>
									</form>
									<div class="tg-posttitle">
										<h3>popular tags</h3>
									</div>
									<div class="tg-tags">
										<a class="tg-tag" href="#">fashion</a>
										<a class="tg-tag" href="#">travel</a>
										<a class="tg-tag" href="#">blog</a>
										<a class="tg-tag" href="#">sports</a>
										<a class="tg-tag" href="#">magazine</a>
										<a class="tg-tag" href="#">ui</a>
										<a class="tg-tag" href="#">tech</a>
										<a class="tg-tag" href="#">fun time</a>
										<a class="tg-tag" href="#">soccer</a>
									</div>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="tg-footercol">
									<div class="tg-posttitle">
										<h3>Top products</h3>
									</div>
									<div class="tg-toprated">
										<ul>
											<li>
												<figure>
													<a href="#">
														<img src="images/thumbnails/img-04.jpg" alt="image description" />
													</a>
												</figure>
												<div class="tg-productcontent">
													<h4><a href="#">Smooth 3-Stripes Scarf</a></h4><span class="tg-stars"><span></span></span>
													<span class="tg-price">Price: $67</span>
												</div>
											</li>
											<li>
												<figure>
													<a href="#">
														<img src="images/thumbnails/img-05.jpg" alt="image description" />
													</a>
												</figure>
												<div class="tg-productcontent">
													<h4><a href="#">Smooth 3-Stripes Scarf</a></h4><span class="tg-stars"><span></span></span>
													<span class="tg-price">Price: $67</span>
												</div>
											</li>
											<li>
												<figure>
													<a href="#">
														<img src="images/thumbnails/img-06.jpg" alt="image description" />
													</a>
												</figure>
												<div class="tg-productcontent">
													<h4><a href="#">Smooth 3-Stripes Scarf</a></h4><span class="tg-stars"><span></span></span>
													<span class="tg-price">Price: $67</span>
												</div>
											</li>
											<li>
												<figure>
													<a href="#">
														<img src="images/thumbnails/img-07.jpg" alt="image description" />
													</a>
												</figure>
												<div class="tg-productcontent">
													<h4><a href="#">Smooth 3-Stripes Scarf</a></h4><span class="tg-stars"><span></span></span>
													<span class="tg-price">Price: $67</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="tg-footercol">
									<div class="tg-haslayout">
										<strong class="tg-logo">
											<a href="#">
												<img src={logo} alt="image description" />
											</a>
										</strong>
									</div>
									<div class="tg-description">
										<p>Consectetur adipisicing elit sedtado eiusmod dunt ut labore et dolore magna aliqua enim minim veniami quis nostrud.</p>
									</div>
									<ul class="tg-contactinfo">
										<li>
											<i class="fa fa-home"></i>
											<address>123 Eccles Old Road, New Salford Road London, Uk, M6 7AF</address>
										</li>
										<li>
											<i class="fa fa-envelope-o"></i>
											<a href="info%40domain.html">info@domain.com</a>
										</li>
										<li>
											<i class="fa fa-phone"></i>
											<span>+44 123 456 788 - 9</span>
										</li>
									</ul>
									<div class="tg-haslayout">
										<a class="tg-btn" href="#">read more</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

    </footer>
    
  )
}

export default Footer