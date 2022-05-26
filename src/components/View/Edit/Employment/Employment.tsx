import { useSelector } from 'react-redux';
import {
  addEmployment,
  deleteEmployment,
} from '../../../../features/profile/profileSlice';
import Section from '../../../Section/Section';
import Field from '../../../Field/Field';
import { RootState } from '../../../../app/store';

const Employment = () => {
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <Section
      heading={'Employment history'}
      description={`Here you can show your employment history, don't hesitate to include
            the description, but it's not required.`}
      clickHandler={addEmployment()}
      btnText={'Add employment'}
    >
      {profile.employments.length > 0 &&
        profile.employments.map((employment) => (
          <Field
            key={employment.id}
            employment={employment}
            deleteHandler={deleteEmployment}
          />
        ))}
    </Section>
  );
};

export default Employment;
