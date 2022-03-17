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
});

export const Pdf = ({ profile }) => {
  return (
    <Document title='Resume'>
      <Page size='A4' style={styles.page}>
        <View
          style={{
            borderBottom: '2px solid #f4f4f5',
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: '20px',
          }}
        >
          {profile.image && (
            <View>
              <Image
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '5px',
                  objectFit: 'cover',
                  marginRight: '20px',
                }}
                src={profile.image}
                cache={true}
              />
            </View>
          )}
          <View>
            <Text
              style={{
                fontSize: '12px',
                paddingTop: '10px',
              }}
            >
              {profile.name}
            </Text>
            <Text
              style={{
                fontSize: '12px',
                paddingTop: '10px',
              }}
            >
              {profile.surname}
            </Text>
            <Text
              style={{
                fontSize: '12px',
                paddingTop: '10px',
              }}
            >
              {profile.position}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: '12px',
            paddingTop: '10px',
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
      </Page>
    </Document>
  );
};

const Container = styled.div`
  width: 50%;
`;

export default Preview;
