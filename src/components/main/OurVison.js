import React, { useState }  from 'react';

// Images 
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";

const OurVison = () => {

    const [section, setSection] = useState(false);

    const audio = new Audio('http://freesoundeffect.net/sites/default/files/ghost-whoosh-effect-11-sound-effect-1296998.mp3');

        const play = () =>{
            audio.load();
            audio.play();
            setSection(true);
        }

        const pause = () =>{
            audio.pause();
            setSection(false);
        }
        console.log(section);
  return (
      <div className="container ourvision">

         <section>
      <div className="row  pt-10">
        { section ?   
         <div className="col-sm-6 ourvision-text">
            <img className="img-fluid blood"  
              src={img2} 
              alt="img2"/>
        </div>
        :
        <div className="col-sm-6 ourvision-text">
        <h3>About Us</h3>
          <p>
         What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
          </p>
          <p>
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
          </p>
          <p>
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
          </p>
          <p>
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
          </p>
        </div>}

   
        <div className="col-sm-6 text-center spirit">
          <p className="text-center hover">Hover over the shadow</p>
          <img className="img-fluid spirit-img"  
              src={img1} 
              onMouseOver={() => play()} 
              onMouseOut ={() => pause()}
              alt="img1">
            </img>
        </div>
      </div>
    </section>
      </div>
  );
};

export default OurVison;
