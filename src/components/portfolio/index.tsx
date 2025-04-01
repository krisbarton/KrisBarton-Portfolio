import PageDivide from "../divider";
import Fundi from "../../assets/portfolio/fundpedia.webp";
import VicoriaPlum from "../../assets/portfolio/victoriaplum.webp";
import DriveWorks from "../../assets/portfolio/driveworks.webp";
import ThatCocktail from "../../assets/portfolio/thatcocktail.webp";
import ThatCocktailMenu from "../../assets/portfolio/thatcocktailmenu.webp";
import VueIcon from "../../assets/icons/vue.svg";
import TypeScriptIcon from "../../assets/icons/typescript.svg";
import TailwindIcon from "../../assets/icons/tailwind.svg";
import PiniaIcon from "../../assets/icons/pinia.svg";
import CSSIcon from "../../assets/icons/css.svg";
import VueXIcon from "../../assets/icons/vuex.svg";
import NodeJsIcon from "../../assets/icons/nodejs.svg";
import LaravelIcon from "../../assets/icons/laravel.svg";
import VitestIcon from "../../assets/icons/vitest.svg";
import JavascriptIcon from "../../assets/icons/javascript.svg";
import GitIcon from "../../assets/icons/git.svg";
import JestIcon from "../../assets/icons/jest.svg";
import ReactIcon from "../../assets/icons/react.svg";
import SassIcon from "../../assets/icons/sass.svg";
import GulpIcon from "../../assets/icons/gulp.svg";
import WordpressIcon from "../../assets/icons/wordpress.svg";
import PhpIcon from "../../assets/icons/php.svg";
import MySqlIcon from "../../assets/icons/mysql.svg";
import SqlIcon from "../../assets/icons/sql.svg";
import ReduxIcon from "../../assets/icons/redux.svg";
import FirebaseIcon from "../../assets/icons/firebase.svg";

export default function Portfolio() {
    return (
        <section id="portfolio" className="flex flex-wrap justify-center items-center w-screen max-w-full flex-grow py-20">
            <div className="w-4/5 max-w-screen-sm text-base md:text-lg leading-relaxed">
                <h2 className="text-4xl font-bold text-emerald-500 text-center mb-10 w-full">Portfolio</h2>
                <p className="my-2">Over the years, I've worked on many great and interesting projects that have pushed my 
                    technical knowledge to the limited and beyond. That's what I thrive on!</p>
                <p className="my-2">For some of the projects I can share visuals, others I can't. 
                    In either case, I'll go through the work I did on the project and explain the code I used.</p>
                <h3 className="text-2xl font-bold w-full my-4 text-center">Fundipedia</h3>
                <div className="flex flex-wrap">
                    <img src={Fundi} alt="Fundipedia" width="600" height="200" className="w-full my-4 rounded-xl border-4 border-christalle-400" />
                    <p className="mb-2 mt-6"><a href="https://www.fundipedia.com/" className="font-bold">Fundipedia</a> is a company that create software for the financial industry.</p>     
                    <p className="my-2">My role there was to code, lead the Frontend Developer team, 
                      create procedures and process, as well as documenting and enforcing company style guides.</p> 
                    <p className="my-2">Not long after arriving, I became the "go-to guy" for frontend unit tests, UI questions,
                        and guiding the team on frontend best practices.</p>
                    <p className="my-2 w-full">
                        The tech I actively used in the role:
                    </p>
                    <p className="my-2 flex items-center w-full">
                        <a href="https://vuejs.org/" target="_blank">
                            <img src={VueIcon} alt="Vue JS Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://www.typescriptlang.org/" target="_blank">
                            <img src={TypeScriptIcon} alt="Typescript Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                            <img src={JavascriptIcon} alt="Javascript Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://tailwindcss.com/" target="_blank">
                            <img src={TailwindIcon} alt="Tailwind CSS Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://pinia.vuejs.org/" target="_blank">
                            <img src={PiniaIcon} alt="Pinia icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://vitest.dev/" target="_blank">
                            <img src={VitestIcon} alt="Vitest icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://nodejs.org/en" target="_blank">
                            <img src={NodeJsIcon} alt="Node JS icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://en.wikipedia.org/wiki/SQL" target="_blank">
                            <img src={SqlIcon} alt="SQL icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://git-scm.com/" target="_blank">
                            <img src={GitIcon} alt="Git icon" width="40" height="40" className="mx-2" />
                        </a>
                    </p>
                    <PageDivide />
                    <h3 className="text-2xl font-bold my-4 w-full text-center">Victoria Plum</h3>
                    <img src={VicoriaPlum} alt="Victoria Plum" width="600" height="200" className="w-full my-4 rounded-xl border-4 border-christalle-400" />
                    <p className="mb-2 mt-6">Vcitoria Plum was an ecommerce website in the Bathroom industry. They are no longer in business.</p>
                    <p className="my-2">My role at Victoria Plum was to lead a small team of frontend developers to create new features, 
                      update, and ehance the website.</p>
                    <p className="my-2">Here I worked in a team consisting of QA, UX, backend and frontend devs to get features completed 
                        and code shipped quickly and incrementally, all behind feature flags.</p>
                    <p className="my-2 w-full">The tech I actively used in this role:</p>
                    <p className="mt-2 mb-4 flex">
                        <a href="https://vuejs.org/" target="_blank">
                            <img src={VueIcon} alt="Vue JS Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://www.typescriptlang.org/" target="_blank">
                            <img src={TypeScriptIcon} alt="Typescript Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                            <img src={JavascriptIcon} alt="Javascript Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
                            <img src={CSSIcon} alt="CSS Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://vuex.vuejs.org/" target="_blank">
                            <img src={VueXIcon} alt="VueX Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://nodejs.org/en" target="_blank">
                            <img src={NodeJsIcon} alt="Node JS icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://laravel.com/" target="_blank">
                            <img src={LaravelIcon} alt="Laravel icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://git-scm.com/" target="_blank">
                            <img src={GitIcon} alt="Git icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://jestjs.io/" target="_blank">
                            <img src={JestIcon} alt="Jest icon" width="40" height="40" className="mx-2" />
                        </a>
                    </p>
                    <PageDivide />
                    <h3 className="text-2xl font-bold my-4 w-full text-center">DriveWorks</h3>
                    <img src={DriveWorks} alt="DriveWorks" width="600" height="200" className="w-full my-4 rounded-xl border-4 border-christalle-400" />   
                    <p className="mb-2 mt-6"><a href="https://www.driveworks.co.uk/" className="font-bold">DriveWorks</a> is an international software company.</p>
                    <p className="my-2">There I maintained, revamped, and created new features for 4 of <a href="https://www.driveworks.co.uk/" className="font-bold">their company websites</a>.</p>
                    <p className="my-2">Here I developed a variable QA process, local environments to test website locally throughout the business, 
                        and created a frontend build system to resue code throughout all four websites.</p>
                    <p className="my-2 w-full">Tech used:</p>
                    <p className="my-2 flex">
                        <a href="https://react.dev/" target="_blank">
                            <img src={ReactIcon} alt="React Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://www.typescriptlang.org/" target="_blank">
                            <img src={TypeScriptIcon} alt="Typescript Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                            <img src={JavascriptIcon} alt="Javascript Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
                            <img src={CSSIcon} alt="CSS Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://sass-lang.com/" target="_blank">
                            <img src={SassIcon} alt="Sass Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://redux.js.org/" target="_blank">
                            <img src={ReduxIcon} alt="Redux Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://gulpjs.com/" target="_blank">
                            <img src={GulpIcon} alt="Gulp Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://nodejs.org/en" target="_blank">
                            <img src={NodeJsIcon} alt="Node JS icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://en-gb.wordpress.org/" target="_blank">
                            <img src={WordpressIcon} alt="Wordpress Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://www.php.net/" target="_blank">
                            <img src={PhpIcon} alt="PHP Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://www.mysql.com/" target="_blank">
                            <img src={MySqlIcon} alt="MySQL icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://git-scm.com/" target="_blank">
                            <img src={GitIcon} alt="Git icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://jestjs.io/" target="_blank">
                            <img src={JestIcon} alt="Jest icon" width="40" height="40" className="mx-2" />
                        </a>
                    </p>
                    <PageDivide />
                    <h3 className="text-2xl font-bold my-4 w-full text-center">ThatCocktail</h3>
                    <img src={ThatCocktail} alt="ThatCocktail" width="600" height="200" className="w-full my-4 rounded-xl border-4 border-christalle-400" />   
                    <p className="mb-2 mt-6"><a href="https://www.thatcocktail.com/" className="font-bold">ThatCocktail</a> is a cocktail website I founded.</p>
                    <p className="my-2">I setup <a href="https://www.thatcocktail.com/" className="font-bold">the website</a> to test out SEO, pagespeed principles, and to further experiment with WordPress,
                        but found the website to be reasonably profitable</p>
                    <p className="my-2 w-full">The tech I actively used in <a href="https://www.thatcocktail.com/" className="font-bold">this project</a>:</p>
                    <p className="my-2 flex">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                            <img src={JavascriptIcon} alt="Javascript Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
                            <img src={CSSIcon} alt="CSS Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://en-gb.wordpress.org/" target="_blank">
                            <img src={WordpressIcon} alt="Wordpress Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://www.php.net/" target="_blank">
                            <img src={PhpIcon} alt="PHP Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://www.mysql.com/" target="_blank">
                            <img src={MySqlIcon} alt="MySQL icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://git-scm.com/" target="_blank">
                            <img src={GitIcon} alt="Git icon" width="40" height="40" className="mx-2" />
                        </a>
                    </p>
                    <PageDivide />
                    <h3 className="text-2xl font-bold my-4 w-full text-center">ThatCocktail Menu</h3>
                    <img src={ThatCocktailMenu} alt="ThatCocktail menu" width="600" height="200" className="w-full rounded-xl border-4 border-christalle-400 my-4" />   
                    <p className="mb-2 mt-6"><a href="https://menu.thatcocktail.com/" className="font-bold">ThatCocktail Menu</a> is an online app to enhance the website.</p>
                    <p className="my-2">The idea for the app is to allow users to utilise the cocktail recipes 
                        stored on <a href="https://www.thatcocktail.com/" className="font-bold">ThatCocktail</a> via api to build a cocktail menu.</p>
                    <p className="my-2 w-full">The tech I actively used for <a href="https://menu.thatcocktail.com/" className="font-bold">this project</a>:</p>
                    <p className="my-2 flex">
                        <a href="https://react.dev/" target="_blank">
                            <img src={ReactIcon} alt="React Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://www.typescriptlang.org/" target="_blank">
                            <img src={TypeScriptIcon} alt="Typescript Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                            <img src={JavascriptIcon} alt="Javascript Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
                            <img src={CSSIcon} alt="CSS Icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://nodejs.org/en" target="_blank">
                            <img src={NodeJsIcon} alt="Node JS icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://git-scm.com/" target="_blank">
                            <img src={GitIcon} alt="Git icon" width="40" height="40" className="mx-2" />
                        </a>
                        <a href="https://firebase.google.com/" target="_blank">
                            <img src={FirebaseIcon} alt="Firebase icon" width="40" height="40" className="mx-2" />
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}