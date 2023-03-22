import { useState, useEffect } from "react";
import AgentList from "./Agent/AgentList";
import Filter from "./Filter";
import Navbar from "./Navbar/Navbar";

function Page() {
  const [agents, setAgents] = useState([]);
  const [language, setLanguage] = useState("es-MX");
  const [searchAgent, setSearchAgent] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const changeLanguage = (newLanguage) => setLanguage(newLanguage);
  const handleSearch = (search) => setSearchAgent(search);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://valorant-api.com/v1/agents?language=${language}`
      );
      const data = await response.json();
      setAgents(data.data);
    }
    fetchData();
  }, [language]);

  const filteredAgents = agents
    .filter((agent) => agent.isPlayableCharacter !== false)
    .filter((agent) => {
      return (
        (selectedRole === "" || agent.role.displayName === selectedRole) &&
        agent.displayName
          .toLowerCase()
          .includes(searchAgent.replace(/\s/g, "").toLowerCase())
      );
    });

  return (
    <div className="dark:bg-background dark:text-text w-full">
      <Navbar
        setLanguage={changeLanguage}
        setSelectedRole={setSelectedRole}
        searchAgent={searchAgent}
        setSearchAgent={handleSearch}
      />
      <Filter
        agents={agents}
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        language={language}
      />
      <AgentList filteredAgents={filteredAgents} />
    </div>
  );
}

export default Page;
