import React from 'react';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header className="header">
      
      <h1>Welcome to My Simple React App</h1>
      
      
      <h2>About This Application</h2>
      
     
      <p>
        This is a simple React application built to demonstrate the core features of React, including components, props, state management, and more.
      </p>

     
      <h3>Our Goals</h3>
      <ul>
        <li>Demonstrate basic React features</li>
        <li>Create reusable components</li>
        <li>Implement state and props</li>
        <li>Develop a clean and responsive UI</li>
      </ul>

     
      <h3>Technologies Used</h3>
      <div>
        <ul>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>Responsive Web Design</li>
          <li>State Management with React Hooks</li>
        </ul>
      </div>

     
      <h3>Features</h3>
      <ul>
        <li>Built with React.js</li>
        <li>Responsive Design</li>
        <li>Dynamic Rendering</li>
        <li>Easy to use interface</li>
        <li>Interactive Buttons and Modals</li>
      </ul>

     
      <button onClick={() => alert('Button clicked!')}>
        Me
      </button>
    </header>
  );
}

export default Header;
