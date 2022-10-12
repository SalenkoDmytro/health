import styled from 'styled-components';
import { device } from 'utils/device';

export const StyledButtonIcon = styled.button`
@media (${device.mobile}) {display: none;}

 @media (${device.tablet}) {
  display: block;
   position: absolute;
  top: 20px;
  right: 20px; */
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
 }
  :hover,
  :focus {
    outline: ${p => p.theme.borders.none};
    border: ${p => p.theme.borders.none};
  }
`;
