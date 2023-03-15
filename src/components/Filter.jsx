import languages from '../data/languages.json';

function Filter(props) {
  const { setSelectedRole, selectedRole, agents } = props;

  const handleRoleSelect = (role) => setSelectedRole(role);

  const nameRoles = agents
  .filter(agent => agent.isPlayableCharacter !== false)
  .map(agent => agent.role.displayName)
  .filter((name, index, arr) => arr.indexOf(name) === index);

  return (
    <div className="flex flex-row justify-center gap-40 my-11">
      {nameRoles.map((role, index) => (
        <button key={index} onClick={() => handleRoleSelect(role)} 
        className={`px-10 py-2 font-semibold rounded-full border hover:text-white hover:bg-gray-800 hover:border-transparent focus:outline-none ${selectedRole === role ? 'bg-gray-800 border-gray-800 text-white' : 'text-gray-800 border-gray-200'}`}>
          {role}
        </button>
      ))}
      <button onClick={() => handleRoleSelect('')} className={`px-10 py-2 font-semibold rounded-full border hover:border-transparent focus:outline-none ${selectedRole === ''? 'text-white bg-gray-800 border-gray-800' : 'text-gray-800 hover:text-white hover:bg-gray-800' }`} >All</button>
    </div>
  );
}

export default Filter;
