import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import { AiOutlineDotNet } from 'react-icons/ai';
import {
  SiDotnet,
  SiMicrosoftsqlserver,
  SiNodedotjs,
  SiNodered,
} from 'react-icons/si';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDotnet,
  DiMsqlServer,
  DiMysql,
  DiGithub,
} from 'react-icons/di';
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiCsharp,
} from 'react-icons/si';
import { TbBrandCSharp, TbBrandGolang, TbSql } from 'react-icons/tb';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
    </Row>
  );
}

export default Techstack;
