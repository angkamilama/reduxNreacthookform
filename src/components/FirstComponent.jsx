import { useDispatch } from "react-redux";
import { addCountry } from "../slices/randomCountrySlice";
import styles from '../module.css/FirstComponent.module.css';

const FirstComponent = () => {
    const dispatch = useDispatch();
    let country =' ';
    const handleCountry = async() => {    
       const countryFinder = await fetch('https://randomuser.me/api/').then(response => response.json()).then(data => {
        country = data.results[0].location.country;
    });    
       const action = addCountry(country);
       dispatch(action);
    }
     return (
        <>
            <div className={styles.heading}>
                <h2>Click here to generate random Country</h2>
                <button onClick={handleCountry}>Click!</button>

            </div>
        </>
    )
}


export default FirstComponent;