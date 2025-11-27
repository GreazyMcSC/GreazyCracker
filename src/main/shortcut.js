/**
 * Author  : GreazyMcSC
 * Package : GreazyCracker | Reverse Engineering Toolkit AIO
 * Version : 1.5.x
 * Link    : https://github.com/GreazyMcSC/GreazyCracker
 * license : MIT
 */

const { globalShortcut } = require('electron');

/**
 * Register global shortcuts.
 */
function registerShortcuts() {
	// Disable default shortcuts that might interfere
	globalShortcut.register('CommandOrControl+W', () => false);
	globalShortcut.register('CommandOrControl+R', () => false);
}

module.exports = registerShortcuts;
