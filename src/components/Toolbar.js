import styled from 'styled-components';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Pdf } from './Preview';
import { useSelector } from 'react-redux';

const Container = styled.div`
  width: 100%;
  background: #303031;
  padding: 16px;
  display: grid;
  place-content: center;
`;

const Heading = styled.h1`
  font-size: 14px;
  color: #fff;
`;

const Toolbar = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <Container>
      <Heading>Resume</Heading>
      {/* TODO: style download button */}
      <PDFDownloadLink document={<Pdf profile={profile} />} fileName='CV.pdf'>
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </Container>
  );
};

export default Toolbar;
