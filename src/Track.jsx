import React from 'react';

const Track = ({ className, included, vertical, offset, length, trackStyles }) => {
  const style = {
    visibility: included ? 'visible' : 'hidden',
  };
  if (vertical) {
    style.bottom = `${offset}%`;
    style.height = `${length}%`;
  } else {
    style.left = `${offset}%`;
    style.width = `${length}%`;
  }

  const customizedStyles = {...style, ...trackStyles };
  return <div className={className} style={customizedStyles} />;
};

export default Track;
