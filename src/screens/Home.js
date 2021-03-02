import React from "react";
import "../App.css";
import {motion} from 'framer-motion'
import {useHistory,Link} from 'react-router-dom'

function Home() {
  const history=useHistory();
  const buttonVariants={
    ini:{
      opacity:0.5
    },
    hover:{
      scale:1.1,
      opacity:1,
      color:'gray',
      textShadow:"0px 0px 1px rgb(255,255,255)",
      // boxShadow:" 0px 0px 8px rgb(255,255,255)" ,
      transition:{
        duration:0.3,
        yoyo:Infinity
      }      
    }
  }
  const containerVariants={
    hidden:{
      opacity:0.9
    },
    visible:{
      opacity:1,
      transition:{
        delay:0.5,
        duration:1.5
      }
    },
    exit:{
      x:'-100vh',
      transition:{
        ease:'easeInOut',
        duration:1
      }
    }
  }
  const imageVariant={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:[0,0.2,0.4,0.6,0.8,1],
        transition:{
            duration:0.5,
            yoyo:Infinity
        }
    }
}
  return (
    <motion.div 
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'
    className="homeContainer">
        <div style={{position:'absolute',width:'100%',display:'flex',alignItems:'flex-start',justifyContent:'flex-start',margin:'10px',overflow:'hidden'}}>
          <motion.div
          initial={{
            x:'-50vw'
          }}
          animate={{
            x:0
          }}
          transition={{
            duration:3,
            delay:0.25,
            type:'tween'
          }}
          style={{margin:'5px'}}>
        <Link to={()=>{
                  window.open('https://www.instagram.com/nicky_rwt/', '_blank')
                }}>
        <img src={'https://image.flaticon.com/icons/png/512/174/174855.png'} height='30px' width='30px'
        // style={{position:'absolute',right:'95vw',top:'5px'}}
        /></Link>
        </motion.div>
        <motion.div 
        initial={{
          y:'-50vw'
        }}
        animate={{
          y:0
        }}
        transition={{
          duration:3,
          delay:0.25,
          type:'tween'
        }}
        style={{margin:'5px'}}>
        <Link to={()=>{
                  window.open('mailto:rawatnitesh066@gmail.com', '_blank')
                }}>
        <img src={'https://www.flaticon.com/svg/vstatic/svg/732/732200.svg?token=exp=1613191346~hmac=9f46d3998db50675ec2a080b06c42040 '} height='30px' width='30px'
        // style={{position:'absolute',right:'90vw',top:'5px'}}
        /></Link>
        </motion.div>
        <motion.div 
        initial={{
          x:'150vw'
        }}
        animate={{
          x:0
        }}
        transition={{
          duration:3,
          delay:0.25,
          type:'tween'
        }}
        style={{margin:'5px'}}>
        <Link to={()=>{
                  window.open('https://github.com/niteshRawat070', '_blank')
                }}>
        <img src={'https://www.flaticon.com/svg/vstatic/svg/733/733609.svg?token=exp=1613191849~hmac=28185570eb05ae1474a78cb966570fd2 '} height='30px' width='30px'
        // style={{position:'absolute',right:'90vw',top:'5px'}}
        /></Link>
        </motion.div>
        <motion.div 
        initial={{
          x:'150vw'
        }}
        animate={{
          x:0
        }}
        transition={{
          duration:3,
          delay:1.25,
          type:'tween'
        }}
        style={{margin:'5px'}}>
        <Link to={()=>{
                  window.open('https://play.google.com/store/apps/developer?id=nickdeveloperX&hl=en_IN&gl=US', '_blank')
                }}>
        <img src={'https://www.flaticon.com/svg/vstatic/svg/300/300218.svg?token=exp=1614698120~hmac=e10e73efc70a3644c8342049cc11aeae '} height='30px' width='30px'
        // style={{position:'absolute',right:'90vw',top:'5px'}}
        /></Link>
        </motion.div>
        </div>
        
        {/* https://www.flaticon.com/svg/vstatic/svg/733/733609.svg?token=exp=1613191849~hmac=28185570eb05ae1474a78cb966570fd2 */}
      {/* div> */}
      <div className="introductionContainer">
      <motion.p 
      initial={{
        x:'-100vw'
      }}
      animate={{
        x:0
      }}
      transition={{
        duration:1,
        delay:0.25
      }}
      style={{ color: "rgb(194, 194, 194)",fontWeight:'bold',textAlign:'center', fontSize: "1.8rem",fontStyle:'oblique' }}>
        Hello, my name is Nitesh Rawat.
      </motion.p>
      <motion.p 
      initial={{
        x:'100vh'
      }}
      animate={{
        x:0
      }}
      transition={{
        duration:3,
        delay:0.50,
        type:'spring'
      }}
      style={{ color: "gray",textAlign:'center',margin:'0px 20vw',fontSize:'1.3rem',fontStyle:'oblique' }}>
        I am an <b>Web and Mobile</b> Application Developer. I'm a Computer Application graduate with a degree from Manav Rachna International University. Over the past 2 years, coding has developed into a passion of mine, specifically in Web and Mobile Development. 
      </motion.p>
      </div>
    </motion.div>
  );
}

export default Home;
