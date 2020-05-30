import React from 'react';

const Hoverable: React.FC<{
  onHoverStart?(): void;
  onHoverEnd?(): void;
  children?: React.ReactNode;
}> = ({ onHoverStart = () => {}, onHoverEnd = () => {}, children }) => {
  return (
    <div style={{ cursor: 'pointer' }} onMouseEnter={onHoverStart} onMouseLeave={onHoverEnd}>
      {children}
    </div>
  );
};

export default Hoverable;
