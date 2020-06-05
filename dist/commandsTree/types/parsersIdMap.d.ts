/** Auto-generated by jsonToTS.ts - Represents the types expected for each argument nodes. */
import { ParsersMap } from './parsersMap';
interface ParsersIdMapObject<returnType> {
    0: ((targets: ParsersMap['minecraft:entity']) => returnType);
    1: () => returnType;
    2: ((advancement: ParsersMap['minecraft:resource_location']) => returnType);
    3: ((advancement: ParsersMap['minecraft:resource_location']) => returnType) & ((advancement: ParsersMap['minecraft:resource_location'], criterion: ParsersMap['brigadier:string']) => returnType);
    4: ((target: ParsersMap['minecraft:entity'], attribute: ParsersMap['minecraft:resource_location']) => returnType);
    5: ((scale: ParsersMap['brigadier:double']) => returnType);
    6: ((value: ParsersMap['brigadier:double']) => returnType);
    7: ((uuid: ParsersMap['minecraft:uuid'], name: ParsersMap['brigadier:string'], value: ParsersMap['brigadier:double'], option: 'add' | 'multiply' | 'multiply_base') => returnType);
    8: ((uuid: ParsersMap['minecraft:uuid']) => returnType);
    9: ((get: ParsersMap['minecraft:uuid']) => returnType) & ((get: ParsersMap['minecraft:uuid'], uuid: ParsersMap['brigadier:double']) => returnType);
    10: ((id: ParsersMap['minecraft:resource_location'], name: ParsersMap['minecraft:component']) => returnType);
    11: ((id: ParsersMap['minecraft:resource_location'], option: 'max' | 'players' | 'value' | 'visible') => returnType);
    12: ((id: ParsersMap['minecraft:resource_location']) => returnType);
    13: ((option: 'blue' | 'green' | 'pink' | 'purple' | 'red' | 'white' | 'yellow') => returnType);
    14: ((max: ParsersMap['brigadier:integer']) => returnType);
    15: ((name: ParsersMap['minecraft:component']) => returnType);
    16: ((option: 'notched_10' | 'notched_12' | 'notched_20' | 'notched_6' | 'progress') => returnType);
    17: ((value: ParsersMap['brigadier:integer']) => returnType);
    18: ((visible: ParsersMap['brigadier:bool']) => returnType);
    19: ((targets: ParsersMap['minecraft:entity']) => returnType) & ((targets: ParsersMap['minecraft:entity'], item: ParsersMap['minecraft:item_predicate']) => returnType) & ((targets: ParsersMap['minecraft:entity'], item: ParsersMap['minecraft:item_predicate'], maxCount: ParsersMap['brigadier:integer']) => returnType);
    20: ((begin: ParsersMap['minecraft:block_pos'], end: ParsersMap['minecraft:block_pos'], destination: ParsersMap['minecraft:block_pos']) => returnType);
    21: ((filter: ParsersMap['minecraft:block_predicate']) => returnType) & ((filter: ParsersMap['minecraft:block_predicate'], option: 'force' | 'move' | 'normal') => returnType);
    22: ((option: 'force' | 'move' | 'normal') => returnType);
    23: ((targetPos: ParsersMap['minecraft:block_pos']) => returnType) & ((targetPos: ParsersMap['minecraft:block_pos'], path: ParsersMap['minecraft:nbt_path']) => returnType) & ((targetPos: ParsersMap['minecraft:block_pos'], path: ParsersMap['minecraft:nbt_path'], scale: ParsersMap['brigadier:double']) => returnType);
    24: ((target: ParsersMap['minecraft:entity']) => returnType) & ((target: ParsersMap['minecraft:entity'], path: ParsersMap['minecraft:nbt_path']) => returnType) & ((target: ParsersMap['minecraft:entity'], path: ParsersMap['minecraft:nbt_path'], scale: ParsersMap['brigadier:double']) => returnType);
    25: ((target: ParsersMap['minecraft:resource_location']) => returnType) & ((target: ParsersMap['minecraft:resource_location'], path: ParsersMap['minecraft:nbt_path']) => returnType) & ((target: ParsersMap['minecraft:resource_location'], path: ParsersMap['minecraft:nbt_path'], scale: ParsersMap['brigadier:double']) => returnType);
    26: ((targetPos: ParsersMap['minecraft:block_pos'], nbt: ParsersMap['minecraft:nbt_compound_tag']) => returnType);
    27: ((target: ParsersMap['minecraft:entity'], nbt: ParsersMap['minecraft:nbt_compound_tag']) => returnType);
    28: ((target: ParsersMap['minecraft:resource_location'], nbt: ParsersMap['minecraft:nbt_compound_tag']) => returnType);
    29: ((targetPos: ParsersMap['minecraft:block_pos'], targetPath: ParsersMap['minecraft:nbt_path']) => returnType);
    30: ((sourcePos: ParsersMap['minecraft:block_pos']) => returnType) & ((sourcePos: ParsersMap['minecraft:block_pos'], sourcePath: ParsersMap['minecraft:nbt_path']) => returnType);
    31: ((source: ParsersMap['minecraft:entity']) => returnType) & ((source: ParsersMap['minecraft:entity'], sourcePath: ParsersMap['minecraft:nbt_path']) => returnType);
    32: ((source: ParsersMap['minecraft:resource_location']) => returnType) & ((source: ParsersMap['minecraft:resource_location'], sourcePath: ParsersMap['minecraft:nbt_path']) => returnType);
    33: ((value: ParsersMap['minecraft:nbt_tag']) => returnType);
    34: ((index: ParsersMap['brigadier:integer']) => returnType);
    35: ((target: ParsersMap['minecraft:entity'], targetPath: ParsersMap['minecraft:nbt_path']) => returnType);
    36: ((target: ParsersMap['minecraft:resource_location'], targetPath: ParsersMap['minecraft:nbt_path']) => returnType);
    37: ((targetPos: ParsersMap['minecraft:block_pos'], path: ParsersMap['minecraft:nbt_path']) => returnType);
    38: ((target: ParsersMap['minecraft:entity'], path: ParsersMap['minecraft:nbt_path']) => returnType);
    39: ((target: ParsersMap['minecraft:resource_location'], path: ParsersMap['minecraft:nbt_path']) => returnType);
    40: ((name: ParsersMap['brigadier:string']) => returnType);
    41: ((existing: ParsersMap['brigadier:string']) => returnType);
    42: ((option: 'available' | 'enabled') => returnType);
    43: ((option: 'adventure' | 'creative' | 'spectator' | 'survival') => returnType);
    44: ((option: 'easy' | 'hard' | 'normal' | 'peaceful') => returnType);
    45: ((targets: ParsersMap['minecraft:entity']) => returnType) & ((targets: ParsersMap['minecraft:entity'], effect: ParsersMap['minecraft:mob_effect']) => returnType);
    46: ((targets: ParsersMap['minecraft:entity'], effect: ParsersMap['minecraft:mob_effect']) => returnType) & ((targets: ParsersMap['minecraft:entity'], effect: ParsersMap['minecraft:mob_effect'], seconds: ParsersMap['brigadier:integer']) => returnType) & ((targets: ParsersMap['minecraft:entity'], effect: ParsersMap['minecraft:mob_effect'], seconds: ParsersMap['brigadier:integer'], amplifier: ParsersMap['brigadier:integer']) => returnType) & ((targets: ParsersMap['minecraft:entity'], effect: ParsersMap['minecraft:mob_effect'], seconds: ParsersMap['brigadier:integer'], amplifier: ParsersMap['brigadier:integer'], hideParticles: ParsersMap['brigadier:bool']) => returnType);
    47: ((targets: ParsersMap['minecraft:entity'], enchantment: ParsersMap['minecraft:item_enchantment']) => returnType) & ((targets: ParsersMap['minecraft:entity'], enchantment: ParsersMap['minecraft:item_enchantment'], level: ParsersMap['brigadier:integer']) => returnType);
    48: ((axes: ParsersMap['minecraft:swizzle']) => returnType);
    49: ((anchor: ParsersMap['minecraft:entity_anchor']) => returnType);
    50: ((targets: ParsersMap['minecraft:entity'], anchor: ParsersMap['minecraft:entity_anchor']) => returnType);
    51: ((pos: ParsersMap['minecraft:vec3']) => returnType);
    52: ((pos: ParsersMap['minecraft:block_pos'], block: ParsersMap['minecraft:block_predicate']) => returnType);
    53: ((start: ParsersMap['minecraft:block_pos'], end: ParsersMap['minecraft:block_pos'], destination: ParsersMap['minecraft:block_pos'], option: 'all' | 'masked') => returnType);
    54: ((sourcePos: ParsersMap['minecraft:block_pos'], path: ParsersMap['minecraft:nbt_path']) => returnType);
    55: ((source: ParsersMap['minecraft:entity'], path: ParsersMap['minecraft:nbt_path']) => returnType);
    56: ((source: ParsersMap['minecraft:resource_location'], path: ParsersMap['minecraft:nbt_path']) => returnType);
    57: ((entities: ParsersMap['minecraft:entity']) => returnType);
    58: ((predicate: ParsersMap['minecraft:resource_location']) => returnType);
    59: ((target: ParsersMap['minecraft:score_holder'], targetObjective: ParsersMap['minecraft:objective']) => returnType);
    60: ((source: ParsersMap['minecraft:score_holder'], sourceObjective: ParsersMap['minecraft:objective']) => returnType);
    61: ((range: ParsersMap['minecraft:int_range']) => returnType);
    62: ((dimension: ParsersMap['minecraft:dimension']) => returnType);
    63: ((rot: ParsersMap['minecraft:rotation']) => returnType);
    64: ((id: ParsersMap['minecraft:resource_location'], option: 'max' | 'value') => returnType);
    65: ((targets: ParsersMap['minecraft:score_holder'], objective: ParsersMap['minecraft:objective']) => returnType);
    66: ((callback: ParsersMap['sandstone:callback']) => returnType);
    67: ((targets: ParsersMap['minecraft:entity'], amount: ParsersMap['brigadier:integer']) => returnType) & ((targets: ParsersMap['minecraft:entity'], amount: ParsersMap['brigadier:integer'], option: 'levels' | 'points') => returnType);
    68: ((targets: ParsersMap['minecraft:entity'], option: 'levels' | 'points') => returnType);
    69: ((from: ParsersMap['minecraft:block_pos'], to: ParsersMap['minecraft:block_pos'], block: ParsersMap['minecraft:block_state']) => returnType);
    70: ((filter: ParsersMap['minecraft:block_predicate']) => returnType);
    71: ((from: ParsersMap['minecraft:column_pos']) => returnType) & ((from: ParsersMap['minecraft:column_pos'], to: ParsersMap['minecraft:column_pos']) => returnType);
    72: ((pos: ParsersMap['minecraft:column_pos']) => returnType);
    73: ((from: ParsersMap['minecraft:column_pos']) => returnType);
    74: ((to: ParsersMap['minecraft:column_pos']) => returnType);
    75: ((name: ParsersMap['minecraft:function']) => returnType);
    76: ((target: ParsersMap['minecraft:entity']) => returnType);
    77: ((value: ParsersMap['brigadier:bool']) => returnType);
    78: ((targets: ParsersMap['minecraft:entity'], item: ParsersMap['minecraft:item_stack']) => returnType) & ((targets: ParsersMap['minecraft:entity'], item: ParsersMap['minecraft:item_stack'], count: ParsersMap['brigadier:integer']) => returnType);
    79: ((command: ParsersMap['brigadier:string']) => returnType);
    80: ((option: 'Bastion_Remnant' | 'Buried_Treasure' | 'Desert_Pyramid' | 'EndCity' | 'Fortress' | 'Igloo' | 'Jungle_Pyramid' | 'Mansion' | 'Mineshaft' | 'Monument' | 'Nether_Fossil' | 'Ocean_Ruin' | 'Pillager_Outpost' | 'Ruined_Portal' | 'Shipwreck' | 'Stronghold' | 'Swamp_Hut' | 'Village') => returnType);
    81: ((biome: ParsersMap['minecraft:resource_location']) => returnType);
    82: ((players: ParsersMap['minecraft:entity']) => returnType);
    83: ((loot_table: ParsersMap['minecraft:resource_location'], pos: ParsersMap['minecraft:block_pos']) => returnType);
    84: ((tool: ParsersMap['minecraft:item_stack']) => returnType);
    85: ((loot_table: ParsersMap['minecraft:resource_location']) => returnType);
    86: ((pos: ParsersMap['minecraft:block_pos']) => returnType);
    87: ((targetPos: ParsersMap['minecraft:block_pos']) => returnType);
    88: ((targetPos: ParsersMap['minecraft:block_pos'], slot: ParsersMap['minecraft:item_slot']) => returnType);
    89: ((count: ParsersMap['brigadier:integer']) => returnType);
    90: ((entities: ParsersMap['minecraft:entity'], slot: ParsersMap['minecraft:item_slot']) => returnType);
    91: ((targetPos: ParsersMap['minecraft:vec3']) => returnType);
    92: ((action: ParsersMap['brigadier:string']) => returnType);
    93: ((targets: ParsersMap['minecraft:entity'], message: ParsersMap['minecraft:message']) => returnType);
    94: ((name: ParsersMap['minecraft:particle']) => returnType) & ((name: ParsersMap['minecraft:particle'], pos: ParsersMap['minecraft:vec3']) => returnType) & ((name: ParsersMap['minecraft:particle'], pos: ParsersMap['minecraft:vec3'], delta: ParsersMap['minecraft:vec3'], speed: ParsersMap['brigadier:float'], count: ParsersMap['brigadier:integer']) => returnType);
    95: ((viewers: ParsersMap['minecraft:entity']) => returnType);
    96: ((sound: ParsersMap['minecraft:resource_location']) => returnType);
    97: ((targets: ParsersMap['minecraft:entity']) => returnType) & ((targets: ParsersMap['minecraft:entity'], pos: ParsersMap['minecraft:vec3']) => returnType) & ((targets: ParsersMap['minecraft:entity'], pos: ParsersMap['minecraft:vec3'], volume: ParsersMap['brigadier:float']) => returnType) & ((targets: ParsersMap['minecraft:entity'], pos: ParsersMap['minecraft:vec3'], volume: ParsersMap['brigadier:float'], pitch: ParsersMap['brigadier:float']) => returnType) & ((targets: ParsersMap['minecraft:entity'], pos: ParsersMap['minecraft:vec3'], volume: ParsersMap['brigadier:float'], pitch: ParsersMap['brigadier:float'], minVolume: ParsersMap['brigadier:float']) => returnType);
    98: ((recipe: ParsersMap['minecraft:resource_location']) => returnType);
    99: ((pos: ParsersMap['minecraft:block_pos'], slot: ParsersMap['minecraft:item_slot'], item: ParsersMap['minecraft:item_stack']) => returnType) & ((pos: ParsersMap['minecraft:block_pos'], slot: ParsersMap['minecraft:item_slot'], item: ParsersMap['minecraft:item_stack'], count: ParsersMap['brigadier:integer']) => returnType);
    100: ((targets: ParsersMap['minecraft:entity'], slot: ParsersMap['minecraft:item_slot'], item: ParsersMap['minecraft:item_stack']) => returnType) & ((targets: ParsersMap['minecraft:entity'], slot: ParsersMap['minecraft:item_slot'], item: ParsersMap['minecraft:item_stack'], count: ParsersMap['brigadier:integer']) => returnType);
    101: ((message: ParsersMap['minecraft:message']) => returnType);
    102: ((function_: ParsersMap['brigadier:string']) => returnType);
    103: ((function_: ParsersMap['minecraft:function'], time: ParsersMap['minecraft:time']) => returnType) & ((function_: ParsersMap['minecraft:function'], time: ParsersMap['minecraft:time'], option: 'append' | 'replace') => returnType);
    104: ((objective: ParsersMap['brigadier:string'], criteria: ParsersMap['minecraft:objective_criteria']) => returnType) & ((objective: ParsersMap['brigadier:string'], criteria: ParsersMap['minecraft:objective_criteria'], displayName: ParsersMap['minecraft:component']) => returnType);
    105: ((objective: ParsersMap['minecraft:objective']) => returnType);
    106: ((displayName: ParsersMap['minecraft:component']) => returnType);
    107: ((option: 'hearts' | 'integer') => returnType);
    108: ((slot: ParsersMap['minecraft:scoreboard_slot']) => returnType) & ((slot: ParsersMap['minecraft:scoreboard_slot'], objective: ParsersMap['minecraft:objective']) => returnType);
    109: ((targets: ParsersMap['minecraft:score_holder'], objective: ParsersMap['minecraft:objective'], score: ParsersMap['brigadier:integer']) => returnType);
    110: ((target: ParsersMap['minecraft:score_holder'], objective: ParsersMap['minecraft:objective']) => returnType);
    111: ((target: ParsersMap['minecraft:score_holder']) => returnType);
    112: ((targets: ParsersMap['minecraft:score_holder'], targetObjective: ParsersMap['minecraft:objective'], operation: ParsersMap['minecraft:operation'], source: ParsersMap['minecraft:score_holder'], sourceObjective: ParsersMap['minecraft:objective']) => returnType);
    113: ((targets: ParsersMap['minecraft:score_holder']) => returnType) & ((targets: ParsersMap['minecraft:score_holder'], objective: ParsersMap['minecraft:objective']) => returnType);
    114: ((pos: ParsersMap['minecraft:block_pos'], block: ParsersMap['minecraft:block_state']) => returnType) & ((pos: ParsersMap['minecraft:block_pos'], block: ParsersMap['minecraft:block_state'], option: 'destroy' | 'keep' | 'replace') => returnType);
    115: ((targets: ParsersMap['minecraft:entity']) => returnType) & ((targets: ParsersMap['minecraft:entity'], pos: ParsersMap['minecraft:block_pos']) => returnType);
    116: ((target: ParsersMap['minecraft:entity']) => returnType) & ((target: ParsersMap['minecraft:entity'], player: ParsersMap['minecraft:entity']) => returnType);
    117: ((center: ParsersMap['minecraft:vec2'], spreadDistance: ParsersMap['brigadier:float'], maxRange: ParsersMap['brigadier:float'], respectTeams: ParsersMap['brigadier:bool'], targets: ParsersMap['minecraft:entity']) => returnType);
    118: ((entity: ParsersMap['minecraft:entity_summon']) => returnType) & ((entity: ParsersMap['minecraft:entity_summon'], pos: ParsersMap['minecraft:vec3']) => returnType) & ((entity: ParsersMap['minecraft:entity_summon'], pos: ParsersMap['minecraft:vec3'], nbt: ParsersMap['minecraft:nbt_compound_tag']) => returnType);
    119: ((team: ParsersMap['brigadier:string']) => returnType) & ((team: ParsersMap['brigadier:string'], displayName: ParsersMap['minecraft:component']) => returnType);
    120: ((team: ParsersMap['minecraft:team']) => returnType);
    121: ((team: ParsersMap['minecraft:team']) => returnType) & ((team: ParsersMap['minecraft:team'], members: ParsersMap['minecraft:score_holder']) => returnType);
    122: ((members: ParsersMap['minecraft:score_holder']) => returnType);
    123: ((option: 'always' | 'never' | 'pushOtherTeams' | 'pushOwnTeam') => returnType);
    124: ((value: ParsersMap['minecraft:color']) => returnType);
    125: ((option: 'always' | 'hideForOtherTeams' | 'hideForOwnTeam' | 'never') => returnType);
    126: ((allowed: ParsersMap['brigadier:bool']) => returnType);
    127: ((prefix: ParsersMap['minecraft:component']) => returnType);
    128: ((suffix: ParsersMap['minecraft:component']) => returnType);
    129: ((destination: ParsersMap['minecraft:entity']) => returnType);
    130: ((location: ParsersMap['minecraft:vec3']) => returnType);
    131: ((targets: ParsersMap['minecraft:entity']) => returnType);
    132: ((facingEntity: ParsersMap['minecraft:entity']) => returnType) & ((facingEntity: ParsersMap['minecraft:entity'], facingAnchor: ParsersMap['minecraft:entity_anchor']) => returnType);
    133: ((facingLocation: ParsersMap['minecraft:vec3']) => returnType);
    134: ((rotation: ParsersMap['minecraft:rotation']) => returnType);
    135: ((targets: ParsersMap['minecraft:entity'], message: ParsersMap['minecraft:component']) => returnType);
    136: ((time: ParsersMap['minecraft:time']) => returnType);
    137: ((option: 'day' | 'daytime' | 'gametime') => returnType);
    138: ((time: ParsersMap['minecraft:time']) => returnType);
    139: ((title: ParsersMap['minecraft:component']) => returnType);
    140: ((fadeIn: ParsersMap['brigadier:integer'], stay: ParsersMap['brigadier:integer'], fadeOut: ParsersMap['brigadier:integer']) => returnType);
    141: ((duration: ParsersMap['brigadier:integer']) => returnType);
    142: ((distance: ParsersMap['brigadier:float']) => returnType) & ((distance: ParsersMap['brigadier:float'], time: ParsersMap['brigadier:integer']) => returnType);
    143: ((pos: ParsersMap['minecraft:vec2']) => returnType);
    144: ((damagePerBlock: ParsersMap['brigadier:float']) => returnType);
    145: ((distance: ParsersMap['brigadier:float']) => returnType);
    146: ((distance: ParsersMap['brigadier:integer']) => returnType);
    147: ((time: ParsersMap['brigadier:integer']) => returnType);
}
export declare type ParsersIdMap<returnType, k extends number> = (k extends keyof ParsersIdMapObject<returnType> ? ParsersIdMapObject<returnType>[k] : never);
export {};
