import React from 'react'
import './Preloader.css'
function Preloader() {
  return (
    <div class="preloader">
                  <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_mnqdhisx.json" background="transparent"  speed="1"  style={{width: "300px",height: "300px"}} loop autoplay></lottie-player>
<h3>Your food is Loading....</h3>

    </div>
  )
}

export default Preloader
