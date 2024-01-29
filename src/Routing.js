import React from "react";
import { Home } from './redux/Home';
import { Form } from './redux/Form';
import { Login } from './redux/Login';
import { AccCreate } from './redux/AccCreate';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux";
export const Routing = () => {
    const s = useSelector((d) => d.data)
    return (
        <BrowserRouter>
            {
                s.isAuth ?
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/' element={<Form />} />
                    </Routes> :
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/accreate' element={<AccCreate />} />
                    </Routes>
            }
        </BrowserRouter>
    )

}