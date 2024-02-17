/** VOLKSWAGEN e-GOLF */

import type { template } from './../types';
import { TEMPLATE_EDITOR as edt } from './../const';


export const data: template = {
    config: {
        'domain': 'vwegolf',
        'name': 'VW e-golf',
        'domainbase': '_status',
        'serviceid': edt.SERVICEID_DEVICE,
        'serviceid_data': { entity: null, attr: 'id' },
    },
    defaults: {
        show_leds: true,
    },
    details: {
        //NAME, LOCATION, STATUS ETC
        name: { text: 'e-Golf' },
        status: {
            entity_id: 'device_tracker.' + edt.ENTITYPREFIX + '_position',
        },
        location: {
            entity_id: 'sensor.' + edt.ENTITYPREFIX + '_electric_range',
            unit_show: true,
        },
        substatus: {
            entity_id: 'sensor.' + edt.ENTITYPREFIX + '_last_connected',
        },

        // OVERRIDE STATE TEXT - also overrides translation
        statetext: {
            home: 'home',
            away: 'away',
        },

        // OVERRIDE COLLAPSIBLE BUTTON ICONS AND TOOLTIP TEXT
        collapsiblebuttons: {
            group1: { text: 'click_for_group1', icon: 'mdi:lock' },
            group2: { text: 'click_for_group2', icon: 'mdi:information' },
            group3: { text: 'click_for_group3', icon: 'mdi:cog' },
        },

        //ICONS LEFT AND RIGHT
        info_left: [
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_charging_cable_connected',
                text: 'connected'
            }
        ],
        info_right: [
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_battery_level',
                text: 'soc',
                unit_show: true,
            }, {
                entity_id: 'switch.' + edt.ENTITYPREFIX + '_charging',
                text: 'charging',
                icon: 'mdi:ev-station',
            }, {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_charging_time_left',
                text: 'charging_time_left',
                unit_show: true,
            }
        ],

        //LIMITS
        group1: [
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_charging_cable_locked',
                text: 'cable_locked',
                type: 'info',
            },
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_doors_locked',
                text: 'doors_locked',
                type: 'info',
            },
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_hood_closed',
                text: 'hood_closed',
                type: 'info',
            },
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_trunk_closed',
                text: 'trunk_closed',
                type: 'info',
            },
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_windows_closed',
                text: 'windows_closed',
                type: 'info',
            },

        ],

        //INFO
        group2: [
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_battery_level',
                text: 'soc'
            },
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_charging_cable_connected',
                text: 'connected'
            },
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_electric_range',
                text: 'range'
            },
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_energy_flow',
                text: 'energy_flow'
            },
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_external_power',
                text: 'external_power'
            },
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_last_trip_average_electric_engine_consumption',
                text: 'avg_consumption'
            },
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_last_trip_average_speed',
                text: 'avg_speed'
            },
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_outside_temperature',
                text: 'outside_temperature'
            },
            {
                entity_id: 'sensor.' + edt.ENTITYPREFIX + '_climatisation_target_temperature',
                text: 'climate_target_temp'
            },
            {
                entity_id: 'binary_sensor.' + edt.ENTITYPREFIX + '_parking_light',
                text: 'parking_light'
            },
        ],

        //CONFIG
        group3: [
            {
                entity_id: 'switch.' + edt.ENTITYPREFIX + '_charging',
                text: 'charging'
            },
            {
                entity_id: 'switch.' + edt.ENTITYPREFIX + '_climatisation_from_battery',
                text: 'clima_from_battery'
            },
            {
                entity_id: 'switch.' + edt.ENTITYPREFIX + '_electric_climatisation',
                text: 'electric_climatisation'
            },
            {
                entity_id: 'switch.' + edt.ENTITYPREFIX + '_window_heater',
                text: 'window_heater'
            },
            {
                entity_id: 'switch.' + edt.ENTITYPREFIX + '_force_data_refresh',
                text: 'force_data_refresh'
            },
            {
                entity_id: 'lock.' + edt.ENTITYPREFIX + '_door_locked',
                text: 'door_locked'
            },

            {
                entity_id: 'lock.' + edt.ENTITYPREFIX + '_trunk_locked',
                text: 'trunk_locked'
            },
        ],

        //STATS - based on state of main entity, default if state not found
        stats: {

            default: [
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_odometer',
                    text: 'odometer'
                },
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_electric_range',
                    text: 'range'
                },
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_last_trip_average_electric_engine_consumption',
                    text: 'avg_consumption'
                }
            ],

            home: [
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_odometer',
                    text: 'odometer'
                },
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_electric_range',
                    text: 'range'
                },
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_last_trip_average_electric_engine_consumption',
                    text: 'avg_consumption'
                },
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_charging_time_left',
                    text: 'charging_time_left'
                },

            ],

            away: [
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_odometer',
                    text: 'odometer'
                },
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_last_connected',
                    text: 'last_connected'
                },
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_electric_range',
                    text: 'range'
                },
                {
                    entity_id: 'sensor.' + edt.ENTITYPREFIX + '_last_trip_average_electric_engine_consumption',
                    text: 'avg_consumption'
                },
            ],

        },

        // TOOLBAR
        toolbar_left: {
            default: [
                // {},
            ],

            home: [
                {
                    service: 'switch.toggle',
                    service_data: { entity_id: 'switch.' + edt.ENTITYPREFIX + '_charging' },
                    text: 'toggle_charging',
                    icon: 'mdi:ev-station',
                },

            ],

            away: [
                {
                    service: 'switch.toggle',
                    service_data: { entity_id: 'switch.' + edt.ENTITYPREFIX + '_charging' },
                    text: 'toggle_charging',
                    icon: 'mdi:ev-station',
                },
                {
                    service: 'switch.toggle',
                    service_data: { entity_id: 'switch.' + edt.ENTITYPREFIX + '_electric_climatisation' },
                    text: 'toggle_clima',
                    icon: 'mdi:radiator',
                },
                {
                    service: 'switch.toggle',
                    service_data: { entity_id: 'switch.' + edt.ENTITYPREFIX + '_window_heater' },
                    text: 'toggle_window_heater',
                    icon: 'mdi:car-defrost-rear',
                },

            ],

        },
        toolbar_right: {
            default: [
                {
                    service: 'switch.toggle',
                    service_data: { entity_id: 'switch.' + edt.ENTITYPREFIX + '_force_data_refresh' },
                    text: 'force_refresh',
                    icon: 'mdi:car-connected',
                },
            ],

        },

    }

}

