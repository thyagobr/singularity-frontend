import Api from "../api/Api"

export default function Quest(props) {
    const { quest } = props

    const acceptQuest = async () => {
        const json_response = await Api(`/api/quests/${quest.id}`, 'put', { quest: { event: "start" } })
    }

    if (quest) {
        return (
            <div className="flex flex-col p-4 text-white col-span-2">
                <div className="text-4xl text-center mb-12 font-bold">
                    <h1>{quest.title}</h1>
                </div>
                <div className="my-5">
                    <h2 className="text-3xl font-semibold">Description</h2>
                    <div className="mt-2 text-justify">
                        {quest.description}
                    </div>
                </div>
                <div className="my-5">
                    <h2 className="text-3xl font-semibold">Objectives</h2>
                    <ul className="py-3 pl-5">
                        {quest.objectives.map((objective, index) => {
                            return <li key={index}>{objective.title}</li>
                        })}
                    </ul>
                </div>
                <div className="my-5">
                    <h2 className="text-3xl font-semibold">Rewards</h2>
                    <ul className="py-3 pl-5">
                        {quest.rewards.map((reward, index) => {
                            return <li key={index}>{reward.title}</li>
                        })}
                    </ul>
                </div>
                <div className="flex gap-x-7">
                    {!quest.done && (
                        <>
                            <button className="rounded-lg bg-indigo-500 py-3 px-7 shadow-md ring-2 ring-white" onClick={acceptQuest}>Accept</button>
                            <button className="rounded-lg bg-indigo-500 py-3 px-7 shadow-md ring-2 ring-white">Make a question</button>
                        </>
                    )}
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col p-4 text-white col-span-2">
                <h1 className="text-white text-center text-3xl">No quests to select</h1>
            </div>
        )
    }
}