import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Oval
        height="80"
        width="80"
        color="#3f51b5"
        ariaLabel="loading-indicator"
        strokeWidth="3"
        secondaryColor="#98a3e0"
      />
    </LoaderWrapper>
  );
};

export default Loader;
