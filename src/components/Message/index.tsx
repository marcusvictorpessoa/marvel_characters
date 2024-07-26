

export default function Message({ content }: { content: string }) {

    return (
        <div className="bg-red-500 animate-bounce absolute rounded-sm z-10 top-[17vh] left-[40vw] p-1">
            <span className="text-white font-medium text-base">{content}</span>
        </div>

    )
}