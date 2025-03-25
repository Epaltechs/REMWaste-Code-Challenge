import { getWastes } from "./data/waste"
import { getImageURL } from "./utils/image-util";

function App() {
  const wastes = getWastes();
    return (
      <ul className="wastes">
      {
        wastes.map(waste => (
           <li
            className="waste-card" 
            key={waste.id}>
            <img 
              src={getImageURL(waste.postcode)} 
              alt={waste.name} 
              className="waste-card > img" />
            <h2 className="info-group > img">{waste.size}</h2>
            <p>{waste.hire_period_days}</p>
            <h3 className="info-group > p">{waste.price_before_vat}</h3>
            
           </li> 
        ))
      }
    </ul>
  )
}

export default App
