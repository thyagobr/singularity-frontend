import { useEffect, useState } from "react"
import Api from "../api/Api"

export default function QuestList(props) {
    const [sprints, setSprints] = useState([])

    useEffect(() => {
        async function fetchSprints() {
            let json = await Api("/api/sprints", "get", null, null, null)
            setSprints(json)
        }
        fetchSprints()
    }, [])

    return (
        sprints.map(sprint => {
            return (
                <div className="text-white p-3">
                    <SprintItem
                        sprint={sprint}
                        selectedQuest={props.selectedQuest}
                        setSelectedQuest={props.setSelectedQuest} />
                </div>
            )
        })
    )
}

function SprintItem(props) {
    const { sprint } = props

    const [quests, setQuests] = useState([])

    useEffect(() => {
        async function fetchSprintQuests(sprint) {
            let json_response = await Api(`/api/quests?sprint_id=${sprint.id}`, "get")
            setQuests(json_response)
        }
        fetchSprintQuests(sprint)
    }, [])

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
                        selectedQuest={props.selectedQuest}
                        setSelectedQuest={props.setSelectedQuest}
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