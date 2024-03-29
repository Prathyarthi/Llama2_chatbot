import express from 'express'
import ollama from 'ollama'
import cors from 'cors'

let modelResponse = ""

const chatConfig = ({
    model: "llama2",
    role: "user",
    content: ""
})

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5174'
}))

app.post('/ask', async (req, res) => {
    try {
        const question = req.body.question.trim()
        const response = await invoke(question)
        res.status(200).json({
            success: true,
            message: "Response fetched successfully",
            response
        })


    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to fetch response"
        })
    }
})


async function invoke(question) {
    console.log(`-----`)
    console.log(`[${chatConfig.model}]: ${question}`)
    console.log(`-----`)
    try {
        console.log(`Running prompt...`)
        const response = await ollama.chat({
            model: chatConfig.model,
            messages: [{ role: chatConfig.role, content: question }],
        })
        console.log(`${response.message.content}\n`)
        modelResponse = response.message.content
        return modelResponse
    }
    catch (error) {
        console.log(`Query failed!`)
        console.log(error)
    }
}

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
