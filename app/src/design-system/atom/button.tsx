'use client';

import classNames from 'classnames';
import type { ColorType } from '../tokenTypes';
import { MouseEventHandler } from 'react';
import type { SpacingSystemProps } from '../colorSystemProps';
import '../button.css';

interface ButtonProps extends SpacingSystemProps {
    color: ColorType;
    label: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ label, color, handleClick, p }) => (
    <button className={classNames('button', {
        [`button--${color}`]: color,
        [`p-${p}`]: p,
    })} onClick={handleClick}>{label}</button>
);

export default Button;