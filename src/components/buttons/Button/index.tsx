import React from 'react';
import classNames from 'classnames';
import Icon from '../../Icon';
import { ButtonProps } from './Button.types';

const buttonBaseClass = 'button';

/**
 * Provides a simple way to trigger an event or to interact with the environment.
 * See [here](https://randstad.design/components/core/buttons/)
 *
 */
function Button({
  children,
  handleClick,
  type,
  small,
  variant,
  dark,
  disabled,
  icon,
  loader,
  fullWidth,
  href,
  svgClasses = '',
  className,
  RouterComponent,
  ...rest
}: ButtonProps) {
  const ButtonTag = href ? (RouterComponent || 'a') : 'button';
  const hrefTypeAttribute = href ? { href } : { type };
  const onClickAttribute = handleClick ? { onClick: handleClick } : {};

  return (
    <ButtonTag
      className={classNames(`${buttonBaseClass} ${className}`, {
        [`${buttonBaseClass}--s`]: small,
        [`${buttonBaseClass}--filled`]: variant === 'filled',
        [`${buttonBaseClass}--plain`]: variant === 'plain',
        [`${buttonBaseClass}--dark-blue`]: dark,
        [`${buttonBaseClass}--disabled`]: disabled,
        [`${buttonBaseClass}--preloader`]: loader,
        [`${buttonBaseClass}--icon`]: !children,
        [`${buttonBaseClass}--full-width`]: fullWidth,
      })}
      {...hrefTypeAttribute}
      {...onClickAttribute}
      {...rest}
      disabled={disabled}
    >
      {icon && (
        <Icon
          iconClassName={classNames('icon', { 'icon--inline': children })}
          iconType={icon}
          svgProps={{ className: svgClasses }}
        />
      )}
      {loader && <span className="dots" />}
      {!loader && children}
    </ButtonTag>
  );
}

export default Button;
