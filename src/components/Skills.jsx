import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills & Expertise</h2>
      
      <div className="skills-container">
        <div className="skill-item">
          <h3>Python & Django</h3>
          <p>
            Functions, Modules, and Packages, Object
Oriented Programming (OOP), File Handling, 
Error & Exception Handling, and working with 
basic libraries. Django Framework (Basics of 
API handling & testing).
          </p>
        </div>

        <div className="skill-item">
          <h3>Web Development</h3>
          <p>
            Good knowledge of HTML, CSS, and basics of React.js to create responsive and interactive web pages.
          </p>
        </div>

        <div className="skill-item">
          <h3>Database Management</h3>
          <p>
            Familiar with SQL and database concepts such as data modeling, queries, joins, and handling relational databases.
          </p>
        </div>

        <div className="skill-item">
          <h3>Data Tools</h3>
          <p>
            Familiar with Power BI for data visualization and reporting to create actionable insights.
          </p>
        </div>
        <div className="skill-item">
          <h3>Version Control</h3>
          <p>
            Basic knowledge of Git and GitHub for version 
control, including creating repositories, commits, 
branching, merging, and pull requests. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
