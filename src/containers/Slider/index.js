import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = (data?.focus || [0,1,2])
  .sort((evtB, evtA) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(prev => prev < byDateDesc.length - 1 ? prev + 1 : 0);
    }, 5000);
    return () => clearTimeout(timer);
  }, [index]);
  let compteur = 0;
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => {
        compteur+=1;
        return(<div key={compteur} className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}>
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>)
})}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((event, radioIdx) => {
            compteur+=1;
         return (  <input
              key={compteur}
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
              onChange={()=>{setIndex(radioIdx)}}
            />)
})}
        </div>
      </div>
    </div>
  );
};

export default Slider;
