import React, { useState } from 'react'
import TimerApp from './TimerApp';
import Counter from './Counter';

function ThemeToggle() {
    const[isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () =>{
        setIsDarkMode(!isDarkMode);
    }
    const themeStyles = {
        backgroundColor: isDarkMode ? '#333' : '#FFF',
        color: isDarkMode ? '#FFF' : '#333',
        minHeight: '100vh',
        padding: '20px',
        transition: 'background-color 0.3s ease'
    }
    const buttonStyle = {
        padding: '10px',
        backgroundColor: isDarkMode ? '#555' : '#000fff',
        color: '#FFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    }
    const containerStyle = {
        display: 'flex',
        gap: '20px',
        marginTop: '20px'
    };
    const boxStyle = {
        flex: 1,
        padding: '20px',
        border: '1px solid',
        borderColor: isDarkMode ? '#777' : '#ccc',
        borderRadius: '8px'
    };

  return (
    <div style={themeStyles}>
        <h2>{isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
        <button onClick={toggleTheme} style={buttonStyle}> switch to {isDarkMode ? "Light Mode" : "Dark Mode"}</button>
        <div style={containerStyle}>
            <div style={boxStyle}>
            <TimerApp />
            </div>

            <div style={boxStyle}>
            <Counter />
            </div>
        </div>
    </div>
  )
}

export default ThemeToggle