import './App.css';
import sunny from './sunny.png';
import cloudy from './cloudy.png';
import rainy from './rainy.png';
import Weather from './Weather';

function App () 
{
    return (
        <div className='widget'>
            <div className='title'>
                <h1>Weather Widget</h1>
            </div>
            <div className='content'>
                <div className='weather'>
                    <Weather img={sunny} alt='sunny'/>
                </div>
                <div className='weather'>
                    <Weather img={cloudy} alt='cloudy'/>
                </div>
                <div className='weather'>
                    <Weather img={rainy} alt='rainy'/>
                </div>
            </div>
        </div>
    )
}

export default App;