import color from './color.tokens.json';
import spacing from './spacing.tokens.json';

export const tokenVariables = {
    ...color,
    ...spacing,
} as const;