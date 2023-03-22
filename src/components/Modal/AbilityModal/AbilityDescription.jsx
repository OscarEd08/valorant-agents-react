function AbilityDescription(props) {
  const { selectedAbility, showText, setShowText } = props;
  return (
    <div className="text-justify mx-14 w-56 static">
      <p className="text-lg sm:text-sm my-2 text-center md:text-left md:text-xl md:-mx-7 md:mb-3 font-extrabold">
        {selectedAbility.name}
      </p>
      {selectedAbility.description.length <= 150 ? (
        <p className="text-[12px] sm:text-[11px] -mx-12 sm:-mx-16 md:text-sm xl:text-base md:-mx-7">
          {selectedAbility.description}
        </p>
      ) : (
        <div className="text-[12px] sm:text-[11px] -mx-12 sm:-mx-16 md:text-sm xl:text-base md:-mx-7">
          <p>
            {showText
              ? selectedAbility.description
              : selectedAbility.description.slice(0, 150)}

            {selectedAbility.description.length > 150 && (
              <div className="grid justify-items-center mt-5 font-black">
                <button
                  className="text-zinc-400 hover:text-zinc-700 dark:text-slate-500 dark:hover:text-slate-400"
                  onClick={() => setShowText(!showText)}
                >
                  {showText ? "SHOW LESS" : "SHOW MORE"}
                </button>
              </div>
            )}
          </p>
        </div>
      )}
    </div>
  );
}

export default AbilityDescription;
