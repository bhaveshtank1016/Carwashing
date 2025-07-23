import React, { useState } from "react";
import { FaSearchPlus } from "react-icons/fa";

const projectData = [
  {
    id: 1,
    title: "Modern Glass Facade",
    category: "Glass Glazing",
    image: "/src/assets/gallery2.jpg",
    description: "Full glass front elevation for a commercial complex.",
  },
  {
    id: 2,
    title: "Stainless Steel Railing",
    category: "Railings",
    image: "/src/assets/gallery.jpg",
    description: "Custom-designed railing for a residential staircase.",
  },
  {
    id: 3,
    title: "Sliding Aluminum Windows",
    category: "Aluminum Work",
    image: "/src/assets/projectGallery.jpg",
    description: "Durable and sleek sliding windows for a home project.",
  },
];

const categories = ["All", "Washing", "Services", "Polish"];

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="ProjectGallery"
      className="bg-black  py-20 px-6 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Project Gallery
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Explore some of our recent projects across various services.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-200 ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-64 object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-white dark:bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-black dark:text-white rounded-lg">
                <FaSearchPlus size={24} />
                <p className="mt-2 font-semibold">View Details</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white dark:bg-gray-800 max-w-lg w-full p-6 rounded-lg relative shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-lg w-full mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {selectedProject.category}
              </p>
              <p className="text-gray-800 dark:text-gray-200 text-sm">
                {selectedProject.description}
              </p>
              <button
                className="absolute top-1 right-2 font-bold text-sm text-gray-700 dark:text-white hover:underline"
                onClick={() => setSelectedProject(null)}
              >
                BACK
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;
