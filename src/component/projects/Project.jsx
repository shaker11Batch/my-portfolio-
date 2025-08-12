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
            <h3 className='text-center'>Projects</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                  {
                projects.map(pro =>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Card Title
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
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