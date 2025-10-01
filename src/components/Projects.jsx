import "./Projects.css"; // Import the CSS file

function Projects() {
  const projects = [
    {
      title: "Object Detection System ",
      description: " Developed a real-time object detection system using Python as the backend, integrating the YOLOv8 deep learning model for accurate detection of multiple object classes.",
      link: "https://github.com/sinunaik/Object-Detection"
    },
    {
      title: "Blog Platform",
      description: "I developed a blog page using React.js, focusing on creating a responsive and dynamic user interface with efficient component-based architecture for seamless content management",
      // link:"https://github.com/sinunaik/Object-Detection"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{p.title}</h3>
            <p className="project-description">{p.description}</p>
            <a href={p.link} target="_blank" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
