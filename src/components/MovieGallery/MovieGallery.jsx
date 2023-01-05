import styled from 'styled-components';
import { useLocation, NavLink } from 'react-router-dom';

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s};

  &:not(.active):hover,
  &:not(.active):focus {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const MovieGallery = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <NavItem to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </NavItem>
          </li>
        );
      })}
    </>
  );
};
