"use client"
const Demo = () => {
    return <div className="text-white">
        <div className="fixed flex z-[1000] left-0 top-0 overflow-auto bg-blue-500/40 w-[220px] h-[220px] pointer-events-none">
            wallet dialog
        </div>

        <div
            onClick={() => {
                console.log('click')
            }}
            className=" 
            fixed inset-0 z-50 bg-pink-500 w-[100px] h-[100px] pointer-events-auto  "></div>
    </div>
}

export default Demo;
