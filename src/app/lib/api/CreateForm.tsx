export const createForm = (payload: object) => {
    console.log(JSON.stringify(payload))
    const response = fetch("http://localhost:5125/api/database", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        }
    });
    console.log(response)
    return response;
}