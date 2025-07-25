import "./Project.css";

const Projects = () => {
  const projectList = [
    {
      title: "Product Launch Planner",
      description:
        "A timeline-based planner for launching new products with team assignments and KPI tracking.",
    },
    {
      title: "Remote Team Dashboard",
      description:
        "A dashboard to monitor remote team productivity, task completion, and communication logs.",
    },
    {
      title: "Client CRM Workflow",
      description:
        "A CRM project that automated customer onboarding, tracking interactions and follow-ups.",
    },
    {
      title: "Marketing Campaign Tracker",
      description:
        "Tracked performance of multiple ad campaigns and aligned them with quarterly growth goals.",
    },
    {
      title: "Agile Sprint Organizer",
      description:
        "Tool for managing backlogs, assigning sprints, and facilitating retrospectives.",
    },
    {
      title: "Stakeholder Reporting System",
      description:
        "Generated real-time project reports and visual insights for stakeholders and execs.",
    },
  ];

  return (
    <section id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href="#" className="project-link">
              View Case Study
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
