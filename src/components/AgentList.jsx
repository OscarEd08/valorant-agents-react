import {useState, useEffect} from 'react';
import Agent from './Agent';
import Filter from './Filter';
import Navbar from './Navbar';

function AgentList(){    
    const [agents,setAgents] = useState([]);
    const [language,setLanguage] = useState('es-MX');
    const [searchAgent, setSearchAgent] = useState('');
    const [selectedRole, setSelectedRole] = useState('');

    const changeLanguage = (newLanguage) => setLanguage(newLanguage);
    const handleSearch = (search) => setSearchAgent(search);

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(`https://valorant-api.com/v1/agents?language=${language}`);
            const data = await response.json();
            setAgents(data.data);
        }
        fetchData();
    },[language]);
        
    
    const filteredAgents = agents
    .filter(agent => agent.isPlayableCharacter !== false)
    .filter(agent => {
        return (
            (selectedRole === '' || agent.role.displayName === selectedRole) &&
            agent.displayName.toLowerCase().includes(searchAgent.toLowerCase())
          );
  });   
        
    
    return(
        <div>
            <Navbar setLanguage={changeLanguage} setSelectedRole={setSelectedRole} searchAgent={searchAgent} setSearchAgent={handleSearch}/>        
            <Filter agents={agents} selectedRole={selectedRole} setSelectedRole={setSelectedRole} language={language}/>
            <div className='grid grid-cols-3 gap-11 mx-11 my-14'>
            {
                filteredAgents.map( agent => {                    
                    return(
                        <Agent key={agent.uuid} agent={agent}/>
                    )
                })
            }
            </div>
        </div>
      )
}

export default AgentList;