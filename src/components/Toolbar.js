import styled from 'styled-components';
import { PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';
import { Pdf } from './Preview';
import { useSelector } from 'react-redux';

const Container = styled.div`
  width: 100%;
  background: #303031;
  padding: 12px 26px;
  display: grid;
  place-content: center;
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h1`
  font-size: 14px;
  color: #fff;
`;

const styles = StyleSheet.create({
  link: {
    fontSize: '14px',
    textDecoration: 'none',
    lineHeight: '14px',
    backgroundColor: '#303031',
    color: '#fff',
    padding: '14px',
    borderRadius: '4px',
    border: '1px solid #fff',
  },
});

const Toolbar = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <Container>
      <Heading>Resume</Heading>
      <PDFDownloadLink
        style={styles.link}
        document={<Pdf profile={profile} />}
        fileName='CV.pdf'
      >
        {({ loading }) => (loading ? 'Loading' : 'Download PDF')}
      </PDFDownloadLink>
    </Container>
  );
};

export default Toolbar;
