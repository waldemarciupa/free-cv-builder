import Section from '../../../Section/Section';
import Field from '../../../Field/Field';
import {
  addLanguage,
  deleteLanguage,
} from '../../../../features/profile/profileSlice';
import { useSelector } from 'react-redux';

const Languages = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <Section
      heading={'Languages'}
      description={`You can add the languages that you know. You can specify level as well.`}
      clickHandler={addLanguage()}
      btnText={'Add language'}
    >
      {profile.languages.length > 0 &&
        profile.languages.map((language) => (
          <Field
            key={language.id}
            language={language}
            deleteHandler={deleteLanguage}
          />
        ))}
    </Section>
  );
};

export default Languages;
