import { MdVisibility } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { projects } from "../utils/constant";

function Project() {
  return (
    // Project section container
    <>
      <div id="project" className="p-2 w-full">
        {/* Title */}
        <p className="text-center text-gray-700">Have a Look</p>
        <h1 className="text-center text-4xl font-semibold mb-4">My Project</h1>
        {/* Project cards */}
        <div className="flex flex-wrap justify-center items-center gap-10">
          {/* First project */}
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col items-center justify-center gap-2">
              <div className="peer rounded-lg overflow-hidden bg-slate-400 border-2 border-amber-500">
                <img
                  src={project.image}
                  alt="crypto app"
                  height="350"
                  width="350"
                />
              </div>
              <div className="hidden hover:flex peer-hover:flex gap-4 p-2 rounded-xl absolute">
                {/* Demo link */}
                <a
                  className="bg-amber-400 py-1 px-5 rounded-lg border-2"
                  href={project.url}
                  target="blank"
                >
                  <MdVisibility size={20} />
                </a>
                {/* GitHub link */}
                <a
                  className="bg-amber-400 py-1 px-5 rounded-lg border-2"
                  href={project.repo}
                  target="blank"
                >
                  <FaGithub size={20} />
                </a>
              </div>
              {/* Project name */}
              <h4 className="font-semibold">{project.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
