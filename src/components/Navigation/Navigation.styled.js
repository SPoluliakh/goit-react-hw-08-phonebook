import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.secondary};
  text-shadow: ${p => p.theme.shadows.textShadow};
  transition: 300ms linear;

  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }

  &.active {
    color: ${p => p.theme.colors.linkActive};
    color: ${p => p.theme.colors.activeText};
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: ${p => p.theme.colors.linkHover};
  }
`;
