import React from 'react';
import './Burger.css';

const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;

  return (
    <button
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      className="uk-flex uk-flex-column uk-flex-around"
      {...props}
      style={{
        position: 'absolute',
        top: '5%',
        left: '3rem',
        width: '4.7rem',
        height: '4.7rem',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        padding: '0',
        zIndex: '101',
      }}
    >
      <span
        className="line"
        style={{
          background: '#fff',
          transform: `${open ? 'rotate(45deg)' : 'rotate(0)'}`,
          position: `${open ? 'fixed' : 'relative'}`,
        }}
      />
      <span
        className="line"
        style={{
          background: '#fff',
          opacity: `${open ? '0' : '1'}`,
          transform: `${open ? 'translateX(20px)' : 'translateX(0)'}`,
          position: `${open ? 'fixed' : 'relative'}`,
        }}
      />
      <span
        className="line"
        style={{
          background: '#fff',
          transform: `${open ? 'rotate(-45deg) ' : 'rotate(0)'}`,
          position: `${open ? 'fixed' : 'relative'}`,
        }}
      />
    </button>
  );
};

export default Burger;
