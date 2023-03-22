import VoiceAgent from "./VoiceAgent";
import AbilityModal from "./AbilityModal/AbilityModal";

function ModalAgent(props) {
  const { agent, toggleModal } = props;

  const { displayName, role, background, fullPortrait, abilities, voiceLine } = agent;

  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="card-large dark:bg-background relative">
        <div className="flex justify-between relative">
          <div className="z-10 ml-4 md:ml-[280px] xl:ml-[480px] mb-4 text-black dark:text-white font-bold">
            <h1 className="text-3xl  xl:text-4xl">{displayName}</h1>
            <h2>{role.displayName}</h2>
          </div>
          <button
            onClick={toggleModal}
            className="absolute right-0 lg:-rigth-10 xl:right-0 xl:bottom-20 z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center static">
          <div className="relative md:-ml-16 -mb-10">
            <img
              src={background}
              className="h-[300px] w-[400px] md:h-[350px] md:w-[350px] md:mr-20 md:-mt-20 md:mb-5 xl:h-[500px] xl:w-[500px] xl:mr-32 xl:-mt-32 xl:-mb-16 invert-[0.70] dark:invert-[0.3] "
              alt={displayName}
            />
            <img
              src={fullPortrait}
              alt={displayName}
              className="bottom-2 w-[400px] h-[370px] md:w-[450px] md:-mb-0 md:bottom-0 md:right-10 xl:h-[630px] xl:w-[630px] absolute xl:-mb-12 xl:-bottom-10 xl:right-14"
            />
          </div>

          <AbilityModal ability={abilities} />
        </div>
        <VoiceAgent voiceAgent={voiceLine.mediaList[0].wave} />
      </div>
    </div>
  );
}

export default ModalAgent;
