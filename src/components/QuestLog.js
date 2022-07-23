import Quest from "./Quest"
import QuestList from "./QuestList"

export default function QuestLog() {
    return (
        <div className="grid grid-cols-3">
            <QuestList />
            <Quest />
        </div>
    )
}