/**
 * Zaptec
 *
 * Initial template by Aune <https://github.com/aunefyren>
 * Reworked for additional features by Roy W. Andersen <https://github.com/ensnared>
 *
 * */

import type { template } from '../types';
import { TEMPLATE_EDITOR as edt } from '../const';


export const data: template = {
    config: {
        'domain': 'zaptec',
        'name': 'Zaptec',
        'domainbase': '_charger',
        'serviceid': edt.SERVICEID_DEVICE,
        'serviceid_data': { entity: null, attr: 'id' },
    },
    defaults: {
        show_leds: true,
    },
    details: {
        // DETAILS ITEMS (APPLY THE ONES YOU NEED)
        // name                             // An object with entity item (or only text-attribute if plain text is wanted)
        // location                         // An object with entity item (or only text-attribute if plain text is wanted)
        // status                           // A plain text or an entity item
        // substatus                        // A plain text or an entity item
        // smartcharging                    // An entity item (bool) defining smart charging (used for blue leds)
        // currentlimits                    // A list of allowed values for current limits, for instance used in dropdowns
        // statetext                        // Mapping states to custom statetexts, for instance {charging: 'Charging fine'} and so on
        // collapsiblebuttons               // Replaces default text and icon for collapsible buttons, for instance group1: { text: 'click_for_group1', icon: 'mdi:speedometer' }
        // info_left                        // A list of entity items used on top left of the card
        // info_right                       // A list of entity items used on top right of the card
        // group1                           // A list of entity items used on on the collapsible group1 (limits)
        // group2                           // A list of entity items used on on the collapsible group2 (info)
        // group3                           // A list of entity items used on on the collapsible group3 (config)
        // stats                            // Mapping of states where each state has a list of entity items which will appear for corresponding state above toolbar (datatable/stats)
        // toolbar_left                     // Mapping of states where each state has a list of entity items which will appear for corresponding state at left side of toolbar at bottom of card
        // toolbar_right                    // Mapping of states where each state has a list of entity items which will appear for corresponding state at right side of toolbar at bottom of card

        // ENTITY ITEMS (APPLY THE ONES YOU NEED)
        //     entity_id: '',                  // entity id
        //     attribute: '',                  // attribute is used as value if specified
        //     unit: '',                       // unit if you want to override entity unit
        //     unit_show: true,                // show unit next to value
        //     unit_showontext: true,          // show unit next to value in tooltip text
        //     text: '',                       // text to be used instead of entity friendly-name (do not use dots '.' and apply translation key to achieve translation)
        //     service: '',                    // service on format 'domain.service'
        //     service_data: {'test','test'},  // service data for the service call
        //     icon: '',                       // icon to be used instead of entity icon
        //     round: 0,                       // round to specified number of decimals (integer)
        //     type: '',                       // type
        //     calc_function: ''               // define entity_id as 'calculated' and specify min,max,mean,sum here to calculate
        //     calc_entities: ''               // entities to calculate from above feature
        //     conditional_entity: ''          // if you want the entity_id to be shown conditionally, specify a on/off or true/false sensor here
        //     conditional_attribute: ''       // if you prefer the conditional showing of entity to be based on an attribute, define it here
        //     conditional_invert: ''          // if you prefer to invert the conditional showing of an entity to show when false, invert by true

        // SPECIAL TOKENS
        // edt.ENTITYPREFIX                    // This will be replaced with what is found from main sensor entity after removing MAIN_ENTITY_BASE
        // edt.SERVICEID_ENTITY                // A replacement used in the service call, typically for a chargerid or something that must be part of the data when calling service of a specific charger.
        // #SERVICEVAL#                        // A replacement used in the service call, typically for the value from a dropdown or similar. Use this in the template where for instance a current limit is supposed to be sent to a charger.


        //NAME, LOCATION, STATUS ETC
        name: {
            entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_charger',
            attribute: 'name'
        },
        location: {
            entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_charger',
            attribute: 'installation_name'
        },
        status: {
            entity_id: 'sensor.' + edt.ENTITYPREFIX + '_charger_mode'
        },
        substatus: {
            entity_id: 'switch.' + edt.ENTITYPREFIX + '_charging'
        },
        smartcharging: {
            entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_ecomode',
            icon: 'mdi:cloud'
        },

        // OVERRIDE CURRENTLIMITS
        currentlimits: [0, 6, 10, 16, 20, 25, 32],

        // OVERRIDE STATE TEXT - also overrides translation
        statetext: {
            Disconnected: 'Disconnected',
            Connected_Requesting: 'Waiting',
            Connected_Charging: 'Charging',
            Connected_Finished: 'Charging Completed',
            Unkown: 'Error'
        },

        // OVERRIDE COLLAPSIBLE BUTTON ICONS AND TOOLTIP TEXT
        collapsiblebuttons: {
            group1: { text: 'Limits', icon: 'mdi:speedometer' },
            group2: { text: 'Information', icon: 'mdi:information' },
            group3: { text: 'Settings', icon: 'mdi:cog' }
        },

        //ICONS LEFT AND RIGHT
        info_left: [
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_cable_locked',
                text: 'Cable Lock'
            },
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_ecomode',
                text: 'Eco Mode'
            }
        ],
        info_right: [
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_voltage_phase_1',
                text: 'Voltage P1',
                unit_show: true
            },
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_voltage_phase_2',
                text: 'Voltage P2',
                unit_show: true
            },
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_voltage_phase_3',
                text: 'Voltage P3',
                unit_show: true
            },
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_charge_power',
                text: 'Current Power Usage',
                unit_show: true
            }
        ],

        //LIMITS
        group1: [
            {
                entity_id: 'number.' + edt.ENTITYPREFIX + '_charger_max_current',
                text: 'Charger Max Current',
                unit_show: true
            },
            {
                entity_id: 'number.' + edt.ENTITYPREFIX + '_charger_min_current',
                text: 'Charger Min Current',
                unit_show: true
            },
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_allocated_charge_current',
                text: 'Allocated Charge Current',
                unit_show: true
            },
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_temperature_internal',
                text: 'Internal Temperature',
                unit_show: true,
                icon: 'mdi:car-brake-temperature'
            },
            {
                entity_id: 'binary_sensor.INSTALLATION_PREFIX_installation',
                attribute: 'use_load_balancing',
                icon: 'mdi:scale-balance',
                text: 'Use Load Balancing'
            }
        ],

        //INFO
        group2: [
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_charger',
                text: 'online',
                icon: 'mdi:ev-station'
            },
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_voltage_phase_1',
                text: 'voltage',
                unit_show: true
            },
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_charge_power',
                text: 'power',
                unit_show: true
            },
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_allocated_charge_current',
                attribute: 'current_phase1',
                text: 'charger_current',
                unit_show: true
            },
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_completed_session_energy',
                text: 'Energy Last Session',
                unit_show: true
            },
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_energy_meter',
                text: 'Energy Total',
                unit_show: true
            },
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_charger',
                attribute: 'communication_signal_strength',
                text: 'WiFi Signal Strength',
                icon: 'mdi:wifi',
                unit: 'dBm',
                unit_show: true
            }
        ],

        //CONFIG
        group3: [
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_charger',
                attribute: 'is_enabled',
                text: 'Charger Enabled'
            },
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_authorization_required',
                text: 'Authorization Required',
                icon: 'mdi:lock'
            },
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_cable_locked',
                text: 'Cable Locked',
                icon: 'mdi:ev-plug-ccs2'
            },
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_ecomode',
                text: 'Eco Mode'
            },
            {
                entity_id: 'update.' + edt.ENTITYPREFIX + '_firmware_update',
                text: 'Firmware update available',
                icon: 'mdi:package-down'
            }
        ],

        //STATS - based on state of main entity, default if state not found
        stats: {
            default: [
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_completed_session_energy',
                    text: 'Session energy',
                    unit_show: true
                },
                {
                    entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_ecomode',
                    text: 'Eco Mode'
                },
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_energy_meter',
                    text: 'Total Energy',
                    unit_show: true
                }
            ],
            Disconnected: [
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_completed_session_energy',
                    text: 'Last Session Energy',
                    unit_show: true
                },
                {
                    entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_ecomode',
                    text: 'Eco Mode'
                },
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_energy_meter',
                    text: 'Total Energy',
                    unit_show: true
                }
            ],
            Connected_Charging: [
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_session_total_charge',
                    text: 'Energy Charged',
                    unit_show: true
                },
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_charge_power',
                    text: 'Charge Power',
                    unit_show: true
                },
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_allocated_charge_current',
                    text: 'Charge Current',
                    unit_show: true
                }
            ],
            Connected_Finished: [
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_session_energy',
                    text: 'Last Session Energy',
                    unit_show: true
                },
                {
                    entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_ecomode',
                    text: 'Eco Mode'
                },
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_energy_meter',
                    text: 'Total Energy',
                    unit_show: true
                }
            ],
            Unknown: [
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_session_energy',
                    text: 'session_energy',
                    unit_show: true
                },
                {
                    entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_basic_schedule',
                    text: 'schedule'
                }
            ]
        },

        // TOOLBAR
        toolbar_left: {
            default: [
                {
                    service: 'zaptec.restart_charger',
                    service_data: {
                        device_id: edt.SERVICEID_ENTITY
                    },
                    text: 'Restart Charger',
                    icon: 'hass:restart'
                },
                {
                    service: 'zaptec.authorize_charging',
                    service_data: {
                        device_id: edt.SERVICEID_ENTITY
                    },
                    text: 'Authorize Charging',
                    icon: 'hass:lock-check',
                    conditional_entity: 'binary_sensor.' + edt.ENTITYPREFIX + '_authorization_required'
                },
                {
                    service: 'zaptec.deauthorize_charging',
                    service_data: {
                        device_id: edt.SERVICEID_ENTITY
                    },
                    text: 'Deauthorize Charging',
                    icon: 'hass:lock-off',
                    conditional_entity: 'binary_sensor.' + edt.ENTITYPREFIX + '_authorization_required'
                }
            ],
            Disconnected: [],
            Connected_Requesting: [
                {
                    service: 'zaptec.restart_charger',
                    service_data: {
                        device_id: edt.SERVICEID_ENTITY
                    },
                    text: 'Restart Charger',
                    icon: 'hass:restart'
                },
                {
                    service: 'zaptec.stop_charging',
                    service_data: {
                        device_id: edt.SERVICEID_ENTITY
                    },
                    text: 'Stop Charging',
                    icon: 'hass:stop'
                },
                {
                    service: 'zaptec.resume_charging',
                    service_data: {
                        device_id: edt.SERVICEID_ENTITY
                    },
                    text: 'Resume Charging',
                    icon: 'hass:play'
                },
                {
                    service: 'zaptec.authorize_charging',
                    service_data: {
                        device_id: edt.SERVICEID_ENTITY
                    },
                    text: 'Authorize Charging',
                    icon: 'hass:lock-check',
                    conditional_entity: 'binary_sensor.' + edt.ENTITYPREFIX + '_authorization_required'
                },
                {
                    service: 'zaptec.deauthorize_charging',
                    service_data: {
                        device_id: edt.SERVICEID_ENTITY
                    },
                    text: 'Deauthorize Charging',
                    icon: 'hass:lock-off',
                    conditional_entity: 'binary_sensor.' + edt.ENTITYPREFIX + '_authorization_required'
                }
            ],
            Connected_Charging: [
                {
                    service: 'zaptec.stop_charging',
                    service_data: {
                        device_id: edt.SERVICEID_ENTITY
                    },
                    text: 'Stop Charging',
                    icon: 'hass:stop'
                },
                {
                    service: 'zaptec.resume_charging',
                    service_data: {
                        device_id: edt.SERVICEID_ENTITY
                    },
                    text: 'Resume Charging',
                    icon: 'hass:play'
                }
            ],
            Connected_Finished: [
                {
                    service: 'zaptec.stop_charging',
                    service_data: {
                        device_id: edt.SERVICEID_ENTITY
                    },
                    text: 'Stop Charging',
                    icon: 'hass:stop'
                },
                {
                    service: 'zaptec.resume_charging',
                    service_data: {
                        device_id: edt.SERVICEID_ENTITY
                    },
                    text: 'Resume Charging',
                    icon: 'hass:play'
                }
            ],
            Unknown: [
                {
                    service: 'zaptec.restart_charger',
                    service_data: {
                        device_id: edt.SERVICEID_ENTITY
                    },
                    text: 'Restart Charger',
                    icon: 'hass:restart'
                }
            ]
        },
        toolbar_right: {
            default: [
                {
                    service: 'persistent_notification.create',
                    service_data: {
                        message: 'Firmware update is available, but only possible when disconnected!',
                        title: 'Update'
                    },
                    text: 'update',
                    icon: 'mdi:file-download',
                    conditional_entity: 'update.' + edt.ENTITYPREFIX + '_firmware_update'
                }
            ],
            Disconnected: [
                {
                    service: 'zaptec.upgrade_firmware',
                    service_data: {
                        device_id: edt.SERVICEID_ENTITY
                    },
                    text: 'Upgrade Firmware',
                    icon: 'mdi:file-download',
                    conditional_entity: 'update.' + edt.ENTITYPREFIX + '_firmware_update'
                }
            ]
        }
    }
}
