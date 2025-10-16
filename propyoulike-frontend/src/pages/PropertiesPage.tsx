import React, { useEffect, useState } from "react";
import { getProjects } from "@/services/projectsService";

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading projects...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <ul>
        {projects.map(p => (
          <li key={p.id} className="p-2 border-b">{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;