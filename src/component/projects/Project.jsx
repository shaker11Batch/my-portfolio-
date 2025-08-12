import React from 'react';
import image1 from "../../assets/gtgh.JPG"
import image2 from "../../assets/ikl.JPG"
import image3 from "../../assets/w.JPG"
import { Link } from 'react-router';


const Project = () => {

    const projects = [
        {

            title: "Portfolio Website",
            image: image1,
            description:
                "A personal portfolio website showcasing my skills, projects, and contact information with smooth animations and a responsive design.",
            skills: ["React", "Tailwind CSS", "Firebase Auth", "Node.js"],
            link: ''
        },
        {
            day: "Day 2",
            title: "Event Management App",
            image: image2,
            description:
                "A full-stack event management platform where users can create, join, and manage events with authentication and dynamic search features.",
            skills: ["React", "Tailwind CSS", "Firebase Auth", "Node.js"],
            link: ' https://resplendent-brigadeiros-5c90f6.netlify.app/'
        },
        {
            day: "Day 3",
            title: "E-Commerce Dashboard",
            image: image3,
            description:
                "An admin dashboard to manage products, orders, and users, with secure authentication and real-time data updates.",
            skills: ["React", "Tailwind CSS", "Firebase Auth", "Node.js"],
        },
    ];

    return (
        <div className='max-w-7xl mx-auto' id='projects'>
            <h3 className='text-center text-3xl md:text-4xl mb-8'>Projects</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 gap-4'>
                {
                    projects.map(pro =>
                        <div className="card bg-base-100 w-96 sm:w-80 mx-auto shadow-sm border">
                            <figure>
                                <img className='w-full object-cover h-50 rounded'
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
                                        pro.skills.map((skill, idx) => <div key={idx} className="badge badge-outline">{skill}</div>)
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