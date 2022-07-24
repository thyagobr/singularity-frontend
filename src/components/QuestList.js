import { useState } from "react"

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

    const [selectedQuest, setSelectedQuest] = useState(null);
    const [quests, setQuests] = useState([
        {
            id: 1,
            title: "Create the project",
            done: false,
            chosen: false,
        },
        {
            id: 2,
            title: "Setup controller for listing tasks",
            done: false,
            chosen: false
        }
    ])

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
                        selectedQuest={selectedQuest}
                        setSelectedQuest={setSelectedQuest}
                    />
                )
            })}
        </div>
    )
}

function QuestListTask(props) {
    const { quest, selectedQuest, setSelectedQuest } = props;

    return (
        <div>
            <div className="" onClick={() => setSelectedQuest(quest)}>
                <div className={(selectedQuest && selectedQuest.id === quest.id ? `border-l my-3 p-3 bg-indigo-700 text-white` : `${quest.done ? "line-through" : ""} border-l my-3 p-3 transition duration-150 hover:bg-teal-600 hover:text-black`)}>
                    {quest.title}
                </div>
            </div>
        </div>
    )
}