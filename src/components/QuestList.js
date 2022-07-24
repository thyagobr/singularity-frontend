import { useEffect, useState } from "react"
import Api from "../api/Api"
import SprintItem from "./SprintItem"

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
                <SprintItem
                    key={sprint.id}
                    sprint={sprint}
                    selectedQuest={props.selectedQuest}
                    setSelectedQuest={props.setSelectedQuest} />
            )
        })
    )
}