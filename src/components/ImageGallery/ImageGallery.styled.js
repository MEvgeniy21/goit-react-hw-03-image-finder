import styled from '@emotion/styled';

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
