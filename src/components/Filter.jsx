import languages from '../data/languages.json';

function Filter(props) {
  const { setSelectedRole, selectedRole, agents } = props;

  const handleRoleSelect = (role) => setSelectedRole(role);

  const nameRoles = agents
  .filter(agent => agent.isPlayableCharacter !== false)
  .map(agent => agent.role.displayName)
  .filter((name, index, arr) => arr.indexOf(name) === index);
  
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 my-10 mx-10 place-items-center gap-4 sm:gap-8 lg:gap-10 xl:gap-28 2xl:gap-40">
      {nameRoles.map((role, index) => (
        <button key={index} onClick={() => handleRoleSelect(role)} 
        className={`text-sm md:text-base py-3 w-28 lg:w-44 lg:py-4 font-semibold rounded-full border hover:text-white hover:bg-gray-800 dark:text-white dark:hover:bg-gray-900 hover:border-transparent focus:outline-none ${selectedRole === role ? 'bg-gray-800 border-gray-800 text-white dark:bg-gray-900 dark:border-gray-900'  : 'text-gray-800 border-gray-200'}
        ${index===3? 'ml-32 sm:ml-0':''}`}>
          {role}
        </button>
      ))}
      <button onClick={() => handleRoleSelect('')} className={`ml-32 sm:ml-0 text-xs md:text-base py-3 w-28 lg:w-44 lg:py-4 font-semibold rounded-full border hover:border-transparent focus:outline-none ${selectedRole === ''? 'text-white bg-gray-800 border-gray-800 dark:bg-gray-900 dark:border-gray-900' : 'text-gray-800 hover:text-white hover:bg-gray-800 dark:text-white dark:hover:bg-gray-900 ' }`} >
        All
      </button>
    </div>
  );
}

export default Filter;
