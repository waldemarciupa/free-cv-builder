import styled from 'styled-components';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Pdf } from './Preview';

const Container = styled.div`
  width: 100%;
  background: #161b22;
  padding: 16px;
  display: grid;
  place-content: center;
`;

const Heading = styled.h1`
  font-size: 14px;
  color: #fff;
`;

const Toolbar = ({ name, image }) => {
  return (
    <Container>
      <Heading>Resume</Heading>
      {/* TODO: style download button */}
      <PDFDownloadLink
        document={<Pdf name={name} image={image} />}
        fileName='CV.pdf'
      >
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </Container>
  );
};

export default Toolbar;
