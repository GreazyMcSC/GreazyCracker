/**
 * Author  : GreazyMcSC
 * Package : GreazyCracker | Reverse Engineering Toolkit AIO
 * Version : 1.5.x
 * Link    : https://github.com/GreazyMcSC/GreazyCracker
 * license : MIT
 */

import React, { useState } from 'react';

const Header = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLogoClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1500);
  };

  return (
    <div className="heading-wrapper">
      <div className="image-wrapper">
        <img src="./app/assets/img/icon.svg" height="100" width="100">
      </div>
    </div>
  );
};

export default Header;
