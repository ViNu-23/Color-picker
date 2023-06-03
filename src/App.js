import { useState } from 'react';
import './App.css';
import profile from './images/profile.png';
import rgbHex from 'rgb-hex';

function App() {
  const [color, setColor] = useState('#FF0000');
  const [input, setInput] = useState('Vijay Kumar');
  const [inputColor, setInputColor] = useState('#FFFFFF'); // New state variable for input field color

  function handleClick(e) {
    let id = e.target.id;
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
    setColor(d);
    setInputColor(d); // Update input field color

  }

  function handleChange(e) {
    setInput(e.target.value);
  }


  return (
    <div>
      <h1>Card Color Picker</h1>

      <div className='first'>
        <p className='cards' id='lightBlue' style={{ backgroundColor: '#2EC4B6', width: '80px', height: '100px' }} onClick={handleClick}></p>
        <p className='cards' id='darkGrey' style={{ backgroundColor: '#ff00ee', width: '80px', height: '100px' }} onClick={handleClick}></p>
        <p className='cards' id='red' style={{ backgroundColor: '#b500ff', width: '132px', height: '132px' }} onClick={handleClick}></p>
        <p className='cards' id='lightYellow' style={{ backgroundColor: '#8000ff', width: '80px', height: '100px' }} onClick={handleClick}></p>
        <p className='cards' id='lightGrey' style={{ backgroundColor: '#6900ff', width: '80px', height: '100px' }} onClick={handleClick}></p>
        <p className='cards' id='darkBlue' style={{ backgroundColor: '#000aff', width: '80px', height: '100px' }} onClick={handleClick}></p>
        <p className='cards' id='ash' style={{ backgroundColor: '#006eff', width: '80px', height: '100px' }} onClick={handleClick}></p>
        <p className='cards' id='lightOrange' style={{ backgroundColor: '#00d1ff', width: '80px', height: '100px' }} onClick={handleClick}></p>
        <p className='cards' id='lightPink' style={{ backgroundColor: '#00ffb3', width: '80px', height: '100px' }} onClick={handleClick}></p>
      </div>

      <div className='second'>
        <div className='sFirst' style={{ backgroundColor: color }}>
          <img src={profile} alt='Dan Abramov' />
          <p className='sfName' >{input}</p>
        </div>
        <div className='sSecond'>
          <p className='line1' >Design Card</p>

          <p className='line3' >Your selected colour is <b>{color}</b></p>
          <p className='line4' >Name</p>
          <input className='input1' name='name' value={input} onChange={handleChange} style={{ backgroundColor: inputColor }}></input>

        </div>
      </div>
    </div>
  )
}

export default App;
