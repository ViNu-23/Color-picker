import { useState } from 'react';
import './App.css';
import profile from './images/profile.png';
import rgbHex from 'rgb-hex';

function App() {
  const [color, setColor] = useState('#FF0000');
  const [input, setInput] = useState('Jhon Doe');

  function handleClick(e) {
    let id = e.target.id
    let a = document.getElementsByClassName('cards');
    for (let i = 0; i < 9; i++) {
      if (id === a[i].id) {
        a[i].style.width = '132px';
        a[i].style.height = '132px';
      } else {
        a[i].style.width = '100px';
        a[i].style.height = '100px';
      }
    }
    let d = '#' + rgbHex(e.target.style.backgroundColor);
    setColor(d)

  }
  function handleChange(e) {
    setInput(e.target.value)
  }


  return (
    <div>
      <h1>Card Color Picker</h1>

      <div className='first'>
        <p className='cards' id='lightBlue' style={{ backgroundColor: '#2EC4B6', width: '100px', height: '100px' }} onClick={handleClick}></p>
        <p className='cards' id='darkGrey' style={{ backgroundColor: '#0A1128', width: '100px', height: '100px' }} onClick={handleClick}></p>
        <p className='cards' id='red' style={{ backgroundColor: '#FF0000', width: '132px', height: '132px' }} onClick={handleClick}></p>
        <p className='cards' id='lightYellow' style={{ backgroundColor: '#CCFF66', width: '100px', height: '100px' }} onClick={handleClick}></p>
        <p className='cards' id='lightGrey' style={{ backgroundColor: '#605856', width: '100px', height: '100px' }} onClick={handleClick}></p>
        <p className='cards' id='darkBlue' style={{ backgroundColor: '#5D2E8C', width: '100px', height: '100px' }} onClick={handleClick}></p>
        <p className='cards' id='ash' style={{ backgroundColor: '#899878', width: '100px', height: '100px' }} onClick={handleClick}></p>
        <p className='cards' id='lightOrange' style={{ backgroundColor: '#FED18C', width: '100px', height: '100px' }} onClick={handleClick}></p>
        <p className='cards' id='lightPink' style={{ backgroundColor: '#DB7F8E', width: '100px', height: '100px' }} onClick={handleClick}></p>
      </div>

      <div className='second'>
        <div className='sFirst' style={{ backgroundColor: color }}>
          <img src={profile} alt='Dan Abramov' />
          <p className='sfName' >{input}</p>
        </div>
        <div className='sSecond'>
          <p className='line1' >Design my Card</p>
          <p className='line2' >Hey there User! Want to build your personalised card? Choose a colour from the palette above and fill your name</p>
          <p className='line3' >Your selected colour is <b>{color}</b></p>
          <p className='line4' >Name</p>
          <input className='input1' name='name' value={input} onChange={handleChange} ></input>
        </div>
      </div>
    </div>
  )
}


export default App;