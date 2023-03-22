import AbilityList from "./AbilityList";

function Ability({ ability }) {
  return (
    <div className="flex justify-center">
      <table>
        <AbilityList ability={ability} />
      </table>
    </div>
  );
}

export default Ability;
