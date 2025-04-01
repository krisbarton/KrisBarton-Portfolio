import Profile from '../../assets/profile-small.webp';
import PrimaryButton from '../buttons/primary';
import SecondaryButton from '../buttons/secondary';

export default function Hero() {
    return (
        <section className="lg:mt-20 pb-20 flex flex-wrap justify-center lg:justify-start items-start lg:min-h-[765px] w-screen max-w-full bg-stormdust-900 relative">
            <img src={Profile} 
                width="600" 
                height="100" 
                alt="Kris Barton hero profile image. An absolute stunner." 
                className='hidden lg:block absolute -top-8 left-8 z-20' 
            />
            <div className='right-1/8 lg:absolute top-1/6 w-11/12 lg:w-5/12 3xl:right-1/4 flex flex-wrap items-start text-2xl px-4 mt-40 lg:mt-20'>
                <span className='w-full block text-base'>Hi, I'm</span>
                <span className='w-full block text-4xl md:text-6xl font-bold text-emerald-500'>Kris Barton</span>
                <span className='w-full block text-3xl text-stormdust-300 mb-2'>I like to code things</span>
                <span className='w-full block text-base md:text-lg mt-0 mb-4'>A seasoned developer with over 17 years commercial experience</span>
                <div className="mt-2 items-center text-lg flex flex-wrap md:flex-nowrap">
                    <PrimaryButton text="Let's Talk" location='#contact' />
                    <span className='mt-4 xs:ml-2 xs:mt-0'>
                        <SecondaryButton text="Get to know me" location='#about' />
                    </span>
                </div>
            </div>
        </section>
    )
}