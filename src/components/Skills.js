import Section from './Section';
import Field from './Field';
import { addSkill, deleteSkill } from '../features/profile/profileSlice';
import { useSelector } from 'react-redux';

const Skills = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <Section
      heading={'Skills'}
      description={`You can add the most important skills you know. You don't need to
          specify your skill level.`}
      clickHandler={addSkill}
      btnText={'Add skill'}
    >
      {profile.skills.length > 0 &&
        profile.skills.map((skill) => (
          <Field key={skill.id} skill={skill} deleteHandler={deleteSkill} />
        ))}
    </Section>
  );
};

export default Skills;
