import LangSelection from '../components/lang-selection'
import NetflixLogo from '../components/logo'
import '../styles/header-style.css'

export default function Header() {
  return (
    <div className='header-wrapper'>
      <div className='header-container'>
      <NetflixLogo />  
      <LangSelection />
      <button className='authButton'>Войти</button>
      </div>      
    </div> 
       
  )
} 