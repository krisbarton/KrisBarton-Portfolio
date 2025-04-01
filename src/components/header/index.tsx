import Navigation from "../navigation"
import MobileNavigation from "../navigation/mobile"
import PrimaryButton from "../buttons/primary"
import useWindowSize from "../../hooks/windowSize";

export default function Header() {

  const isMobile = useWindowSize();

    return (
        <header className='p-6 w-full flex justify-between fixed z-10 bg-stormdust-950'>
          <div className="flex justify-center items-center">
            <button className="cursor-pointer">
                <h1>
                  <span className="bg-emerald-500 rounded px-2 py-0.5 font-bold text-2xl mr-1 inline-block rotate-6">K</span> 
                  <span className='text-2xl font-bold'>Barton</span>
                </h1>
            </button>
          </div>

          { isMobile ? <Navigation /> : <MobileNavigation /> }
 
          <div className="hidden lg:flex">
            <PrimaryButton 
              text="Contact Me"
              location="#contact"
            />
          </div>
        </header>
    )
}