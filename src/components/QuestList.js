export default function QuestList() {
    const sprint = {
        title: "Prototype backend for frontend design",
    }
    return (
        <div className="text-white p-3">
            <SprintItem sprint={sprint} />
        </div>
    )
}

function SprintItem(props) {
    const { sprint } = props

    const quests = [
        {
            id: 1,
            title: "Create the project",
            done: false        },
        {
            id: 2,
            title: "Setup controller for listing tasks",
            done: false
        }
    ]
    return (
        <div>
            <div className="text-center text-lg ring-1 ring-white rounded-md p-1">
                {sprint.title}
            </div>
            {quests.map(quest => {
                return (
                    <QuestListTask
                        key={quest.id}
                        quest={quest}
                        chosen={quest.id === 2}
                    />
                )
            })}
        </div>
    )
}

function QuestListTask(props) {
    const { quest, chosen } = props;

    return (
        <div>
            <div className="">

                <div className={(chosen ? `border-l my-3 p-3 bg-indigo-700 text-white` : `${quest.done ? "line-through" : ""} border-l my-3 p-3 transition duration-150 hover:bg-teal-600 hover:text-black`)}>
                    {quest.title}
                </div>
            </div>
        </div>
    )
}