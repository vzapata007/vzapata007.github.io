import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import itau from '../../assets/Projects/itau.png';
import portfolio from '../../assets/Projects/portfolio.png';
import bpm from '../../assets/Projects/bpm.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p className="text">
          Here are a few projects I've worked on recently.
        </p>
        <Row
          style={{ justifyContent: 'center', paddingBottom: '10px' }}
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={itau}
              isBlog={true}
              title="Itau Empresas"
              description="Automation of payment processes, both simple and massive, for all beneficiaries. Provides maximum security through multi-factor authentication (MFA). Convenient and flexible solution, allowing payroll authorization from anywhere with internet access."
              ghLink="https://ww2.itau.cl/empresas/cash-management/nomina-en-linea-nel"
              //demoLink="https://ww2.itau.cl/empresas/cash-management/nomina-en-linea-nel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bpm}
              isBlog={true}
              title="Business Process Management"
              description="Managed the lifecycle of tax documents (DT), providing an information delivery portal for suppliers that standardizes processes. Ensured efficiency, security, and enhanced user experience with cutting-edge technology."
              ghLink="https://www.microsystem.cl/servicios-y-soluciones/gestion-de-procesos-de-negocios-bpm/"
              //demoLink="https://www.microsystem.cl/servicios-y-soluciones/gestion-de-procesos-de-negocios-bpm/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="Personal portfolio using ReactJS to showcase my projects, skills, and professional experience. The site features a modern, user-friendly design with sections for my resume, skills, and a collection of my work. It ensures a seamless experience across all devices."
              ghLink="https://github.com/vzapata007/vzapata007.github.io"
              // Removed demoLink as it's already the portfolio we're viewing
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
