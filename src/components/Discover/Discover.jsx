import './Discover.css'
import img from '../images/Discover.png'

export default function Discover(){
    return (
        <section className="Discover container" id="Discover">
            <article className="Discover-Info">
                <h2 className="blue-titles">Find your next place to travel</h2>
                <p className="grey-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                <div>
                    <input type="text" placeholder="Burj Khalifa, Dub"/>
                    <button>Search</button>
                </div>
            </article>
            <img src={img} alt="Car traveling" className="Discover-img"/>
        </section>
    )
}