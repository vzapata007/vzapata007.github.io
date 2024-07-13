import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hello everyone, I'm{' '}
            <span className="purple">Victor Zapata</span> from{' '}
            <span className="purple">Santiago, Chile.</span>
            <br />
            I am a Software Developer with extensive experience in
            multinational companies, specializing in web application
            development and data integration.
            <br />
            I hold a Diploma in Information Technology (IT) with a
            focus on Programming.
            <br />
            <br />
            In addition to coding, here are some of my key skills and
            interests:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Object-Oriented Programming (C#,
              VB.NET, JavaScript)
            </li>
            <li className="about-activity">
              <ImPointRight /> API Design and Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Agile/Scrum Methodology
            </li>
            <li className="about-activity">
              <ImPointRight /> Azure DevOps
            </li>
            <li className="about-activity">
              <ImPointRight /> Unit Testing
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Programming isn't about what you know; it's about what you can
            figure out."
          </p>
          <footer className="blockquote-footer">Chris Pine</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
