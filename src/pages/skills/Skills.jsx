import React from 'react';
import Starfield from '../../components/starfield/Starfield';
import SkillCard from '../../components/cards/skill/SkillCard';
import Layout from '../../components/layout/Layout';
import webSkills from '../../datas/skillwebs.json';
import otherSkills from '../../datas/skillothers.json';

const Skill = () => {

    return (
        <Layout>
            <main className="skill">
                <Starfield />
                <SkillCard webSkills={webSkills} otherSkills={otherSkills}/>
            </main>
        </Layout>
    );
  };

export default Skill;