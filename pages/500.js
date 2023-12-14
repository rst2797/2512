import Lottie from 'lottie-react'
import animationData from "../lottie-json/server_error.json"
import React from 'react'


const ServerError = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
  return (
    <div>
     <Lottie options={defaultOptions} height={400} width={400} />
     </div>
  )
}

export default ServerError