

export default function PageTitle({title}: {title: string}){

    return (
        <div className="flex justify-start items-center sm:px-5 max-sm:px-1">
            <h1 className="text-xl font-medium">{title}</h1>
        </div>
    )
}