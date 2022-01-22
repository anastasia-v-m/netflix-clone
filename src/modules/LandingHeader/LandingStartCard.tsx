import "./landingHeader.css"
import EmailForm from "../../components/emailForm";
import cardData from "../LandingHeader/landingStartCardData.json"

export default function StartCard() {
  return (
    <div className='start-card'>
      <div className="start-card-background">
        <img 
          className="start-card-img" 
          src={cardData[0].imgSrc} 
          alt={cardData[0].altDescription} />
        <div className="img-gradient"></div>
      </div>
      <div className="start-card-content">
        <h1>{cardData[0].title}</h1>
        <h2>{cardData[0].annotation}</h2>
        <EmailForm />
      </div>
    </div>
  )
}