import './summary.css'
import { useState, useEffect} from 'react'; 

const SpentRowItem = ({amount, day}) => {
    return ( 
        <div className='spent-row-item'>
                <b>Spent {day}:</b> <span>{amount} CAD</span>
        </div>
    )
}


const Summary = () => {
    const [kmTravel, setkmTravel] = useState()
    const [gasMileage, setGasMileage] = useState()

    useEffect (() => {
        console.log(kmTravel)
    }, [kmTravel])

    return (
        <div className="summary"> 
             <div className='content-container'>
                <SpentRowItem amount="$40" day="Sunday" />
                <SpentRowItem amount="$30" day="Monday" />
                <SpentRowItem amount="$40" day="Tuesday" />
                <SpentRowItem amount="$70" day="Wednesday" />
                <SpentRowItem amount="$80" day="Thursday" />
                <SpentRowItem amount="$50" day="Friday" />
                <SpentRowItem amount="$120" day="Saturday" />
            </div>
            <div className='title-container'>
            <b>Your Weekly Summary:</b>
            </div>
            <div className='spent-container'>
                <p>How much have you spent today? &nbsp; </p>
                <div>   
                    Kilometers travelled: <input placeholder='Ex. 30' value={kmTravel} onChange={e => setkmTravel(e.target.value)} type="number"/> km
                </div>
                <div>
                    Gas Mileage: <input placeholder='Ex. 12 L' value={kmTravel} onChange={e => setkmTravel(e.target.value)} type="number"/> / 100km
                </div>
                <p>Note: Current gas price is <span>229</span>, as estimated by <a href="https://rapidapi.com/collectapi/api/gas-price/pricing">RapidAPI</a></p>
            </div>
        </div>
    )
}

export default Summary;