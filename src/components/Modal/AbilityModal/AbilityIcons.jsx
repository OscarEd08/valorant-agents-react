function AbilityIcons(props) {
  const { ability, selectedAbility, handleAbility } = props;
  return (
    <div className="flex flex-row md:flex-col">
      {ability.map((ability) => {
        return (
          ability.displayIcon && (
            <div key={ability.slot}>
              <button
                onClick={() =>
                  handleAbility(ability.description, ability.displayName)
                }
              >
                <img
                  className={`mx-2 md:mx-4 p-1 rounded-full w-12 h-12 md:h-14 md:w-14 
                                            ${
                                              selectedAbility.description ===
                                                ability.description &&
                                              selectedAbility.name ===
                                                ability.displayName
                                                ? "bg-neutral-800 dark:bg-neutral-900"
                                                : "invert-[0.85] dark:invert-0"
                                            }`}
                  src={ability.displayIcon}
                  alt={ability.displayName}
                />
              </button>
            </div>
          )
        );
      })}
    </div>
  );
}

export default AbilityIcons;
