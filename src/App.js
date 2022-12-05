import './App.css';
import React, {useState} from 'react';
import {Navigate, Routes, Route} from "react-router-dom";
import Nav from './components/nav/Nav';
import NotFound from "./pages/notfound/NotFound";
import Home from './pages/home/Home';
import Top5 from './pages/top5/Top5';
import Login from "./pages/login/Login"
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register"
function App() {
    const [auth, setAuth] = useState(false)
    return (<>

        <Nav auth={auth} setAuth={setAuth}/>


        <Routes>
            {/*<Route path="/events" element={<Events/>}/>*/}
            <Route path="/" element={ auth ? <Home/> : <Navigate to = "/"/>}/>
            <Route path="/Login" element={<Login/>}/>
            {/*<Route path="/maps" element={<Maps/>}/>*/}
            <Route path="*" element={<NotFound/>}/>
            {/*<Route path="/places" element={<Places/>}/>*/}
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/register" element={<Register/>}/>
            {/*<Route path="/repair" element={<Repair/>}/>*/}
            {/*<Route path="/shop" element={<Shop/>}/>*/}
            {/*<Route path="/strava" element={<Strava/>}/>*/}
            <Route path="/top5" element={<Top5/>}/>
            {/*<Route path="/login" element={</>}/>*/}
        </Routes>


    </>);
}

export default App;
