import styled from 'styled-components';
import {
  Document,
  Page,
  PDFViewer,
  View,
  Image,
  Text,
} from '@react-pdf/renderer';
import { useSelector } from 'react-redux';

const Preview = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <Container>
      <PDFViewer
        showToolbar={false}
        // TODO: style viewer window
        style={{
          width: '80%',
          height: '75%',
        }}
      >
        <Pdf profile={profile} />
      </PDFViewer>
    </Container>
  );
};

export const Pdf = ({ profile }) => {
  return (
    <Document>
      <Page size='A4'>
        <View width='100%'>
          {profile.image && (
            <Image
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '90',
              }}
              src={profile.image}
              cache={true}
            />
          )}
          <Text>{profile.name}</Text>
        </View>
      </Page>
    </Document>
  );
};

const Container = styled.div`
  width: 50%;
`;

export default Preview;
