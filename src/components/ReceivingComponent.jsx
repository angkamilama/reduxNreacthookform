import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import displayCSS from '../module.css/ReceivingComponent.module.css';


const ReceivingComponent = () => {

  const generatedCountry = useSelector((state) => {
    let country= [...state.country];
    return country;
  })

 
  let filteredCountry = [...new Set(generatedCountry)];
 
  const countryName = filteredCountry.map(item=> {
    let uniqueKey = uuidv4();
    return (
      <div className={displayCSS.name} key={uniqueKey}>{item}</div>
    )
  }

  );
 

  return (
    <>
    <div className={displayCSS.name_display}>
      {countryName}
    </div>
    </>
  );
};

export default ReceivingComponent;
