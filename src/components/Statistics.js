import React from 'react'

function Statistics(props) {
  return (
    <section className="tg-main-section tg-haslayout tg-bgdark">
				<div className="tg-banner-content tg-haslayout">
					<div className="row">
						<h1>Our Academy - {props.projectDetails.name}</h1>

						<ol className="tg-breadcrumb">
							<li><a href="#">Training Methods</a></li>
							<li className="active">{props.projectDetails.name}</li>
						</ol>
					</div>
				</div>
			</section>
  )
}

export default Statistics