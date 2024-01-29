import {BrowserRouter, Route, Routes} from 'react-router-dom';

import History from './pages/history/history';
import Home from './pages/home/home';
import Checkout from './pages/checkout/checkout';

function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/history" element={<History/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;