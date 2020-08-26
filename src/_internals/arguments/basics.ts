import type { MultipleEntitiesArgument } from '@arguments'

export type AXES = 'x' | 'xy' | 'yz' | 'xz' | 'xyz'
export type ANCHORS = 'eyes' | 'feet'

export type BASIC_COLORS = (
  'black' | 'dark_blue' | 'dark_green' | 'dark_aqua' | 'dark_aqua' | 'dark_red' | 'dark_purple' |
  'gold' | 'gray' | 'dark_gray' | 'blue' | 'green' | 'aqua' | 'red' | 'light_purple' | 'yellow' |
  'white' | 'reset'
)

export type GAMEMODES = 'survival' | 'creative' | 'adventure' | 'spectator'

export type DIFFICULTIES = 'easy' | 'normal' | 'hard' | 'peaceful'

export type OPERATORS = '=' | '+=' | '-=' | '/=' | '*=' | '%=' | '<=' | '>=' | '<>'

export type COMPARISON_OPERATORS = '<' | '<=' | '=' | '>=' | '>'

export type SOUND_SOURCES = 'master' | 'music' | 'record' | 'weather' | 'block' | 'hostile' | 'neutral' | 'player' | 'ambient' | 'voice'

// When used as `type XX = YY | _ShowAlias`, forces Typescript to show the alias type (XX) and not the real one (YY).
export class _ShowAlias {
  private readonly xxx?: never
}

export type MessageOrSelector = (string | MultipleEntitiesArgument) | _ShowAlias