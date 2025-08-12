import React from 'react';
import './Profile.css'
import { Facebook, Github, Linkedin, Twitter, Youtube } from 'lucide-react';
const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile-info'>
                <h1 className='font-bold'>Md Shaker Ullah</h1>
                <h2 className='font-bold'>I 'm a Frontend Developer</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam est explicabo eligendi necessitatibus asperiores, atque libero cumque expedita quisquam ab maiores, in voluptates debitis quis odio, totam animi aliquid neque.</p>
                <div className='btn-sci'>
                    <a href="" className='btn'>Download CV</a>
                    <div className="sci">
                        <a href="https://github.com/shaker11Batch"><Github /></a>
                        <a href="https://www.facebook.com/shaker449"><Facebook /></a>
                        
                        
                    </div>
                </div>
            </div>

            <div className="profile-img">
                <div className="img">
                    <div className="img-item">
                        <img src="profile.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;