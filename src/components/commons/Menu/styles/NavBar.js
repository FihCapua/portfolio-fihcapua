/* eslint-disable func-names */
import styled, { css } from 'styled-components';
import { breakPointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStylesVariantsMap } from '../../../foundation/Text';

// eslint-disable-next-line import/prefer-default-export
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${function (props) {
    return props.theme.colors.tertiary.light.color;
  }};
  padding: 0px 10px;
  ${TextStylesVariantsMap.paragraph1};

  ${breakPointsMedia({
    xs: css`
            justify-content: space-around;
            flex-wrap: nowrap;
        `,
    md: css`
          justify-content: space-between;
        `,
    lg: css`
        justify-content: space-between;
        `,
  })}
`;

NavBar.LeftSide = styled.div`
  margin: -9px 0;

  ${breakPointsMedia({
    xs: css`
          width: 60%;
          margin: 33px 30px;
        `,
    md: css`
          margin-left: 30px;
        `,
    lg: css`
          margin: 50px 20px;
        `,
    xl: css`
          margin: 40px 220px;
        `,
  })}
`;

NavBar.WrapperMenu = styled.div`
  display: inline-flex;
  width: 50%;
  ${breakPointsMedia({
    xs: css`
          width: 100%;
          margin: 33px -40px;
        `,
    md: css`
          width: 100%;
          margin-top: 90px;
        `,
    lg: css`
          width: 50%;
        `,
    xl: css`
         display: inline-flex;
          width: 50%;
        `,
  })}
`;

NavBar.CentralSide = styled.div`
  display: flex;
    ul {
      list-style-type: none;
    }
    li { 
      cursor: pointer;
    }
    ${breakPointsMedia({
    xs: css`
          width: 60%;
          flex-wrap: wrap;
          margin-top: -40px;
        `,
    md: css`
          width: 100%;
          display: flex;
        `,
    lg: css`
          display: flex;
        `,
    xl: css`
         display: flex;
        `,
  })}
`;

NavBar.RightSide = styled.div`
    cursor: pointer;
    margin: 15px 20px;
    width: 20%;
    ${breakPointsMedia({
    xs: css`
          position: relative;
          top: 75px;
          right: 115px;
        `,
    md: css`
          cursor: pointer;
          top: -38px;
          right: 103px; 
        `,
    lg: css`
        cursor: pointer;
        margin: 16px 25px;
        width: 20%;
        `,
    xl: css`
        cursor: pointer;
        margin: 15px 20px;
        width: 20%;
        `,
  })}
`;
