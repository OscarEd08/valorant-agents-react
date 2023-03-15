import Language from "./Language";
import Search from "./Search";

function Navbar(props) {
const {setLanguage, setSelectedRole,searchAgent, setSearchAgent } = props;

    return (  
        <div className="flex items-center bg-gray-800 h-28 max-h-full drop-shadow-lg">
            <div className="flex-none ml-14">
                <h1 className="text-5xl font-extrabold text-white font-['Roboto']">Valorant's Agents</h1>
            </div>
            <Search searchAgent={searchAgent} setSearchAgent={setSearchAgent}/>         
            <Language setLanguage={setLanguage} setSelectedRole={setSelectedRole}/>
        </div>
    );
}

export default Navbar;