import { motion } from "framer-motion";
const Project = () => {
    const projectData = [
        {
            id: 1,
            title: "DVS",
            image: "https://i.ibb.co/hxGY0TPK/Screenshot-2025-06-23-165920.png",
            description: "Electronic voting system web application.",
            liveLink: "https://electronic-voting-system-beta.vercel.app",
            codeLink: "https://github.com/dreamwarrior6m/Electronic-Voting-System",
            status: "NEW",
        },
        {
            id: 2,
            title: "Trip Fables",
            image: "https://i.ibb.co/SXtyRrSW/Screenshot-2025-06-23-164330.png",
            description: "A Travel Agency website.",
            liveLink: "https://trips-fables.web.app",
            codeLink: "https://github.com/chandonkumar23/Trips-Fables-client-site/tree/main/src",
            status: "NEW",
        },
        {
            id: 3,
            title: "RestuPOS",
            image: "https://i.ibb.co/4Z72CNHs/Screenshot-2025-06-23-165625.png",
            description: "A Restaurant pos website.",
            liveLink: "https://restupos-24070.web.app",
            codeLink: "https://github.com/chandonkumar23/Restu-POs-Client",
            status: "NEW",
        },
        {
            id: 3,
            title: "Furns",
            image: "https://i.ibb.co/h1L7zt6G/Screenshot-2025-06-23-170313.png",
            description: "E-commerce Landing page.",
            liveLink: "https://restupos-24070.web.app",
            codeLink: "https://github.com/chandonkumar23/Restu-POs-Client",
            status: "NEW",
        },
        // ...Add the rest similarly
    ];

    return (
        <div>
            <div>
                <div>
                    <motion.h1
                        className="text-4xl font-thin border-s-4 border-green-500 ps-3 font-bold mb-7"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        My Projects
                    </motion.h1>
                </div>
                <div className="mb-40 mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">

                    {projectData.map((project) => (
                        <div key={project.id} className="card bg-base-100 shadow-md w-full">
                            <figure>
                                <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {project.title}
                                    <div className="badge badge-secondary">{project.status}</div>
                                </h2>
                                <p>{project.description}</p>
                                <div className="card-actions justify-end">
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="badge badge-outline cursor-pointer "
                                        >
                                            Live Preview
                                        </a>
                                    )}
                                    {project.codeLink && (
                                        <a
                                            href={project.codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="badge badge-outline cursor-pointer "
                                        >
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
