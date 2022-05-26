import { useSelector } from 'react-redux';
import {
  addEducation,
  deleteEducation,
} from '../../../../features/profile/profileSlice';
import Section from '../../../Section/Section';
import Field from '../../../Field/Field';
import { RootState } from '../../../../app/store';

const Education = () => {
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <Section
      heading={'Education'}
      description={`Your education history`}
      clickHandler={addEducation()}
      btnText={'Add education'}
    >
      {profile.educations.length > 0 &&
        profile.educations.map((education) => (
          <Field
            key={education.id}
            education={education}
            deleteHandler={deleteEducation}
          />
        ))}
    </Section>
  );
};

export default Education;
