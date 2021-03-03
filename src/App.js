import React from 'react'
import Home from './screens/Home'
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from "react-router-dom";
import Skills from './screens/Skills';
import {Helmet} from 'react-helmet'

function App() {
  const location = useLocation();

  return (
    <>
    <Helmet>
          <title>Nitesh Rawat</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Helmet>
        
          <Home />
          <Skills />
          </>
  )
}

export default App
