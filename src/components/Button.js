import React from 'react';
const Button =({color,click,children}) => <button className = {color} onClick={click}>{children.toUpperCase()}</button>


export default Button;