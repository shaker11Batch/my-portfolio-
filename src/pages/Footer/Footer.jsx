import { Facebook, FacebookIcon, Github } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">Home</a>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Skills</a>
                <a className="link link-hover"> Projects</a>
                <a className="link link-hover"> Contact</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>

                        <a href="https://github.com/shaker11Batch"><Github /></a>



                    </a>
                    <a>
                        <a href="https://github.com/shaker11Batch"><FacebookIcon /></a>

                    </a>
                   
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;