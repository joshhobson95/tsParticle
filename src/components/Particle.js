import React, { useRef } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './Particle.css';
import Modal from './Modal';
import newlogo from '../assets/newJHlogo.png';  




export default function App() {
  const modalRef = useRef(null);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const toggleModalVisibility = () => {
    const whiteSquareElement = document.querySelector('.white_square');

    if (whiteSquareElement.classList.contains('modal-open')) {
      whiteSquareElement.classList.remove('modal-open');
    } else {
      whiteSquareElement.classList.add('modal-open');
    }
    
    const modalElement = modalRef.current;
    if (modalElement) {
      modalElement.style.display =
        modalElement.style.display === 'none' ? 'block' : 'none';
    }
  };




    return (
      <div className="App">
<div className="header_shell">
        <div className="header_left">
            <div className="inner_left">
            <h1 className="JoshHobson">Josh Hobson</h1>
            <h1>Web Developer</h1>
            </div>
        </div>

</div>

<div className="white_square" onClick={toggleModalVisibility}>
</div>
<div className="white_square2">
</div>
<div className="white_square3">
</div>


<div ref={modalRef} style={{ display: 'none' }}>
  <br></br>
        <Modal />
      </div>

<div className="newlogo_container">
  <img className="newlogo" src={newlogo} alt=""/>
</div>


         <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
            "fps_limit": 60,
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onclick": { "enable": true, "mode": "push" },
                "onhover": {
                  "enable": true,
                  "mode": "repulse",
                  "parallax": { "enable": false, "force": 60, "smooth": 10 }
                },
                "resize": true
              },
              "modes": {
                "push": { "quantity": 4 },
                "attract": { "distance": 200, "duration": 0.4, "factor": 5 }
              }
            },
            "particles": {
              "color": { "value": "#ffffff" },
              "line_linked": {
                "color": "#ffffff",
                "distance": 120,
                "enable": true,
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 },
                "bounce": false,
                "direction": "none",
                "enable": true,
                "out_mode": "out",
                "random": false,
                "speed": 2,
                "straight": false
              },
              "number": { "density": { "enable": true, "value_area": 800 }, "value": 80 },
              "opacity": {
                "anim": { "enable": false, "opacity_min": 0.1, "speed": 1, "sync": false },
                "random": false,
                "value": 0.5
              },
              "shape": {
                "character": {
                  "fill": false,
                  "font": "Verdana",
                  "style": "",
                  "value": "*",
                  "weight": "400"
                },
              
                "polygon": { "nb_sides": 5 },
                "stroke": { "color": "#000000", "width": 0 },
                "type": "circle"
              },
              "size": {
                "anim": { "enable": false, "size_min": 0.1, "speed": 40, "sync": false },
                "random": true,
                "value": 5
              }
            },
            "polygon": {
              "draw": { "enable": false, "lineColor": "#ffffff", "lineWidth": 0.5 },
              "move": { "radius": 10 },
              "scale": 1,
              "type": "none",
              "url": ""
            },
            "retina_detect": true,
          "background": {
              "color": "#111",
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover"
          }
      }}
      />
      </div>
    );
  }
  