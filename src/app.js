/**
 * Author  : GreazyMcSC
 * Package : GreazyCracker | Reverse Engineering Toolkit AIO
 * Version : 1.5.x
 * Link    : https://github.com/GreazyMcSC/GreazyCracker
 * license : MIT
 */

'use strict';

import React from 'react';
import { createRoot } from 'react-dom/client';
import Launcher from './app/launcher';

const root = document.getElementById('root');
createRoot(root).render(<Launcher />);
