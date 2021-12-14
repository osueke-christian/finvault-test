import React, {
  AriaAttributes,
  ButtonHTMLAttributes, DetailedHTMLFactory, DetailedHTMLProps, HTMLAttributes, ReactHTML, ReactNode,
} from 'react';
import './style.scss';

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
AriaAttributes {
size?: 'sm'| 'md' | 'lg' | 'xl';
round?: boolean;
color?: string;
buttonType?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success';
renderNonButton?: boolean,
label?: string,
children?: ReactNode
}
const Button: React.FC<IButtonProps> = ({
  size = 'md', round = false, color, buttonType = 'primary', label, renderNonButton = false, type = 'button', ...props
}) => (
  <div>
    {!renderNonButton ? (
      <button
        type={type}
        style={color ? { color } : {}}
        className={`btn btn-${buttonType} btn-${size} ${round ? 'round' : ''}`}
        {...props}
      >
        {props.children || label}
        {' '}
      </button>
    )

      : (
        <div className={`non-button ${buttonType} ${round ? 'round' : ''}`}>
          {label}
        </div>
      )}
  </div>
);

export default Button;
