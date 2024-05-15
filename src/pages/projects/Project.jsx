import React from 'react';
import { useParams } from 'react-router-dom';
import Starfield from '../../components/starfield/Starfield';
import ProjectDescCard from '../../components/cards/project/ProjectDescCard';
import ProjectScreenCard from '../../components/cards/project/ProjectScreenCard';
import Layout from '../../components/layout/Layout';
import project from '../../datas/project.json';

const Project = () => {
    const { projectNameKey } = useParams();

    return (
        <Layout>
            <main className="project__info">
                <Starfield />
                <div className="project__info__desc">
                    <ProjectDescCard project={project} projectNameKey={projectNameKey}/>
                  </div>
                  <div className="project__info__list">
                      {/* Screen is the name of screen required in db */}
                      <ProjectScreenCard screen="screen1" projectsData={project} projectNameKey={projectNameKey} />
                      <ProjectScreenCard screen="screen2" projectsData={project} projectNameKey={projectNameKey} />
                      <ProjectScreenCard screen="screen3" projectsData={project} projectNameKey={projectNameKey} />
                  </div>
            </main>
        </Layout>
    );
};

export default Project;