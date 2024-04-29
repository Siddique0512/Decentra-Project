// StyledComponent.js
import styled from 'styled-components';

const StyledComponent = styled.div`
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
`;

export default StyledComponent;
