import Agent from "./Agent";

function AgentList({ filteredAgents }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-11 mx-11 mt-14">
      {filteredAgents.map( agent => {
        return <Agent key={agent.uuid} agent={agent} />;
      })}
    </div>
  );
}

export default AgentList;
