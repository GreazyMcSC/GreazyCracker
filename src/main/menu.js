/**
 * Author  : GreazyMcSC
 * Package : GreazyCracker | Reverse Engineering Toolkit AIO
 * Version : 1.5.x
 * Link    : https://github.com/GreazyMcSC/GreazyCracker
 * license : MIT
 */

const { Menu, app, dialog } = require('electron');
const { reload, restart, openBinFolder, openChangelog, openUrl, downloadPackages, downloadAIAssistant, downloadAIAssistant2, downloadAIAssistant3, downloadAIAssistant4, downloadAIAssistant5, downloadAIAssistant6, downloadAIAssistant7, downloadAIAssistant8, downloadAIAssistant9, downloadAIAssistant10, downloadAIAssistant11, downloadAIAssistant12, downloadAIAssistant13, downloadAIAssistant14, downloadAIAssistant15, downloadAIAssistant16, downloadAIAssistant17, downloadAIAssistant18, downloadAIAssistant19, downloadAIAssistant20, downloadAIAssistant21 } = require('./helper');
const config = require('../config/app.json');

function createMenu(launcher) {
    const menu = Menu.buildFromTemplate(
        getTemplate(launcher)
    );
    Menu.setApplicationMenu(menu);
}

function getTemplate(launcher) {
    const toolsSubmenu = [
        {
            "label": 'Open File',
            click() {
                dialog.showOpenDialog({
                    properties: ['openFile'],
                    filters: [
                        { name: 'All Files', extensions: ['*'] },
                        { name: 'Executables', extensions: ['exe', 'dll', 'sys'] },
                        { name: 'Archives', extensions: ['zip', 'rar', '7z'] }
                    ]
                }).then(result => {
                    if (!result.canceled && result.filePaths.length > 0) {
                        const filePath = result.filePaths[0];
                        // Switch to AI tab
                        launcher.webContents.send('switch-to-ai');
                        // Send file for analysis
                        setTimeout(() => {
                            launcher.webContents.send('ai-analyze-file', filePath);
                        }, 300);
                    }
                });
            }
        },
        {
            "label": 'Search packages',
            "accelerator": 'Ctrl+F',
            click() {
                launcher.webContents.send('open-search');
            }
        },
        {
            "label": 'Download packages',
            "accelerator": 'Ctrl+Shift+D',
            click() { downloadPackages(launcher); }
        },
        { "type": 'separator' },
        {
            "label": 'Download all resources (4.5GB .torrent)',
            click() { downloadAIAssistant21(launcher); }
        },
        {
            "label": 'Download Analysing (.iso)',
            click() { downloadAIAssistant(launcher); }
        },
        {
            "label": 'Download Assembling (.iso)',
            click() { downloadAIAssistant2(launcher); }
        },
        {
            "label": 'Download Bypassing (.iso)',
            click() { downloadAIAssistant3(launcher); }
        },
        {
            "label": 'Download Calculating (.iso)',
            click() { downloadAIAssistant4(launcher); }
        },
        {
            "label": 'Download Comparing (.iso)',
            click() { downloadAIAssistant5(launcher); }
        },
        {
            "label": 'Download Converting (.iso)',
            click() { downloadAIAssistant6(launcher); }
        },
        {
            "label": 'Download Debugging (.iso)',
            click() { downloadAIAssistant7(launcher); }
        },
        {
            "label": 'Download Decoding (.iso)',
            click() { downloadAIAssistant8(launcher); }
        },
        {
            "label": 'Download Decompiling (.iso)',
            click() { downloadAIAssistant9(launcher); }
        },
        {
            "label": 'Download Dependencies (.iso)',
            click() { downloadAIAssistant10(launcher); }
        },
        {
            "label": 'Download Documentation (.iso)',
            click() { downloadAIAssistant11(launcher); }
        },
        {
            "label": 'Download Editing (.iso)',
            click() { downloadAIAssistant12(launcher); }
        },
        {
            "label": 'Download Encoding (.iso)',
            click() { downloadAIAssistant13(launcher); }
        },
        {
            "label": 'Download Extracting (.iso)',
            click() { downloadAIAssistant14(launcher); }
        },
        {
            "label": 'Download Hexing (.iso)',
            click() { downloadAIAssistant15(launcher); }
        },
        {
            "label": 'Download Packing (.iso)',
            click() { downloadAIAssistant16(launcher); }
        },
        {
            "label": 'Download Patching (.iso)',
            click() { downloadAIAssistant17(launcher); }
        },
        {
            "label": 'Download Programming (.iso)',
            click() { downloadAIAssistant18(launcher); }
        },
        {
            "label": 'Download Unpacking (.iso)',
            click() { downloadAIAssistant19(launcher); }
        },
        { "type": 'separator' },
        {
            "label": 'Download AI Assistant (Beta)',
            click() { downloadAIAssistant20(launcher); }
        },
        { "type": 'separator' },
        {
            "label": 'Explore',
            "accelerator": 'Ctrl+E',
            click() { openBinFolder(); }
        }
    ];

    const advancedSubmenu = [
        {
            "label": 'Settings',
            "enabled": false,
            "accelerator": 'Ctrl+S',
            click() {
                launcher.webContents.send('open-settings');
            }
        },
        { "type": 'separator' },
        {
            "label": 'Restart',
            "accelerator": 'Ctrl+R',
            click() { restart(app); }
        }
    ];

    if (config.debug) {
        advancedSubmenu.push(
            {
                "label": 'Reload',
                click() { reload(launcher); }
            }
        );
    }

    return [
        {
            "label": 'File',
            "submenu": toolsSubmenu
        },
        {
            "label": 'Advanced',
            "submenu": advancedSubmenu
        },
        {
            "label": 'Help',
            "submenu": [
                {
                    "label": 'Notice',
                    "accelerator": 'Ctrl+D',
                    click() {
                        launcher.webContents.send('open-notice');
                    }
                },
                {
                    "label": 'Changelog',
                    "accelerator": 'Ctrl+Q',
                    click() { openChangelog(); }
                },
                { "type": 'separator' },
                {
                    "label": 'Update',
                    "accelerator": 'Ctrl+U',
                    click() { openUrl(`${config.url}/releases`); }
                },
                { "type": 'separator' },
                {
                    "label": 'Report issue',
                    "accelerator": 'Ctrl+I',
                    click() { openUrl(`${config.url}/issues`); }
                },
                {
                    "label": 'Edit packages',
                    click() { openUrl(`${config.url}/pulls`); }
                },
                { "type": 'separator' },
                {
                    "label": 'About',
                    "accelerator": 'Ctrl+A',
                    click() {
                        launcher.webContents.send('open-about');
                    }
                }
            ]
        }
    ];
}

module.exports = createMenu;
