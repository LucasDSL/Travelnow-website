import './AboutUs.css'
import van from '../images/van-to-camp.svg'
import ticket_service from '../images/ticket_service.svg'
import car_service from '../images/car_service.svg'
import plane_service from '../images/plane_service.svg'

export default function AboutUs(){
    return(
        <section className="About-us container" id="About-us">
            <img src={van} alt="Van-traveling" className="van-img"/>
            <article className="About-us-Info">
                <h2>Our Quality Services</h2>
                <div className="Services">
                    <img src={ticket_service} alt="ticket" className="Service-img"/>
                    <div>
                        <h3>Ticket</h3>
                        <p className="grey-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    </div>
                </div>
                <div className="Services">
                    <img src={car_service} alt="car" className="Service-img"/>
                    <div>
                        <h3>Driver</h3>
                        <p className="grey-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    </div>
                </div>
                <div className="Services">
                    <img src={plane_service} alt="plane" className="Service-img"/>
                    <div>
                        <h3>Tour</h3>
                        <p className="grey-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    </div>
                </div>
            </article>
        </section>
    )
}