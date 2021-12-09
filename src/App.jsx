import './App.css'
// Components
import Header from './components/Header/Header'
import Discover from './components/Discover/Discover'
import Destination from './components/Destination/Destination'
import Cards from './components/Cards/Cards'
import AboutUs from './components/About Us/AboutUs'
import Footer from './components/Footer/Footer'

export default function App() {
    return (
        <div>
            <div className="main">
                <Header />
                <Discover />
                <Destination />
                <Cards />
                <AboutUs />
            </div>
            <Footer />
        </div>
    )
}

