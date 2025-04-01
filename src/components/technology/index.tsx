import PageDivide from "../divider";
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

export default function Technology() {
    return (
        <section id="technology" className="flex flex-wrap justify-center items-center w-screen max-w-full flex-grow py-20 bg-stormdust-900">
            <div className="w-4/5 max-w-screen-sm text-base md:text-lg leading-relaxed">
                <h2 className="text-4xl font-bold text-emerald-500 text-center mb-10 w-full">Technology</h2>
                <p className="my-2 w-full text-center">Over the years, I've used a lot of different technologies. Here's a selection of them.</p>
                <p className="my-8 w-full font-bold text-center text-2xl">Frontend:</p>
                <p className="my-2 flex justify-center">
                    <a href="https://react.dev/" target="_blank">
                        <img src={ReactIcon} alt="React Icon" width="40" height="40" className="mx-2" />
                    </a>
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
                    <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
                        <img src={CSSIcon} alt="CSS Icon" width="40" height="40" className="mx-2" />
                    </a>
                    <a href="https://sass-lang.com/" target="_blank">
                        <img src={SassIcon} alt="Sass Icon" width="40" height="40" className="mx-2" />
                    </a>
                </p>
                <PageDivide />
                <p className="my-8 w-full font-bold text-center text-2xl">State managment:</p>
                <p className="my-2 flex justify-center">
                    <a href="https://vuex.vuejs.org/" target="_blank">
                        <img src={VueXIcon} alt="VueX Icon" width="40" height="40" className="mx-2" />
                    </a>
                    <a href="https://pinia.vuejs.org/" target="_blank">
                        <img src={PiniaIcon} alt="Pinia icon" width="40" height="40" className="mx-2" />
                    </a>
                    <a href="https://redux.js.org/" target="_blank">
                        <img src={ReduxIcon} alt="Redux Icon" width="40" height="40" className="mx-2" />
                    </a>
                </p>
                <PageDivide />
                <p className="my-8 w-full font-bold text-center text-2xl">Backend:</p>
                <p className="my-2 flex justify-center">
                    <a href="https://nodejs.org/en" target="_blank">
                        <img src={NodeJsIcon} alt="Node JS icon" width="40" height="40" className="mx-2" />
                    </a>
                    <a href="https://laravel.com/" target="_blank">
                        <img src={LaravelIcon} alt="Laravel icon" width="40" height="40" className="mx-2" />
                    </a>
                    <a href="https://en-gb.wordpress.org/" target="_blank">
                        <img src={WordpressIcon} alt="Wordpress Icon" width="40" height="40" className="mx-2" />
                    </a>
                    <a href="https://www.php.net/" target="_blank">
                        <img src={PhpIcon} alt="PHP Icon" width="40" height="40" className="mx-2" />
                    </a>
                    <a href="https://gulpjs.com/" target="_blank">
                        <img src={GulpIcon} alt="Gulp Icon" width="40" height="40" className="mx-2" />
                    </a>
                </p>
                <PageDivide />
                <p className="my-8 w-full font-bold text-center text-2xl">Database:</p>
                <p className="my-2 flex justify-center">
                    <a href="https://www.mysql.com/" target="_blank">
                        <img src={MySqlIcon} alt="MySQL icon" width="40" height="40" className="mx-2" />
                    </a>
                    <a href="https://en.wikipedia.org/wiki/SQL" target="_blank">
                        <img src={SqlIcon} alt="SQL icon" width="40" height="40" className="mx-2" />
                    </a>
                    <a href="https://firebase.google.com/" target="_blank">
                        <img src={FirebaseIcon} alt="Git icon" width="40" height="40" className="mx-2" />
                    </a>
                </p>
                <PageDivide />
                <p className="my-8 w-full font-bold text-center text-2xl">Unit testing:</p>
                <p className="my-2 flex justify-center">
                    <a href="https://jestjs.io/" target="_blank">
                        <img src={JestIcon} alt="Jest icon" width="40" height="40" className="mx-2" />
                    </a>
                    <a href="https://vitest.dev/" target="_blank">
                        <img src={VitestIcon} alt="Vitest icon" width="40" height="40" className="mx-2" />
                    </a>
                </p>
                <PageDivide />
                <p className="my-8 w-full font-bold text-center text-2xl">Version control:</p>
                <p className="my-2 flex justify-center">
                    <a href="https://git-scm.com/" target="_blank">
                        <img src={GitIcon} alt="Git icon" width="40" height="40" className="mx-2" />
                    </a>
                </p>
            </div>
        </section>
    )
}