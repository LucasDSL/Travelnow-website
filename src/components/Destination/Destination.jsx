import img from '../images/destination.svg'
import './Destination.css'

export default function Destination(){
    return(
        <section className="Destination container" id="Destination">
            <img src={img} alt="Couple Traveling" className="Destination-img"/>
            <article className="Destination-Info">
                <h2 className="blue-titles">Travel to any corner of the World</h2>
                <p className="grey-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                <div className="Company-status">
                    <p>
                        <span>20</span>
                        Years Experience                         
                    </p>
                    <p>
                        <span>55</span>
                        Destination Colaboration                       
                    </p>
                    <p>
                        <span>600+</span>
                        Tourists Destination                          
                    </p>
                </div>
                <a href="">Explore Destination</a>
            </article>
        </section>
    )
}