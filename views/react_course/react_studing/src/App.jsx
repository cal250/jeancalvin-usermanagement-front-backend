
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import MainPage from './pages/Mainpage'

// const routes=createBrowserRouter([
//   {
//     path:"/",
//     element:<MainPage />
//   }
// ])

// function App() {
//   return <RouterProvider router={routes}/>
// }




// export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeneralInformation from "./components/Generalinformation";
function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<GeneralInformation/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
