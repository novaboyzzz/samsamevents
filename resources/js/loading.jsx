//react import
import React from 'react';

import '../scss/loading.scss'

//create function
const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div class="loading-screen__shadow" />
      <div class="loading-screen__ball">
        S&S
      </div>
    </div>
  );
};

export default LoadingScreen;
