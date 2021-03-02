import React from 'react'
import Home from './screens/Home'
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from "react-router-dom";
import Skills from './screens/Skills';

function App() {
  const location = useLocation();

  return (
    <>
          <Home />
          <Skills />
          </>
  )
}

export default App




// import React from 'react'
// import Home from './screens/Home'
// import { AnimatePresence } from 'framer-motion';
// import { Route, Switch, useLocation } from "react-router-dom";
// import Skills from './screens/Skills';

// function App() {
//   const location = useLocation();

//   return (
//     <AnimatePresence exitBeforeEnter>
//       <Switch location={location} key={location.key}>
//           <Route path="/home">
//           <Home />
//           </Route>
//           <Route path="/skills">
//           <Skills />
//           </Route>
//           <Route path="/">
//           <Home />
//           </Route>
//       </Switch>
//     </AnimatePresence>
//   )
// }

// export default App
