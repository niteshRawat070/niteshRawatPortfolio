import React, { useState } from 'react'
import skills from '../images/skills.jpg'
import {motion} from 'framer-motion'
import {GiSkills} from 'react-icons/gi'
import {GrProjects} from 'react-icons/gr'
import Card from '../component/Card'
import Project from '../component/Project'
import Project1 from '../component/Project1'
import {Link} from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ecom1 from '../images/ecommerce1.jpg'
import ecom2 from '../images/ecommerce2.jpg'
import ecom3 from '../images/ecommerce3.jpg'
import ecom4 from '../images/ecommerce4.jpg'
import chat1 from '../images/chat1.jpg'
import chat2 from '../images/chat2.jpg'
import chat3 from '../images/chat3.jpg'
import chat4 from '../images/chat4.jpg'
import pizza1 from '../images/pizza1.jpg'
import pizza2 from '../images/pizza2.jpg'
import pizza3 from '../images/pizza3.jpg'
import pizza4 from '../images/pizza4.jpg'
import dictionary1 from '../images/dictionary1.jpg'
import dictionary2 from '../images/dictionary2.jpg'
import dictionary3 from '../images/dictionary3.jpg'
import dictionary4 from '../images/dictionary4.jpg'
import house1 from '../images/house1.jpg'
import house2 from '../images/house2.jpg'
import house3 from '../images/house3.jpg'
import house4 from '../images/house4.jpg'
import ca1 from '../images/ca1.jpg'
import ca2 from '../images/ca2.jpg'
import ca3 from '../images/ca3.jpg'
import ca4 from '../images/ca4.jpg'
import ca5 from '../images/ca5.jpg'
import ca6 from '../images/ca6.jpg'
import ca7 from '../images/ca7.jpg'
import corona1 from '../images/corona1.jpg'
import corona2 from '../images/corona2.jpg'
import corona3 from '../images/corona3.jpg'
import corona4 from '../images/corona4.jpg'
import corona5 from '../images/corona5.jpg'
import corona6 from '../images/corona6.jpg'
import corona7 from '../images/corona7.jpg'
import news1 from '../images/news1.jpg'
import news2 from '../images/news2.jpg'
import news3 from '../images/news3.jpg'
import news4 from '../images/news4.jpg'
import Footer from '../component/Footer'



function Skills() {
    const [show,setShow]=useState(false)
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
    const containerVariants={
        hidden:{
          opacity:0,
          x:'100vw'
        },
        visible:{
          opacity:1,
          x:0,
          transition:{
            type:'spring',
            delay:0.5
          }
        },
        exit:{
          x:'-100vh',
          transition:{
            ease:'easeInOut'
          }
        }
      }
    return (
        <>
        {/* <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='skillsImageContainer'>
            <img src={skills} height='100%' width='100%' />
            <div className='skillTextContainer'>
                <p className='skillText'>My Skills</p>
            </div>
            <div className='scrollButton'>
               <motion.img
               variants={imageVariant}
               initial='hidden'
               animate='visible'
               src={'https://static.thenounproject.com/png/368837-200.png'} height='50px' width='70px' style={{marginTop:'30rem'}} />
            </div>
        </motion.div> */}
        <div style={{display:'flex',flex:1,overflowX:'hidden',background:'linear-gradient(to right,#fafafa,#e8e8e8)'}}>
            <div style={{display:'flex',flex:1,height:'100%',width:'100%',flexDirection:'column',marginTop:'20px',overflowX:'hidden'}}>
              <h2 className='skillText2'>Skills <GiSkills /></h2>
              {/* <h3 className='skillText2'>Framework and Libraries:</h3> */}
              <div style={{margin:'10px',display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'center'}}>
                <Card tooltipText='Web Application Development / Javascript library' title="React JS" image='https://cdn.auth0.com/blog/react-js/react.png' />
                <Card tooltipText='Mobile Application Development / Javascript framework' title="React Native" image='https://www.pinclipart.com/picdir/middle/207-2071102_es7-snippets-react-native-icon-png-clipart.png' />
                <Card tooltipText='Programming language for client side and server side' title="Javascript" image='https://www.appstudio.ca/services/assets/images/tech-stack-icons/javascript.svg' />
                <Card tooltipText='MongoDB ExpressJS React/React_Native NodeJS' title="MERN Stack" image='https://image.winudf.com/v2/image1/bGVhcm4ubWVybi5zdGFja19zb2Z0ZHJvaWRfaWNvbl8xNTk2ODUzNTAzXzAwMQ/icon.png?w=170&fakeurl=1' />
                </div>
              <div style={{margin:'10px',display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'center'}}>
                <Card tooltipText='HyperText Markup Language' title='HTML' image='https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/167_Html5-512.png'/>
                <Card tooltipText='How HTML elements are to be displayed on screen / Styling web pages' title='CSS' image='https://cdn.iconscout.com/icon/free/png-512/css3-8-1175200.png'/>
                <Card tooltipText='HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites' title='Bootstrap' image='https://img.icons8.com/color/452/bootstrap.png'/>
                <Card tooltipText='Syntactically Awesome Style Sheets / CSS pre-processor' title='SASS' image='https://cdn.iconscout.com/icon/free/png-512/sass-226054.png'/>
              </div>
              <div style={{margin:'10px',display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'center'}}>
                <Card tooltipText='It is a document-oriented database which stores data in JSON-like structure' title='MongoDB' image='https://icon2.cleanpng.com/20180402/cjw/kisspng-mongodb-inc-computer-software-business-software-d-bay-leaves-5ac2915d780ea2.2723311115227006374918.jpg'/>
                <Card tooltipText='Framework for nodeJS' title='Express JS' image='https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png'/>
                <Card tooltipText='A predictable state container for JavaScript apps' title='REDUX' image='https://cdn.iconscout.com/icon/free/png-256/redux-283024.png'/>
                <Card tooltipText='JavaScript runtime built on Chrome V8 JavaScript engine' title='Node JS' image='https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png'/>
              </div>
              <div style={{margin:'10px',display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'center'}}>
              <Card tooltipText='End-Points' title='RESTful API' image='https://img.icons8.com/ios/452/api-settings.png'/>
                <Card tooltipText='For creating SVG(Scalable Vector Graphics)' title='InkScape' image='https://cdn.iconscout.com/icon/free/png-512/inkscape-569205.png'/>
                <Card tooltipText='Animation, gestures, components, transforms and more' title='Framer Motion' image='https://reactjsexample.com/content/images/2020/04/motion.png'/>
                <Card tooltipText='A sequence of characters that define a search pattern' title='reg[ex]' image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/OOjs_UI_icon_regular-expression-progressive.svg/1024px-OOjs_UI_icon_regular-expression-progressive.svg.png'/>
              </div>
              <div style={{margin:'10px',display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'center'}}>
              <Card tooltipText='API development easy / CRUD operations' title='POSTMAN' image='https://user-images.githubusercontent.com/2676579/34940598-17cc20f0-f9be-11e7-8c6d-f0190d502d64.png'/>
                <Card tooltipText='Gaming Engine' title='Unreal Engine 4' image='https://cdn.iconscout.com/icon/free/png-512/unreal-engine-555438.png'/>
                <Card tooltipText='3D Modelling' title='Blender' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPab4JwXe5n8y8DnIHGpmaK34ySDyzJ2N6Ig&usqp=CAU'/>
                <Card tooltipText='Video Editing' title='Camtasia 9' image='https://cdn.iconscout.com/icon/free/png-256/camtasia-studio-569490.png'/>
              </div>
            </div>
          </div>
          {/* projects  */}
          <div style={{display:'flex',flex:1,height:'100%',width:'100%',flexDirection:'column',overflow:'hidden',background:'linear-gradient(to right,#fafafa,#e8e8e8)'}}>
              <h2 className='skillText2'>Projects <GrProjects /></h2>
              {/* <h3 className='skillText2'>Framework and Libraries:</h3> */}
              <div style={{margin:'10px',display:'flex',flexDirection:'column',height:'100%',alignItems:'center',justifyContent:'center',overflowX:'hidden'}}>

                <Link to={()=>{
                  window.open('https://github.com/niteshRawat070/chatApplication', '_blank')
                }} style={{display:'flex',width:'100%',textDecoration:'none',alignItems:'center',justifyContent:'center'}}>
                <Project tooltipText='React + Redux + Socket.io' title="Chat Application" image={chat2} carousel1={chat3} carousel2={chat1} carousel3={chat4} />
                </Link>
                
              <Link to={()=>{
                  window.open('https://github.com/niteshRawat070/eCommerceClothing', '_blank')
                }} style={{display:'flex',width:'100%',textDecoration:'none',alignItems:'center',justifyContent:'center'}}>
                <Project tooltipText='React + Redux + ExpressJS + MongoDB' title="E-Commerce Clothing" image={ecom1} carousel1={ecom4} carousel2={ecom3} carousel3={ecom2} />
                </Link>
                

                <Link to={()=>{
                  window.open('https://github.com/niteshRawat070/nickHouseMern', '_blank')
                }} style={{display:'flex',width:'100%',textDecoration:'none',alignItems:'center',justifyContent:'center'}}>
                <Project tooltipText='React Native + Redux + MongoDB + Express and NodeJS' title="House Agent" image={house1} carousel1={house2} carousel2={house3} carousel3={house4} />
                </Link>

                <Link to={()=>{
                  window.open('https://play.google.com/store/apps/details?id=com.caliAesthetic.nick&hl=en_IN&gl=US', '_blank')
                }} style={{display:'flex',width:'100%',textDecoration:'none',alignItems:'center',justifyContent:'center'}}>
                <Project1 tooltipText='React Native' title="CaliAesthetic(Fitness Application)" image={ca1} carousel1={ca2} carousel2={ca3} carousel3={ca4} carousel4={ca5} carousel5={ca6} carousel6={ca7} />
                </Link>


                <Link to={()=>{
                  window.open('https://github.com/niteshRawat070/covidTracker', '_blank')
                }} style={{display:'flex',width:'100%',textDecoration:'none',alignItems:'center',justifyContent:'center'}}>
                <Project1 tooltipText='React Native + Axios' title="Covid-19 Tracker" image={corona1} carousel1={corona2} carousel2={corona3} carousel3={corona4} carousel4={corona5} carousel5={corona6} carousel6={corona7}/>
                </Link>

                <Link to={()=>{
                  window.open('https://github.com/niteshRawat070/pizzaOnTheWay', '_blank')
                }} style={{display:'flex',width:'100%',textDecoration:'none',alignItems:'center',justifyContent:'center'}}>
                <Project tooltipText='React + Framer Motion' title="Pizza onTheWay" image={pizza1} carousel1={pizza2} carousel2={pizza3} carousel3={pizza4}/>
                </Link>

                <Link to={()=>{
                  window.open('https://github.com/niteshRawat070/nickNewsApplication', '_blank')
                }} style={{display:'flex',width:'100%',textDecoration:'none',alignItems:'center',justifyContent:'center'}}>
                <Project tooltipText='React Native + Redux + Fetch' title="NEWS Now" image={news1} carousel1={news2} carousel2={news3} carousel3={news4}/>
                </Link>

                <Link to={()=>{
                  window.open('https://github.com/niteshRawat070/dictionary', '_blank')
                }} style={{display:'flex',width:'100%',textDecoration:'none',alignItems:'center',justifyContent:'center'}}>
                <Project tooltipText='React + Fetch' title="Dictionary" image={dictionary1} carousel1={dictionary2} carousel2={dictionary3} carousel3={dictionary4}/>
                </Link>


                </div>
              <Footer />
              </div>
        </>
    )
}

export default Skills
