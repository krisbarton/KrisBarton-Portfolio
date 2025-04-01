import ContactForm from "./form"
import LinkedInIcon from "../../assets/icons/linkedin.svg"
import GithubIcon from "../../assets/icons/github.svg"

export default function Contact() {
    return (
        <section id="contact" className="flex flex-wrap justify-center items-center w-screen max-w-full flex-grow py-20 bg-stormdust-900">
            <div className="w-4/5 max-w-screen-sm text-base md:text-lg leading-relaxed">
                <h2 className="text-4xl font-bold text-emerald-500 text-center mb-10 w-full">Contact Me</h2>
                <p className="w-full">Hey there! Do you wanna hire me or to just say hi? Then let's talk!</p>
                <p className="my-4 flex items-center text-sm">
                    <img src={LinkedInIcon} width="30" height="30" alt="LinkedIn Icon" className="mr-2"/> 
                    <a href="https://www.linkedin.com/in/krisbarton/">My LinkedIn Profile</a>
                </p>
                <p className="my-4 flex items-center text-sm">
                    <img src={GithubIcon} width="30" height="30" alt="Github Icon" className="mr-2"/> 
                    <a href="https://www.linkedin.com/in/krisbarton/">My Github</a>
                </p>
                <p className="my-8">
                    Or just send me a message here...
                </p>
                <ContactForm />
            </div>
        </section>
    )
}