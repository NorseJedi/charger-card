export const VERSION = '0.2.7';

//Replacement tags for card editor and templates
export const TEMPLATE_EDITOR = {
    ENTITYPREFIX: '#ENTITYPREFIX#',
    SERVICEID: '#SERVICEID#',
    SERVICEID_DEVICE: '#SERVICEID_DEVICE_ID#',
    SERVICEID_ENTITY: '#SERVICEID_MAIN_ENTITY#',
    SERVICEID_STATE: '#SERVICEID_MAIN_STATE#',
    SERVICEID_ATTR: '#SERVICEID_MAIN_ATTR#',
    SERVICEVAL: '#SERVICEVAL#',
}

// TODO: Find a way to read device_class icons instead of this
export const DEVICECLASS_ICONS = {
    voltage: 'mdi:sine-wave',
    lock: 'mdi:lock',
    connectivity: 'mdi:wifi',
    current: 'mdi:sine-wave',
    energy: 'mdi:flash',
    power: 'mdi:flash',
    plug: 'mdi:power-plug',
    monetary: 'mdi:cash',
};

export const DEFAULT_ICON = 'mdi:crosshairs-question';

import imageGeneric from './img/charger_generic_223x302.png';
import imageAnthracite from './img/charger_anthracite_223x302.png';
import imageRed from './img/charger_red_223x302.png';
import imageBlack from './img/charger_black_223x302.png';
import imageWhite from './img/charger_white_223x302.png';
import imageDarkblue from './img/charger_darkblue_223x302.png';

import imageBlackZaptec from './img/zaptec_go_black_220x300.png';
import imageWhiteZaptec from './img/zaptec_go_white_220x300.png';
import imageGreyZaptec from './img/zaptec_go_grey_220x300.png';
import imageBlueZaptec from './img/zaptec_go_blue_220x300.png';
import imageGreenZaptec from './img/zaptec_go_green_220x300.png';
import imageBrownZaptec from './img/zaptec_go_brown_220x300.png';


export const DEFAULT_IMAGE = 'Generic';
export const CHARGER_IMAGES = {
    'Generic': imageGeneric,
    'Anthracite': imageAnthracite,
    'Red': imageRed,
    'Black': imageBlack,
    'White': imageWhite,
    'Darkblue': imageDarkblue,
    'Zaptec Go Black': imageBlackZaptec,
    'Zaptec Go White': imageWhiteZaptec,
    'Zaptec Go Grey': imageGreyZaptec,
    'Zaptec Go Blue': imageBlueZaptec,
    'Zaptec Go Green': imageGreenZaptec,
    'Zaptec Go Brown': imageBrownZaptec
};

export const DEFAULT_CURRENTLIMITS = [8.0, 10.0, 16.0, 20.0, 25.0, 32.0];
export const DEFAULT_CUSTOMCARDTHEME = 'theme_default';
export const CARD_THEMES = [
    { name: 'theme_default', desc: 'Default HA colors' },
    { name: 'theme_custom', desc: 'Use custom theme' },
    { name: 'theme_transp_blue', desc: 'Transparent Blue' },
    { name: 'theme_transp_black', desc: 'Transparent Black' },
    { name: 'theme_transp_white', desc: 'Transparent White' },
    { name: 'theme_lightgrey_blue', desc: 'LightGrey Blue' },
];


import ledOff from './img/charger_leds_bg.gif';
import ledWhite2 from './img/charger_leds_white_2.gif';
import ledWhiteAll from './img/charger_leds_white_all.gif';
import ledWhiteFlashing from './img/charger_leds_white_flashing.gif';
import ledBlue2 from './img/charger_leds_blue_2.gif';
import ledBlueAll from './img/charger_leds_blue_all.gif';
import ledBlueFlashing from './img/charger_leds_blue_flashing.gif';
import ledRedFlashing from './img/charger_leds_red_flashing.gif';

import zaptecLedOff from './img/zaptec_go_led_off_220x300.png';
import zaptecLedWhite from './img/zaptec_go_led_white_220x300.png';
import zaptecLedBlue from './img/zaptec_go_led_blue_220x300.png';
import zaptecLedGreen from './img/zaptec_go_led_green_220x300.png';
//import zaptecLedYellow from './img/zaptec_go_led_yellow_220x300.png';
//import zaptecLedOrange from './img/zaptec_go_led_orange_220x300.png';
import zaptecLedRed from './img/zaptec_go_led_red_220x300.png';
//import zaptecLedPurple from './img/zaptec_go_led_purple_220x300.png';

export const LEDIMAGES = {
    normal: {
        DEFAULT: ledOff,
        disconnected: ledWhite2,
        awaiting_start: ledWhiteAll,
        charging: ledWhiteFlashing,
        completed: ledWhiteAll,
        error: ledRedFlashing,
        ready_to_charge: ledWhiteAll,
    },
    smart: {
        DEFAULT: ledOff,
        disconnected: ledBlue2,
        awaiting_start: ledBlueAll,
        charging: ledBlueFlashing,
        completed: ledBlueAll,
        error: ledRedFlashing,
        ready_to_charge: ledBlueAll,
    },
};

export const LEDIMAGES_ZAPTEC = {
    normal: {
        DEFAULT: zaptecLedOff,
        Disconnected: zaptecLedWhite,
        Unknown: zaptecLedRed,
        Connected_Charging: zaptecLedBlue,
        Connected_Finished: zaptecLedWhite,
        Connected_Requesting: zaptecLedGreen,
    },
    smart: {
        DEFAULT: zaptecLedOff,
        Disconnected: zaptecLedWhite,
        Unknown: zaptecLedRed,
        Connected_Charging: zaptecLedBlue,
        Connected_Finished: zaptecLedWhite,
        Connected_Requesting: zaptecLedGreen,
    },
};

export const DEFAULT_PRECISION = 1;
