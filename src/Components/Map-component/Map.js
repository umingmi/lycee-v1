import './MapStyles.css';
import buildings from '../../Assets/buildings.svg';

export default function Map() {
    return(
        <>
        <div className='map-container'>
            <h1>Campus Map</h1>
            <img src={buildings} alt='buildings' className='campus-map'/>

            <a href="/">
                <div className="buildings coecsa-building"></div>
            </a>
        
            <a href="/">
                <div className="buildings annex-building"></div>
            </a>

        </div>
        </>
    )
}