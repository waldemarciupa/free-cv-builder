import styled from 'styled-components';
import {
  Document,
  Page,
  PDFViewer,
  View,
  Image,
  Text,
} from '@react-pdf/renderer';

const Preview = ({ name, image }) => {
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
        <Pdf name={name} image={image} />
      </PDFViewer>
    </Container>
  );
};

export const Pdf = ({ name, image }) => {
  return (
    <Document>
      <Page size='A4'>
        <View width='100%'>
          {image && (
            <Image
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '90',
              }}
              src={image}
              cache={true}
            />
          )}
          <Text>{name}</Text>
        </View>
      </Page>
    </Document>
  );
};

const Container = styled.div`
  width: 50%;
`;

export default Preview;
