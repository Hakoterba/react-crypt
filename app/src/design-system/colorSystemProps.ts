import type { ColorType, SpacingType } from './tokenTypes';

export interface ColorSystemProps {
    bg?: ColorType;
    color?: ColorType;
}

export interface MarginSystemProps {
    m?: SpacingType;
    mt?: SpacingType;
    mr?: SpacingType;
    mb?: SpacingType;
    ml?: SpacingType;
}

export interface PaddingSystemProps {
    p?: SpacingType;
    pt?: SpacingType;
    pr?: SpacingType;
    pb?: SpacingType;
    pl?: SpacingType;
}

export interface SpacingSystemProps extends MarginSystemProps, PaddingSystemProps {}