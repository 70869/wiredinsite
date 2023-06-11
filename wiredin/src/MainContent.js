import React from 'react';
import logo from './images/logo.png';
import Header from './Header.js'; 
import Footer from './Footer.js'

function MainContent() {
  return (
    <div style={{ 
      position: 'relative',
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundImage: 'url(https://cdn.discordapp.com/attachments/1075065323860009020/1117415687963549858/2023-06-09_17.40.02.png)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1
      }} />
      <Header style={{ zIndex:2 }} /> {/* set the z-index to a higher value */}
      <main style={{ 
        flex: 1,
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.3)', 
          padding: '30px', 
          borderRadius: '25px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center'
        }}>
          <img src={logo} alt="(wired-in) logo" style={{ maxWidth: '75%' }} />
          <p style={{ color: 'white', fontSize: '1.25rem', fontWeight: '600'}}>Autumn 23</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainContent;
