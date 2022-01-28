import LangSelection from '../../components/langSelection'
import NetflixLogo from './LandingHeaderLogo'
import Buttons from '../../components/button'
import StartCard from './LandingStartCard'

import "./landingHeader.css"

export default function Header() {
  return (
    <>
      <div className='header-wrapper'>
        <div className='header-container'>
        <NetflixLogo />  
        <LangSelection />
        <Buttons 
          name="auth-button" 
          nameContent='auth-button-content' 
          content='Войти' />
        </div>      
      </div> 
      <StartCard />
    </>       
  )
} 