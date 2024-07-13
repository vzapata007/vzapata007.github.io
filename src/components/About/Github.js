import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const { dark } = useThemeContext();

  // personalized colors for the
  // contributions calendar
  const colourTheme = dark
    ? // colors for the dark theme
      {
        background: 'transparent',
        text: '#ffffff',
        level4: '#39d353',
        level3: '#26a641',
        level2: '#006d32',
        level1: '#0e4429',
        level0: '#161b22',
      }
    : // colors for the white theme
      {
        background: 'transparent',
        level4: '#216e39',
        level3: '#30a14e',
        level2: '#40c463',
        level1: '#9be9a8',
        level0: '#ebedf0',
      };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      <GitHubCalendar
        username="vzapata007"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
