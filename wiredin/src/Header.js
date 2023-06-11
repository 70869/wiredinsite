import React from 'react';
import discordIcon from './images/discord.svg'; // Replace with your own Discord icon
import youtubeIcon from './images/youtube.svg'; // Replace with your own YouTube icon

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.041)',
      backdropFilter: 'blur(40px)',
      padding: '10px 100px',
      color: 'white'
    }}>
      <h1>(wired-in)</h1>
      <div>
        <a href="https://discord.gg/y6kb6a9CcG" target="_blank" rel="noreferrer">
          <img src={discordIcon} alt="Discord" style={{ width: '24px', marginRight: '10px' }} />
        </a>
        <a href="https://youtube.com/" target="_blank" rel="noreferrer">
          <img src={youtubeIcon} alt="YouTube" style={{ width: '24px' }} />
        </a>
      </div>
    </header>
  );
}

export default Header;

