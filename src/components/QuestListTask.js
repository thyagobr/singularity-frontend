export default function QuestListTask(props) {
    const { quest, selectedQuest, setSelectedQuest } = props;

    return (
        <div>
            <div className="" onClick={() => setSelectedQuest(quest)}>
                <div className={(selectedQuest && selectedQuest.id === quest.id ? `${quest.done ? "line-through" : ""} border-l my-3 p-3 bg-indigo-700 text-white` : `${quest.done ? "line-through" : ""} border-l my-3 p-3 transition duration-150 hover:bg-teal-600 hover:text-black`)}>
                    {quest.title}
                </div>
            </div>
        </div>
    )
}