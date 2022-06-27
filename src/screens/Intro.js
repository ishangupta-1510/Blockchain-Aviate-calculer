import React from 'react'
import './Intro.css'
import Typewriter from "typewriter-effect";
function Intro() {
  return (
    <div  className="pad">
        <div className='box'> 
            <h1>Hi There!{"  "}
                <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                </span>
            </h1>
        </div>
        <div className='box1'> 
            <h1>Wanna Learn About Blockchain</h1>
        </div>
        <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString("You came to the right place").start();
            }}
        />
        <div  className='sp'>
            <a className='round' href='#next'>⬇</a>
        </div>
    </div>
  )
}

export default Intro