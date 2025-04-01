import PrimaryButton from "../buttons/primary"
import AboutMe from "../../assets/kris-about-me.webp";

export default function About() {
    return (
        <section className="flex flex-wrap justify-center items-center w-screen max-w-full flex-grow py-20">
            <h2 className="text-4xl font-bold text-emerald-500 text-center mb-6 w-full">About Me</h2>         
            <div id="about" className="w-4/5 max-w-screen-sm text-base md:text-xl leading-relaxed">
                <p className="my-4">My name's Kris and once I started coding way back in 1999, I fell in love with it.</p>
                <p className="my-4">I've been working commercially as a developer for over 17 years. During that time 
                   I've worked for some of the biggest companies in the UK and in many different business sectors.</p>
                <p className="my-4">During that time, I've pretty much done everything. From database design, to full stack developer, 
                   frontend developer and back again. I've worked a lot of different coding languages, frameworks, architecture, 
                   and operating systems.</p>
                <p className="my-4">If you want to know what I've been working on, take a look at <a className="text-emerald-500 font-bold" href="#portfolio">my portfolio</a>.</p>
                <p className="my-4">What chat or hire me?</p>
                <p className="mt-6"><PrimaryButton text="Let's talk" location="#contact" /></p>
            </div>
            <div>
                <img src={AboutMe} alt="About Kris Barton. Still a stunner" width="300" height="500" className="ml-10 rounded-xl border-4 border-christalle-400 hidden lg:block" />
            </div>
        </section>    
    )
};