import { useSelector } from 'react-redux';
import { Pdf } from '../View/Preview/Preview';
import { RootState } from '../../app/store';
import Styled from './Toolbar.styled';

const Toolbar = () => {
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <Styled.Container>
      <Styled.Logo>
        <Styled.Link href='/'>Free CV Builder</Styled.Link>
      </Styled.Logo>
      <Styled.DownloadLink
        document={<Pdf profile={profile} />}
        fileName='CV.pdf'
      >
        {({ loading }) => (loading ? 'Loading...' : 'Download PDF')}
      </Styled.DownloadLink>
    </Styled.Container>
  );
};

export default Toolbar;
