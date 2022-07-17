import React from 'react'

import logo from '../images/logo.png'
import thumpimageone from '../images/thumbnails/img-01.jpg'
import thumpimagetwo from '../images/thumbnails/img-02.jpg'
import thumpimagethree from '../images/thumbnails/img-03.jpg'


function Header() {
  return (
	<header id="tg-header" className="tg-header tg-haslayout">
	<div className="container">
		<div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
			<div className="row">
				<div className="tg-topbar tg-haslayout">
					<nav id="tg-topaddnav" className="tg-topaddnav">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#tg-addnavigationm-mobile">
								<i className="fa fa-arrow-right"></i>
							</button>
						</div>
						<div id="tg-addnavigationm-mobile" className="tg-addnavigationm-mobile collapse navbar-collapse">
							<div className="tg-colhalf pull-right">
								<nav className="tg-addnav">
									<ul className="tg-socialicons">
									<li>
										<a href="#">
											<i className="fa fa-instagram"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-google-plus"></i>
										</a>
									</li>
									</ul>
								</nav>
							</div>
							<div className="tg-colhalf">
								<ul className="tg-socialicons">
									<li>
										<a href="#">
											<i className="fa fa-facebook"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-twitter"></i>
										</a>
									</li>

									
								</ul>
							</div>
						</div>
					</nav>
				</div>
				<nav id="tg-nav" className="tg-nav brand-center">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#tg-navigationm-mobile">
							<i className="fa fa-bars"></i>
						</button>
						<strong className="tg-logo">
							<a href="index-2.html"><img src={logo} alt="image description" /></a>
						</strong>
					</div>
					<div id="tg-navigation" className="tg-navigation">
						<div className="tg-colhalf">
							<ul>
								<li className="active">
									<a href="#">Home</a>
								</li>
								<li>
									<a href="#">About Us</a>
								</li>
								<li><a href="buyticket.html">Training</a></li>
								
							</ul>
						</div>
						<div className="tg-colhalf">
							<ul>
								<li>
									<a href="#">Infrastructure</a>
								</li>
								<li>
									<a href="#">Gallery</a>
								</li>
								<li><a href="#">Contact</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</div>
</header>
  )
}

export default Header