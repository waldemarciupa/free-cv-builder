import styled from 'styled-components';
import { PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';
import { Pdf } from '../View/Preview/Preview';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const Container = styled.div`
  width: 100%;
  background: #303031;
  padding: 12px 48px;
  display: grid;
  place-content: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  padding: 0;
  line-height: 14px;
  font-size: 14px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
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
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <Container>
      <Logo>
        <Link href='/'>Free CV Builder</Link>
      </Logo>
      <PDFDownloadLink
        style={styles.link}
        document={<Pdf profile={profile} />}
        fileName='CV.pdf'
      >
        {({ loading }) => (loading ? 'Loading...' : 'Download PDF')}
      </PDFDownloadLink>
    </Container>
  );
};

export default Toolbar;
