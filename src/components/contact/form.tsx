export default function ContactForm() {
    const resetForm = () => {
        const form: HTMLFormElement | null = document.querySelector("form");
        if(form) {
            setTimeout(() => {
                form.reset();
            }, 1000);
        }
    }

    return (
        <form id="contactform" target="_blank" action="https://formsubmit.co/krisbartonjobs@gmail.com" method="POST" className="mt-8 flex flex-wrap">
             <div className="flex flex-wrap w-1/2 pr-2">
                <label className="w-full text-sm">Your full name:</label>
                <input 
                    type="text" 
                    name="name" 
                    className="form-control border border-stormdust-300 rounded text-white p-2 text-sm w-full" 
                    placeholder="Full Name" 
                    required 
                />
             </div>
             <div  className="flex flex-wrap w-1/2 pl-2">
                <label className="w-full text-sm">Your email address:</label>
                <input 
                    type="email" 
                    name="email" 
                    className="form-control border border-stormdust-300 rounded text-white p-2 text-sm w-full mt-2" 
                    placeholder="Email Address" 
                    required 
                />
             </div>
             <div className="flex flex-wrap w-full mt-6">
                <label className="w-full text-sm">Your message:</label>
                <textarea 
                    placeholder="Your Message" 
                    className="form-control w-full mt-2 border border-stormdust-300 rounded text-white p-2 text-sm" 
                    name="Message" 
                    rows={10} 
                    required
                >
                </textarea>
            </div>
            <div>
                <button onClick={resetForm} type="submit" className="bg-christalle-500 text-white! rounded mt-6 px-6 py-2 cursor-pointer button-shine text-sm md:text-base hover:no-underline!">Submit Form</button>
            </div>
        </form>
    )
}