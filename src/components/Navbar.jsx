import Language from "./Language";
import Search from "./Search";

function Navbar(props) {
const {setLanguage, setSelectedRole,searchAgent, setSearchAgent } = props;

    return (  
        <div className="flex flex-col sm:flex-row items-center bg-gray-800 h-32 sm:h-28 max-h-full drop-shadow-lg">
            <div className="flex-none p-3 sm:p-0 ml-7 lg:ml-10 xl:ml-14">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white font-['Roboto']">Valorant's Agents</h1>
            </div>
            <div className="flex relative sm:flex-1">
                <Search searchAgent={searchAgent} setSearchAgent={setSearchAgent}/>         
                <Language setLanguage={setLanguage} setSelectedRole={setSelectedRole}/>        
            </div>
        </div>
    );
}

export default Navbar;