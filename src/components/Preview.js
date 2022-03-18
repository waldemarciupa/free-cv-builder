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
  nameRow: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '28px',
    textTransform: 'uppercase',
  },
  position: {
    fontSize: '14px',
    paddingTop: '8px',
  },
  content: {
    paddingTop: '20px',
  },
  aside: {
    borderRight: '2px solid #f4f4f5',
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
            <View style={styles.nameRow}>
              <Text>{profile.name} </Text>
              <Text>{profile.surname}</Text>
            </View>
            <Text style={styles.position}>{profile.position}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.aside}>
            <Text
              style={{
                fontSize: '12px',
              }}
            >
              {profile.email}
            </Text>
            <Text
              style={{
                fontSize: '12px',
                paddingTop: '10px',
              }}
            >
              {profile.phone}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: '12px',
                paddingTop: '10px',
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
