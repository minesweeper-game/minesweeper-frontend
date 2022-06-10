export default doPOSTRequest = async (requestData) => {
    console.log(requestData)
    let url = "https://minesweeper-game-api-je726t4uyq-uc.a.run.app/api/games"
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    }
    console.log("fetch started")
    const response = await globalThis.fetch(url, options)
    const json = await response.json()
    console.log("fetch finished")
    console.log(json)
    return json
}