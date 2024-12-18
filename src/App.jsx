import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import Chat from "./pages/Chat";
// import Settings from "./pages/Settings";
// import AuthProvider from "./contexts/AuthContext";
// import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    // <AuthProvider>
    //      { <Router>
    //       <Routes>
    //         <Route path="/" element={<Login />} />
    //         <Route path="/signup" element={<SignUp />} />
    //         <Route
    //           path="/chat"
    //           element={
    //             <PrivateRoute>
    //               <Chat />
    //             </PrivateRoute>
    //           }
    //         />
    //         <Route
    //           path="/settings"
    //           element={
    //             <PrivateRoute>
    //               <Settings />
    //             </PrivateRoute>
    //           }
    //         />
    //       </Routes>
    //     </Router>
    //   </AuthProvider> */}
  );
};

export default App;
