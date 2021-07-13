import React from 'react';

const Labels = ({ item, index }) => (
  <div>
    <span>{index+1})  </span>
    <span>{item}</span>
  </div>
);

export default Labels;
