import './Header.css'
import {useState} from 'react'

export default function Header(){
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }
    return (
        <header className="Header container">
            <h1 className="main-title" onClick={ToggleMode}>
                Travel<span>now</span>
            </h1>
            <div className="menu-dropdown">
                <div className={active? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
                    <div className="burguer burguerIcon"></div>
                </div>
                <div className={active? 'menu menuOpen' : 'menu menuClose'}>
                    <div className="list">
                        <ul className="listItems">
                            <li><a href="#Discover" className="grey-text" onClick={ToggleMode}>Discover</a></li>
                            <li><a href="#Destination" className="grey-text" onClick={ToggleMode}>Destination</a></li>
                            <li><a href="#About-us" className="grey-text" onClick={ToggleMode}>About us</a></li>
                        </ul>
                        <button className="book-a-tour-btn" >Book a tour</button>
                    </div>
                </div>
            </div>
            <ul>
                <li><a href="#Discover" className="grey-text">Discover</a></li>
                <li><a href="#Destination" className="grey-text">Destination</a></li>
                <li><a href="#About-us" className="grey-text">About us</a></li>
            </ul>
            <button className="book-a-tour-btn">Book a tour</button>
        </header>
    )
}