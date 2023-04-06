import React from 'react';
import './style.scss';

export default function TwoColumnLayout({
  title,
  paragraph,
  buttonText,
  imageSrc,
  imagePosition,
}) {
  const leftColumn = (
    <>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <button>{buttonText}</button>
    </>
  );

  const rightColumn = <img src={imageSrc} alt="" />;

  return (
    <div className="TwoColumnLayout">
      {imagePosition === 'left' ? (
        <>
          <div className="col">{rightColumn}</div>
          <div className="col">{leftColumn}</div>
        </>
      ) : (
        <>
          <div className="col textCol">{leftColumn}</div>
          <div className="col">{rightColumn}</div>
        </>
      )}
    </div>
  );
}
