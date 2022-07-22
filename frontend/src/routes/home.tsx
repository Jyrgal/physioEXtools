import { SearchBar } from 'components/search-bar';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = memo(() => {
  const navigate = useNavigate();
  return (
    <div className="md:px-24 z-0">
      <SearchBar
        onClick={(route) => {
          navigate(`/tools/${route}`);
        }}
      />
    </div>
  );
});

export default Home;
