
const MAX_ITEMS = 7
const MAX_LEFT = (MAX_ITEMS - 1) / 2

export default function Pagination({isLoading, isShow, limit, total, offset, setOffset }: {isLoading: boolean, isShow: boolean, limit: number, total: number, offset: number, setOffset: (param: number) => void }) {

    const current = offset ? (offset / limit) + 1 : 1
    const pages = Math.ceil(total / limit)
    const first = Math.max(current - MAX_LEFT, 1)

    function onPageChange(page: number){
        setOffset((page - 1) * limit)
    }

    if(isLoading || isShow){
        return null
    }

    return (
        <div className="flex w-full justify-center items-center h-[8%] px-2">
            <div className="flex justify-around items-center w-[300px] h-[60%]">
                <button disabled={current === 1} onClick={() => onPageChange(current-1)} className="p-1 w-8 h-8 border rounded-sm bg-slate-200 shadow-sm">
                    <img src="/arrow_left.svg" alt="" width={20} />
                </button>
                {Array.from({ length: MAX_ITEMS }).map((_, index) => {
                    const page = index + first
                    return (
                        <button key={page} onClick={() => onPageChange(page)} className={`p-1 w-8 h-8 border rounded-sm ${current === page ? 'bg-slate-300' : 'bg-slate-200'} shadow-sm`}>
                            {page}
                        </button>
                    )
                })}
                <button disabled={current === pages} onClick={() => onPageChange(current+1)} className="p-1 w-8 h-8 border rounded-sm bg-slate-200 shadow-sm">
                    <img src="/arrow_right.svg" alt="" width={20} />
                </button>
            </div>
        </div>
    )
}