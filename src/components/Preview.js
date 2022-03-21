import styled from 'styled-components';
import {
  Document,
  Page,
  PDFViewer,
  View,
  Image,
  Text,
  StyleSheet,
} from '@react-pdf/renderer';
import { useSelector } from 'react-redux';

const Preview = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <Container>
      <PDFViewer
        showToolbar={false}
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          border: 'none',
        }}
      >
        <Pdf profile={profile} />
      </PDFViewer>
    </Container>
  );
};

const styles = StyleSheet.create({
  page: { padding: 20 },
  head: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '20px',
    borderBottom: '2px solid #f4f4f5',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '5px',
    objectFit: 'cover',
    marginRight: '20px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    fontSize: '28px',
    textTransform: 'uppercase',
  },
  position: {
    fontSize: '14px',
    paddingTop: '8px',
  },
  contact: {
    fontSize: '10px',
    paddingTop: '10px',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  aside: {
    borderRight: '2px solid #f4f4f5',
    paddingTop: '20px',
    minHeight: '675px',
    width: '25%',
  },
  main: {
    paddingLeft: '20px',
    paddingTop: '20px',
    width: '75%',
  },
});

export const Pdf = ({ profile }) => {
  return (
    <Document title='Resume'>
      <Page size='A4' style={styles.page}>
        <View style={styles.head}>
          {profile.image && (
            <Image src={profile.image} cache={true} style={styles.image} />
          )}
          <View style={styles.column}>
            <View style={styles.flexRow}>
              <Text style={styles.name}>{profile.name} </Text>
              <Text style={styles.name}>{profile.surname}</Text>
            </View>
            <Text style={styles.position}>{profile.position}</Text>
            {(profile.email.length > 0 || profile.phone.length > 0) && (
              <View style={[styles.flexRow, styles.contact]}>
                <Text>{profile.email} </Text>
                <Text>{profile.phone}</Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.aside}>
            <Text
              style={{
                fontSize: '12px',
              }}
            >
              Skills
            </Text>
            <Text
              style={{
                fontSize: '12px',
              }}
            >
              HTML
            </Text>
            <Text
              style={{
                fontSize: '12px',
              }}
            >
              CSS
            </Text>
            <Text
              style={{
                fontSize: '12px',
              }}
            >
              JavaScript
            </Text>
          </View>
          <View style={styles.main}>
            <Text
              style={{
                fontSize: '12px',
              }}
            >
              Main
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const Container = styled.div`
  width: 50%;
`;

export default Preview;
