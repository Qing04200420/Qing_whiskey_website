import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from "./Components";
import { Home, AboutPage, ProductPage } from './Pages';
const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/product' element={<ProductPage />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App;