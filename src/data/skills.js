import SVGREST from "../images/rest-api-icon.svg"
import ForitySVG from "../images/fortify-seeklogo.svg" 
import TeamCitySVG from "../images/TeamCity_Icon.svg"
let IconPython = <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />;
let IconJava = 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
let IconCsharp = 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
let IconJavascript = 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
let IconTypescript = 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />

let IconSql = 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" />

const languages =  {"Java" : IconJava ,"Python" :IconPython , "C#" : IconCsharp  , "SQL":IconSql ,"JavaScript" : IconJavascript, "Typescript" : IconTypescript}

let IconDjango = 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
let IconReact = 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
let IconSpring = 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />

let IconRest = <img src={SVGREST} />

const frameworks = {"Django" : IconDjango, "ReactJS" : IconReact, "Spring Framework" : IconSpring,"REST Services":IconRest};
let IconOracle = 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" />
let IconMySql = 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />

let IconPostgre = 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />

const databases = {"Oracle" : IconOracle, "MySql" : IconMySql, "PostgreSql" : IconPostgre};

let IconGit = 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
let IconSelenium = 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" />

let IconAWS = 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />

let IconDocker = 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
let IconTeamCity = <img src = {TeamCitySVG}/>
let IconFority = <img src = {ForitySVG}/>
const tools = {"GIT":IconGit, "Selenium":IconSelenium, "Fortify Security tool":IconFority, "TeamCity":IconTeamCity, "AWS":IconAWS, "Docker":IconDocker}


const skill_sets = {languages : languages,
                     frameworks : frameworks,
                     databases : databases,
                     tools : tools};


export default skill_sets;
