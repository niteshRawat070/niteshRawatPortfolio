import React, { useState } from 'react'
import {motion} from 'framer-motion'
import '../App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Project1(props) {
    const cardVariant={
        hover:{
            scale:1.01,
            transition:{
                duration:0.1,
                delay:0.1
            }
        }
    }
    const [show,setShow]=useState(false)
    return (
        <motion.div
        variants={cardVariant}
        whileHover='hover'
        drag
        className='whileHover'
        dragElastic={1}
        onHoverStart={()=>setShow(true)}
        onHoverEnd={()=>setShow(false)}
        dragConstraints={{left:0,top:0,right:0,bottom:0}}
        style={{border:'0.5px solid lightgray',display:'flex',flexDirection:'column',margin:'10px',alignItems:'center',justifyContent:'center',width:'70%',height:'80%',borderRadius:'20px',boxShadow: "5px 5px 5px lightgray",marginTop:'20px'}}>
            <div style={{width:'100%'}}>
                <img className='imageSize' src={props.image} width='100%' />
            </div>
            <div>
                <p style={{color:'GrayText',textAlign:'center'}}>{props.title}</p>
            </div>
            {show && (
                <motion.div 
                initial={{
                    opacity:0,
                    scale:0.5
                }}
                animate={{
                    opacity:1,
                    scale:1
                }}
                transition={{
                    delay:0.10,
                    duration:0.7
                }}
                style={{position:'absolute',
                alignItems:'center',
                justifyContent:'center',
                display:'flex',
                height:'100%',
                width:'100%',
                background:'rgba(0, 0, 0, 0.450)'}}>
                              <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} stopOnHover={false} showThumbs={false} showStatus={false} showArrows={false} showIndicators={false}> 
                      <div>
                      <img src={props.carousel1} height='100%' width='100%'/>
                      </div>
                      <div>
                      <img src={props.carousel2} height='100%' width='100%'/>
                      </div>
                      <div>
                      <img src={props.carousel3} height='100%' width='100%'/>
                      </div>
                      <div>
                      <img src={props.carousel4} height='100%' width='100%'/>
                      </div>
                      <div>
                      <img src={props.carousel5} height='100%' width='100%'/>
                      </div>
                      <div>
                      <img src={props.carousel6} height='100%' width='100%'/>
                      </div>
                      </Carousel>
                      <span className='tooltip' style={{textAlign:'center'}}>{props.tooltipText}</span>
                              </motion.div>
            ) }
        </motion.div>
    )
}

export default Project1
