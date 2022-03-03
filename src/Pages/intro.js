import React from 'react';
import './css/intro.css'

const IntroScreen = (props) => {
    return (
        <div className='background-covering intro-screen-parent'>
            <div className='middle-content-wrapper'>

            <svg  viewBox="-4 0 348 459" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className = 'draw' d="M6 133.145L332 454.495" />
                <path className='draw-bold-straight' d="M334 459L334 133.145"/>
                <path className='draw-bold-straight' d="M5.51308 459.001L5.49078 128.641" />
                <path  className = 'draw-bold-curve' d="M142.865 272.519C177.111 277.04 212.241 272.898 243.485 260.654C274.729 248.411 300.573 228.661 317.506 204.085C334.439 179.509 341.641 151.299 338.134 123.287C334.628 95.2742 320.581 68.8163 297.904 47.5065C275.226 26.1967 245.016 11.0676 211.376 4.174C177.736 -2.71963 142.297 -1.04371 109.872 8.97413C77.4464 18.992 49.6061 36.8662 30.1319 60.1694C10.6576 83.4726 0.493363 111.075 1.01943 139.229L11.1341 139.104C10.6395 112.636 20.1954 86.6855 38.5039"/>
            </svg>


            </div>
        </div>
    )
}

export default IntroScreen;

// path 1 stroke="#61512E" stroke-width="10"

// path 2 stroke="#D5B060" stroke-width="10"/

// path 3 stroke="#D5B060" stroke-width="10"/


