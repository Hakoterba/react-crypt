'use client';

import classNames from 'classnames';
import type { ColorType } from '../tokenTypes';
import { MouseEventHandler, ReactNode } from 'react';
import type { SpacingSystemProps } from '../colorSystemProps';
import '../button.css';

interface ButtonProps extends SpacingSystemProps {
    color: ColorType;
    label: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
    icon?: ReactNode | null;
}

const Button: React.FC<ButtonProps> = ({
    label,
    color,
    handleClick,
    p,
    icon,
    }) => (
    <button
        className={classNames('button', {
            [`button--${color}`]: color, [`p-${p}`]: p,
        })}
        onClick={handleClick}
        aria-label={label || 'Toggle theme'}>
        {icon && <span className="button__icon">{icon}</span>}
        {label && <span className="button__label">{label}</span>}
    </button>
);


export default Button;