import React from 'react'
import ImageCard from './cards/ImageCard'
import VideoCard from './cards/VideoCard'

function Imagegallery(props) {
  return (
    <div>
        <div className="tg-banner tg-haslayout">
			<div className="tg-imglayer">
				<img src="images/bg-pattran.png" alt="image desctription" />
			</div>
			<div className="container">
				<div className="row">
					<div className="tg-banner-content tg-haslayout">
						<div className="tg-pagetitle">
							<h1>{props.projectDetails.name} Media</h1>
						</div>
						<ol className="tg-breadcrumb">
							<li><a href="#">Image Gallery</a></li>
							<li className="active">{props.projectDetails.name} Media</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

        <section class="tg-main-section tg-soccermedia tg-haslayout">

                <div id="tg-soccermediascrollbar" class="tg-soccermediascrollbar">
					<div id="filter-masonry" class="tg-soccermedia-content tg-haslayout">

						<ImageCard />
						<ImageCard />
						<ImageCard />
						<ImageCard />
						<VideoCard />

                    </div>
                </div>
            </section>

        </div>

        
  )
}

export default Imagegallery