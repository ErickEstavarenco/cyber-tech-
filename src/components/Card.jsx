// src/components/Card.jsx
import React from 'react';
import styles from './Card.module.css';

function Card({ children, className = '', ...props }) {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {children}
    </div>
  );
}

export default React.memo(Card);

