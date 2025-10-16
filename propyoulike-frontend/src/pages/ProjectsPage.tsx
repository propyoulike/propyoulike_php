import React, { useEffect, useState } from "react";
import { getProjects } from "../services";
import Card from "../components/Card";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      if (data) setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.id} title={p.name} description={p.config_details} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;