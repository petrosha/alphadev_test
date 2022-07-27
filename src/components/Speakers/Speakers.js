import "./Speakers.css";

import{useRef,useEffect} from "react";  
import{useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/ui-slice.js";
import {dataActions} from "../../store/data-slice.js";

import axios from "axios";

const SpeakerCard=({data})=>{
  return (
    <div className="speaker__card">
      <img src={data.photo_url} alt={data.name} className="speaker__photo" />
      <h3 className="speaker__name">
        {data.name}
      </h3>
      <div className="speaker__line"></div>  
      <p className="speaker__description">
        {data.description}
      </p>
      <a href="#2" className="speaker__link">Подробнее</a>
    </div>
  )
}

const Speakers = () =>{

  const speakersRef= useRef();
  const dispatch=useDispatch();

  const onWindowScroll = () => {
    dispatch(uiActions.setSpeakersOffset(speakersRef.current.getBoundingClientRect().top + window.pageYOffset));
  };

  const loadData = async () =>{
    try{
      const data = await axios.get("https://pro.alphadevteam.com/api/tz/speakers");
      
      if(data.status === 200 && data?.data?.success){
        dispatch(dataActions.setUsers(data.data.response))
      }
      else {
        throw(new Error("Can't fetch data!"));
      }  
    }
    catch(err){
      console.log(err);
    };
  }

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
    loadData();
    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  const data = useSelector(state => state.data.users);

  return (
    <div ref={speakersRef} className="speakers">
      <div className="wrapper">
        <h2 className="speakers__title">
          Спикеры нашего форума
        </h2>
        <div className="speakers__grid">
          {
            data.map((el,idx)=>{
              return(
                <SpeakerCard key={idx} data={el}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );

}

export default Speakers;