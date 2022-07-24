import { useState, useEffect } from "react"
import Api from "../api/Api"
import QuestListTask from "./QuestListTask"

export default function SprintItem(props) {
    const { sprint } = props

    const [quests, setQuests] = useState([])

    useEffect(() => {
        async function fetchSprintQuests(sprint) {
            let json_response = await Api(`/api/quests?sprint_id=${sprint.id}`, "get")
            setQuests(json_response)
            if (json_response[0] && props.selectedQuest === null) {
                props.setSelectedQuest(json_response[json_response.length - 1])
            }
        }
        fetchSprintQuests(sprint)
    }, [])

    return (
        <div className="text-white p-3 min-w-7xl max-w-7xl">
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