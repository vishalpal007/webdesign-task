import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return <>
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <nav>
                <h6 className="footer-title">PRODUCT</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">COMPANY</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">COMMUNITY</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <h6 className="footer-title">SUPPORT</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <h6 className="footer-title text-2xl font-bold">WIX</h6>
                <p className='text-wrap w-80'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae accusantium unde explicabo nam quibusdam magnam porro inventore saepe deleniti perspiciatis, suscipit non voluptatem, reprehenderit recusandae. Obcaecati atque odio maiores.
                </p>
                <p>@ Copyright from wix</p>
                <div className='flex items-center gap-4 text-2xl'>
                    <span><FaFacebook /></span>
                    <span><FaTwitter /></span>
                    <span><FaYoutube /></span>
                    <span><FaPinterest /></span>
                    <span><FaInstagram /></span>
                    <span><FaLinkedin /></span>
                    <span><FaTiktok /></span>
                </div>
            </nav>
        </footer>
    </>
}

export default Footer