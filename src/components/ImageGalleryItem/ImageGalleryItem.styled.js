import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
