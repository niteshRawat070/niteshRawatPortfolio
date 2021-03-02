import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

function Card(props) {
    const cardVariant={
        hover:{
            scale:1.10,
            transition:{
                duration:0.1,
                delay:0.1
            }
        }
    }
    return (
        <motion.div
        variants={cardVariant}
        whileHover='hover'
        drag
        className='whileHover'
        dragElastic={1}
        dragConstraints={{left:0,top:0,right:0,bottom:0}}
        style={{border:'0.5px solid lightgray',display:'flex',flexDirection:'column',margin:'10px',alignItems:'center',justifyContent:'center',width:'20%',borderRadius:'20px',boxShadow: "5px 5px 5px lightgray"}}>
            <div>
                <p style={{color:'GrayText',textAlign:'center'}}>{props.title}</p>
            </div>
            <div>
                <img src={props.image} width='25px' height='25px' style={{borderRadius:'100px'}} />
            </div>
            <span className='tooltip' style={{textAlign:'center'}}>{props.tooltipText}</span>
        </motion.div>
    )
}

export default Card
