import axios from "axios"
import { useState } from "react"

export const InputBox = () => {
    const [prompt, setPrompt] = useState("")
    const [answer, setAnswer] = useState("Answer Here")
    const [loading, setLoading] = useState(false)
    const handleSumbit = () => {
        setLoading(true)
        axios.post("http://localhost:3000/ask", { question: prompt })
            .then((res) => {
                setAnswer(res.data.response)
                setLoading(false)
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            })
    }
    return (
        <>
            <div className="flex justify-center items-center bg-slate-900 h-screen">
                <div className="flex flex-col h-1/2 w-1/2 m-2 justify-center items-center">
                    <div className="h-3/4 w-3/4 flex flex-col justify-center items-center">
                        <img className="rounded-lg" src={"src/assets/llama2.png"} alt="llama2" />
                        <textarea value={prompt} onChange={(e) => {
                            setPrompt(e.target.value)
                        }} className="m-2 p-5 bg-slate-500 text-white place-content-center ring-offset-purple-900 w-96 h-32 rounded-3xl resize-none overflow-hidden" placeholder="Type your prompt here!" />
                        <button onClick={handleSumbit} className="m-2 border rounded bg-blue-500 text-gray-100 p-2">{loading ? "Loading..." : "Generate"}</button>
                    </div>
                </div>
            </div>
            <div className="h-screen bg-slate-900 flex justify-center items-center">
                <p className="text-white border rounded p-2">{answer}</p>
            </div>
        </>
    )
}


