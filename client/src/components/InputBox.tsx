export const InputBox = () => {
    return (
        <>
            <div className="flex justify-center items-center bg-slate-900 h-screen">
                <div className="flex flex-col h-1/2 w-1/2 m-2 justify-center items-center">
                    <div className="rounded h-3/4 w-3/4 flex justify-center items-center">
                        <img className="" src={"src/assets/llama2.png"} alt="llama2" />
                    </div>
                    <div className="flex flex-col justify-center items-center p-2">
                        <input className="m-2 p-2 bg-slate-500 text-yellow-100 place-content-center ring-offset-purple-900" type="text" placeholder="Type your prompt here!" />
                        <button className="m-2 border rounded bg-slate-50">Generate</button>
                    </div>
                </div>
            </div>
            <div>
                { }
            </div>
        </>
    )
}    
