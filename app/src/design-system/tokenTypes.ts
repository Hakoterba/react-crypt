import type { tokenVariables } from './tokenVariables';

export type ColorType =
    | keyof (typeof tokenVariables)['color']['primary']
    | keyof (typeof tokenVariables)['color']['secondary']
    | keyof (typeof tokenVariables)['color']['greyscale'];

export type SpacingType = keyof (typeof tokenVariables)['spacing'];