import styles from './header.module.scss';
import Navbar from "./Navbar/Navbar"
//import utilStyles from '../../styles/utils.module.scss';
export default function Header() {
    return (
      
       <section id='header' className={styles.header}>
        <Navbar />
        <h1 className={styles.header__title} > Kurku</h1>
        <p className={styles.header__p}>Body-tracking web MIDI controller powered by AI</p>

        <a className={styles.header__a} href="https://kurku.tech" target="_blank" >Launch Kurku!</a>
        <video 
            className={styles.header__iframe} 
            src="https://player.vimeo.com/progressive_redirect/playback/775608314/rendition/1080p/file.mp4?loc=external&signature=9db5fba2fb1846f0a6064661a94634c34934c4276bb848947acf6e4fb3c6a3c3" 
            autoPlay
            loop
            controlsList='play'
            muted
         />
        
       </section>
        
    )
  }