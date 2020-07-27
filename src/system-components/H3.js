import React from 'react';
import styled, { css } from 'styled-components';

const H3 = ({
  children,
  className,
  id,
  customStyles,
  darkBackground,
  display,
  color,
  uppercase
}) => {
  return (
    <Wrapper
      className={className}
      id={id}
      customStyles={customStyles}
      color={color}
      darkBackground={darkBackground}
      display={display}
      uppercase={uppercase}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.h3`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.darkBackground
      ? '#ffffff'
      : props.theme.color.heading};
  font-weight: ${(props) => (props.display ? '700' : '600')};
text-transform: ${props => props.uppercase ? 'uppercase' : null};
  margin-bottom: 33px;
  font-size: ${(props) =>
    props.display ? props.theme.fontSize.h3 + 8 : props.theme.fontSize.h3}px;
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default H3;