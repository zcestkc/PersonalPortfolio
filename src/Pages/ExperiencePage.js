import React from 'react';
import Title from '../Components/Title';
import { Accordion, Card, Button } from 'react-bootstrap';
import ExperienceItem from '../Components/ExperienceItem';
import microsoft from '../img/expImages/microsoft.svg';
import ibm from '../img/expImages/ibm.svg';
import itcareerswitch from '../img/expImages/itcareerswitch.png';
import engineeria from '../img/expImages/engineeria.png';
import ucl from '../img/expImages/ucl.svg';

const ExperiencePage = () => {
  return (
    <div>
      <div className="ExperiencePage">
        <Title title={'Experience'} span={'Experience'}></Title>
      </div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              QUALIFICATIONS
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ExperienceItem
                icon={microsoft}
                title="Exam 98-383"
                company="Microsoft"
                year="2021"
                description="Achieved 92% on MTA Exam 98-383: Introduction to Programming Using HTML and CSS."
              />
              <ExperienceItem
                icon={ibm}
                title="Data Science Professional Certificate"
                company="IBM"
                year="2020"
                description="Accessed relational databases, performed data visualisation & analysis using Pandas and Matplotlib. Constructed and evaluated Machine Learning models using Scikit-learn."
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              TRAINEESHIP & WORK
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ExperienceItem
                icon={itcareerswitch}
                title="Trainee Web Developer"
                company="IT Career Switch"
                year="2021"
                description="Completed the Coding Traineeship Program. It provided extensive accredited full-stack training from introductory exercises to job-ready portfolio work."
              />
              <ExperienceItem
                icon={engineeria}
                title="Structural Engineer"
                company="engineeria"
                year="2018-2020"
                description="Performed detailed analysis and modelling for over 30 construction projects. Collaborated with different stakeholders on projects with budgets up to £50 million."
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              EDUCATION
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ExperienceItem
                icon={ucl}
                title="MEng Civil Engineering"
                company="University College London"
                year="2014-2018"
                description="Achieved First-class Honours. Awarded outstanding presentation on final year thesis: self-healing concrete."
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default ExperiencePage;
