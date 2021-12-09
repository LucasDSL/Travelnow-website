import './Cards.css'
import mountain from '../images/Mountains.png'
import desert from '../images/Desert.png'
import camping from '../images/Camping.png'
import stars from '../images/stars.png'

export default function Cards(){
    return(
        <section className="Destination-Cards container">
            <div className="Destination-card">
                <img src={mountain} alt="" className="Destination-place-img"/>
                <h2 className="blue-titles">Travel to mountains</h2>
                <img src={stars} alt="stars"/>
                <p>$6000</p>
            </div>
            <div className="Destination-card">
                <img src={desert} alt="" className="Destination-place-img"/>
                <h2 className="blue-titles">Travel to the Desert</h2>
                <img src={stars} alt="stars" />
                <p>$6000</p>
            </div>
            <div className="Destination-card">
                <img src={camping} alt="" className="Destination-place-img"/>
                <h2 className="blue-titles">Camping in Mountains</h2>
                <img src={stars} alt="stars"/>
                <p>$6000</p>
            </div>
        </section>
    )
}