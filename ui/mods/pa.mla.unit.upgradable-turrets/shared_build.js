var newBuild = {
    
    "/pa/units/addon/tree_hardpoint_base/tree_hardpoint_base.json": ["hardpoint", 0, { row: 2, column: 0 }],
    
    
    "/pa/units/addon/tier_1_machine_gun_build/tier_1_machine_gun_build.json": ["tier 1", 0, { row: 2, column: 0 }],

    "/pa/units/addon/tier_1_cannon_build/tier_1_cannon_build.json": ["tier 1", 0, { row: 2, column: 1 }],
    "/pa/units/addon/tier_2_auto_cannon_build/tier_2_auto_cannon_build.json": ["cannon", 0, { row: 2, column: 0 }],
    "/pa/units/addon/tier_3_artillery_build/tier_3_artillery_build.json": ["tier 3 arty", 0, { row: 2, column: 0 }],
    "/pa/units/addon/tier_3_rail_cannon_build/tier_3_rail_cannon_build.json": ["cannon", 0, { row: 2, column: 1 }],
    
    // "/pa/units/addon/tier_1_rocket_build/tier_1_rocket_build.json": ["tier 1", 0, { row: 2, column: 2 }],

    "/pa/units/addon/tier_1_radar_build/tier_1_radar_build.json": ["tier 1", 0, { row: 2, column: 2 }],
    "/pa/units/addon/tier_2_radar_build/tier_2_radar_build.json": ["tier 2 radar", 0, { row: 2, column: 0 }],

    "/pa/units/addon/tier_2_machine_gun_build/tier_2_machine_gun_build.json": ["mg2", 0, { row: 2, column: 0 }],

    "/pa/units/addon/tier_2_gatling_build/tier_2_gatling_build.json": ["mg4", 0, { row: 2, column: 1 }],
    



    "/pa/units/addon/tree_rocket_base_build/tree_rocket_base_build.json": ["basic", 0, { row: 2, column: 3 }],

    "/pa/units/addon/edison_build/edison_build.json": ["edison", 0, { row: 2, column: 0 }],
    
    "/pa/units/addon/tier_3_machine_gun_build/tier_3_machine_gun_build.json": ["mg4", 0, { row: 2, column: 2 }],

    // "/pa/units/addon/tier_3_beamer_build/tier_3_beamer_build.json": ["cannon", 0, { row: 2, column: 1 }],

}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}
