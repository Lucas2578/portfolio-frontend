import React, { useState } from 'react';
import Starfield from '../../components/starfield/Starfield';
import ProjectCard from '../../components/cards/project/ProjectCard';
import Layout from '../../components/layout/Layout';
import webSkills from '../../datas/skillwebs.json';
import otherSkills from '../../datas/skillothers.json';
import projects from '../../datas/project.json';

const Project = () => {
    const [enlargedCard, setEnlargedCard] = useState(null);
    const [, setProjects] = useState([]);

    // Function for enlarged card on click and place THIS card on first position and moving user to THIS project
    const handleClick = async (project, event) => {
        setEnlargedCard(enlargedCard === project.nameKey ? null : project.nameKey);
        if (enlargedCard !== project.nameKey) {
            // If card is not on first position, set it
            await setProjects([project, ...projects.filter(p => p.nameKey !== project.nameKey)]);
        }
        // Moving user to good project with anchor
        document.getElementById(project.nameKey).scrollIntoView();
    };

    return (
        <Layout>
            <main className="project">
                <Starfield />
                <ProjectCard projects={projects} webSkills={webSkills} otherSkills={otherSkills} onProjectClick={handleClick} enlargedCard={enlargedCard} />
            </main>
        </Layout>
    );
  };

export default Project;