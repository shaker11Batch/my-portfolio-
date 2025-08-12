import React from 'react';

const Project = () => {

    const projects = [
        {
            day: "Day 1",
            title: "Portfolio Website",
            image: "https://via.placeholder.com/400x250?text=Portfolio",
            description:
                "A personal portfolio website showcasing my skills, projects, and contact information with smooth animations and a responsive design.",
            skills: ["React", "Tailwind CSS", "Firebase Auth", "Node.js"],
        },
        {
            day: "Day 2",
            title: "Event Management App",
            image: "https://via.placeholder.com/400x250?text=Event+App",
            description:
                "A full-stack event management platform where users can create, join, and manage events with authentication and dynamic search features.",
            skills: ["React", "Tailwind CSS", "Firebase Auth", "Node.js"],
        },
        {
            day: "Day 3",
            title: "E-Commerce Dashboard",
            image: "https://via.placeholder.com/400x250?text=E-Commerce",
            description:
                "An admin dashboard to manage products, orders, and users, with secure authentication and real-time data updates.",
            skills: ["React", "Tailwind CSS", "Firebase Auth", "Node.js"],
        },
    ];

    return (
        <div className='max-w-7xl mx-auto'>
            <h3 className='text-center text-3xl md:text-4xl'>Projects</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                  {
                projects.map(pro =>
                    <div className="card bg-base-100 w-96 sm:w-80 mx-auto shadow-sm">
                        <figure>
                            <img
                                src={pro.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                               {pro.title}
                              
                            </h2>
                            <p>{pro.description}</p>
                            <div className="card-actions ">

                                {
                                    pro.skills.map((skill, idx) => <div key={idx} className="badge badge-outline">{ skill}</div> )
                            }
                            
                            </div>
                        </div>
                    </div>
                )
            }
          </div>
        </div>
    );
};

export default Project;