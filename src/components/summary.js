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
    const [spentValue, setSpentValue ] = useState()

    useEffect (() => {
        console.log(spentValue)
    }, [spentValue])

    return (
        <div className="summary">
            <div className='title-container'>
            <b>Your Weekly Summary:</b>
            </div>
            <div className='content-container'>
                <SpentRowItem amount="$40" day="Sunday" />
                <SpentRowItem amount="$30" day="Monday" />
                <SpentRowItem amount="$40" day="Tuesday" />
                <SpentRowItem amount="$70" day="Wednesday" />
                <SpentRowItem amount="$80" day="Thursday" />
                <SpentRowItem amount="$50" day="Friday" />
                <SpentRowItem amount="$120" day="Saturday" />
            </div>
            <div className='spent-container'>
                <p>How much have you spent today? &nbsp; </p>
                $<input placeholder='Ex. 35' value={spentValue} onChange={e => setSpentValue(e.target.value)} type="number"/> CAD
            </div>
        </div>
    )
}

export default Summary;