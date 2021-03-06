/* eslint-disable func-names */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../Link';
import { TextStylesVariantsMap } from '../../foundation/Text/index';
import { propToStyle } from '../../../theme/utils/propToStyle/index';
import { breakPointsMedia } from '../../../theme/utils/breakpointsMedia';

const ButtonWrapper = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 15px;
  background-color: ${function (props) {
    return props.theme.colors.button.main.color;
  }}; 
  color: ${function (props) {
    return props.theme.colors.button.main.contrastText;
  }};
  border-radius: ${function (props) {
    return props.theme.borderRadius;
  }};  
  transition: opacity ${({ theme }) => theme.transition};
  ${TextStylesVariantsMap.smallestException};
  
  &:hover,
  &:focus {
    opacity: .5;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 60%;
  `};

  ${propToStyle('width')}
  ${propToStyle('display')}
  ${propToStyle('margin')}
  ${propToStyle('color')}
  ${propToStyle('fontSize')}

  ${breakPointsMedia({
    xs: css`
            width: 75%;
        `,
    md: css`
            width: 75%;
        `,
    lg: css`
            width: 60%;
        `,
    xl: css`
            width: 60%;
        `,
  })}
`;

// eslint-disable-next-line import/prefer-default-export
export function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ButtonWrapper
      as={tag}
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
