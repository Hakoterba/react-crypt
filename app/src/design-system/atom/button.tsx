import classNames from 'classnames';
import '../../design-system/button.css';

interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  handleClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  handleClick,
  className,
}) => (
  <button
    className={classNames('button', className)}
    onClick={handleClick}
    aria-label={label || 'Button'}
  >
    {icon && <span className="button__icon">{icon}</span>}
    {label && <span className="button__label">{label}</span>}
  </button>
);

export default Button;
