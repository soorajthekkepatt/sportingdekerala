import React from 'react'

function VideoCard() {
  return (
    <div class="masonry-grid laliga">
        <div class="tg-project">
            <figure class="tg-postimg">
                <a data-rel="prettyPhoto[iframe]" href="https://youtu.be/iC9CpnSj-MU?iframe=true&amp;" class="tg-playbtn"></a>
                <img src="images/gallery/img-01.jpg" alt="image description" />
                <figcaption>
                    <a class="tg-theme-tag" data-rel="prettyPhoto[iframe]" href="https://youtu.be/iC9CpnSj-MU?iframe=true&amp;"><i class="fa fa-play"></i></a>
                    <a class="tg-theme-tag">in 2014</a>
                    <h3>ThunderWolves match</h3>
                </figcaption>
            </figure>
        </div>
    </div>
  )
}

export default VideoCard