import React from 'react';
import Title from '../Components/Title';
import SkillItem from '../Components/SkillItem';
import bootstrap from '../img/svg/bootstrap.svg';
import csharp from '../img/svg/csharp.svg';
import css from '../img/svg/css.svg';
import github from '../img/svg/github.svg';
import html from '../img/svg/html.svg';
import java from '../img/svg/java.svg';
import javascript from '../img/svg/javascript.svg';
import jquery from '../img/svg/jquery.svg';
import nodejs from '../img/svg/nodejs.svg';
import php from '../img/svg/php.svg';
import python from '../img/svg/python.svg';
import react from '../img/svg/react.svg';
import redux from '../img/svg/redux.svg';
import sass from '../img/svg/sass.svg';
import mysql from '../img/svg/mysql.svg';
import postgresql from '../img/svg/postgresql.svg';
import mongodb from '../img/svg/mongodb.svg';

const AboutPage = () => {
  return (
    <div className="SkillsPage">
      <Title title={'My Skills'} span={'My Skills'}></Title>
      <div className="skillsContainer">
        <SkillItem skill={'HTML5'} icon={html} />
        <SkillItem skill={'CSS'} icon={css} />
        <SkillItem skill={'Sass'} icon={sass} />
        <SkillItem skill={'Bootstrap'} icon={bootstrap} />
        <SkillItem skill={'Javascript'} icon={javascript} />
        <SkillItem skill={'jQuery'} icon={jquery} />
        <SkillItem skill={'React Js'} icon={react} />
        <SkillItem skill={'Redux Js'} icon={redux} />
        <SkillItem skill={'Node Js'} icon={nodejs} />
        <SkillItem skill={'Python'} icon={python} />
        <SkillItem skill={'PHP'} icon={php} />
        <SkillItem skill={'Java'} icon={java} />
        <SkillItem skill={'C#'} icon={csharp} />
        <SkillItem skill={'MySQL'} icon={mysql} />
        <SkillItem skill={'PostgreSQL'} icon={postgresql} />
        <SkillItem skill={'MongoDB'} icon={mongodb} />
        <SkillItem skill={'GitHub'} icon={github} />
      </div>
    </div>
  );
};

export default AboutPage;
