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
  page: {
    padding: '30px 40px',
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '20px',
    borderBottom: '2px solid #f4f4f5',
  },
  image: {
    width: '100px',
    minWidth: '100px',
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
    flexWrap: 'wrap',
  },
  name: {
    fontSize: '28px',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  position: {
    fontSize: '14px',
  },
  contact: {
    fontSize: '10px',
    paddingTop: '8px',
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsContainerMR: {
    marginRight: '6px',
    paddingBottom: '4px',
  },
  icon: {
    width: '10px',
    height: '10px',
    marginRight: '4px',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  aside: {
    borderRight: '2px solid #f4f4f5',
    paddingTop: '20px',
    paddingRight: '16px',
    minHeight: '675px',
    width: '25%',
  },
  asideBox: {
    marginBottom: 10,
  },
  main: {
    paddingLeft: '20px',
    paddingTop: '20px',
    width: '75%',
  },
  headline: {
    fontSize: '12px',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '10px',
    marginBottom: '6px',
  },
  bottomField: {
    fontSize: '9px',
    color: '#878787',
    letterSpacing: '0.5px',
    marginBottom: '6px',
  },
  description: {
    fontSize: '9px',
    lineHeight: '1.4',
    color: '#878787',
  },
  paddingBottom: {
    paddingBottom: '10px',
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
            {(profile.email.length > 0 ||
              profile.phone.length ||
              profile.location.length > 0) && (
              <View style={[styles.flexRow, styles.contact]}>
                {profile.email.length > 0 && (
                  <View
                    style={[styles.iconsContainer, styles.iconsContainerMR]}
                  >
                    <Image
                      src={'./email.png'}
                      cache={true}
                      style={styles.icon}
                    />
                    <Text>{profile.email} </Text>
                  </View>
                )}
                {profile.phone.length > 0 && (
                  <View
                    style={[styles.iconsContainer, styles.iconsContainerMR]}
                  >
                    <Image
                      src={'./phone.png'}
                      cache={true}
                      style={styles.icon}
                    />
                    <Text>{profile.phone} </Text>
                  </View>
                )}
                {profile.location.length > 0 && (
                  <View
                    style={[styles.iconsContainer, styles.iconsContainerMR]}
                  >
                    <Image
                      src={'./location.png'}
                      cache={true}
                      style={styles.icon}
                    />
                    <Text>{profile.location} </Text>
                  </View>
                )}
              </View>
            )}
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.aside}>
            {profile.skills.length > 0 && (
              <View style={styles.asideBox}>
                <Text style={styles.headline}>Skills</Text>
                {profile.skills.map(
                  (skill) =>
                    skill.title.length > 0 && (
                      <Text key={skill.id} style={styles.paragraph}>
                        {skill.title} {skill.level && `- ${skill.level}`}
                      </Text>
                    )
                )}
              </View>
            )}
            {profile.languages.length > 0 && (
              <View style={styles.asideBox}>
                <Text style={styles.headline}>Languages</Text>
                {profile.languages.map(
                  (language) =>
                    language.name.length > 0 && (
                      <Text key={language.id} style={styles.paragraph}>
                        {language.name}{' '}
                        {language.level && `- ${language.level}`}
                      </Text>
                    )
                )}
              </View>
            )}
          </View>
          <View style={styles.main}>
            {profile.employments.length > 0 && (
              <View>
                <Text style={styles.headline}>Employment history</Text>
                {profile.employments.map(
                  (employment) =>
                    employment.position.length > 0 && (
                      <View key={employment.id} style={styles.paddingBottom}>
                        <Text style={styles.paragraph}>
                          {employment.position}
                          {employment.employer && `, ${employment.employer}`}
                          {employment.city && `, ${employment.city}`}
                        </Text>
                        {employment.startDate.length > 0 && (
                          <Text style={styles.bottomField}>
                            {employment.startDate.length > 0 &&
                              new Intl.DateTimeFormat('en-US', {
                                month: 'long',
                              }).format(new Date(employment.startDate))}{' '}
                            {employment.startDate.length > 0 &&
                              new Date(employment.startDate).getFullYear()}
                            {employment.endDate.length > 0 &&
                              ' - ' +
                                new Intl.DateTimeFormat('en-US', {
                                  month: 'long',
                                }).format(new Date(employment.endDate))}
                            {employment.present && ' - Present'}
                            {employment.endDate.length > 0 &&
                              ' ' + new Date(employment.endDate).getFullYear()}
                          </Text>
                        )}
                        {employment.description.length > 0 && (
                          <Text style={styles.description}>
                            {employment.description}
                          </Text>
                        )}
                      </View>
                    )
                )}
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
};

const Container = styled.div`
  width: 50%;
  overflow: hidden;
`;

export default Preview;
