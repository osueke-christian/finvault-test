import React, { ReactNode } from 'react';
import './style.scss';

const Card: React.FC<{children: ReactNode}> = ({ children }) => (
  <div className="card">
    {children}
  </div>
);

export default Card;
