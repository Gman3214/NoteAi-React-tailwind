export async function GetUserNotes(authToken) {
    try {
        const response = await fetch('https://gj4rfv-3000.csb.app/api/v1/notes', {

            method: 'GET',

            headers: {

                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + authToken
            },

        })
        const data = await response.json();

        return data;

    } catch (err) {
        console.log(err)
    }
}

export async function PatchNote(authToken, noteid, updates) {
    try {
        const response = await fetch('https://gj4rfv-3000.csb.app/api/v1/notes', {

            method: 'PATCH',

            headers: {

                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + authToken
            },

            body: JSON.stringify({_id : noteid, ...updates})

        })

        const data = await response.json();
        console.log(data);

        return data;

    } catch (err) {
        console.log(err)
    }
}

export async function DeleteNote(authToken, noteid) {
    try {
        const response = await fetch('https://gj4rfv-3000.csb.app/api/v1/notes', {

            method: 'DELETE',

            headers: {

                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + authToken
            },

            body: JSON.stringify({ _id: noteid })

        })
        const data = await response.json();

        return data;

    } catch (err) {
        console.log(err)
    }
}

export async function CreateNote(authToken, noteData) {
    try {
        const response = await fetch('https://gj4rfv-3000.csb.app/api/v1/notes', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + authToken
            },

            body: JSON.stringify(noteData)

        })
        const data = await response.json();

        return data;

    } catch (err) {
        console.log(err)
    }
}

// const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhbTIzIiwiaWF0IjoxNzAzNjg0MjY0LCJleHAiOjE3MDM3NzA2NjR9.reoNY6Mbxue_xD4C2DasM1XNsiXg4JRJlDtZ4wdTamleAUjoPTUQpG1pJLouy89TLo8u5z0S1rqR8BZ-V9YT3w"

// GetUserNotes(token).then((result) => {
//     console.log(result); 
// }).catch((err) => {
//     console.log(err);
// });


// DeleteNote(token, "658c360d5e62e5a3b4bb4391").then((result) => {
//     console.log(result);
// }).catch((err) => {

// });

// PatchNote(token, "658c3450f0bc937ce9b06e36", {title: "hellow"})

// CreateNote(token, {
//     title: "a title",
//     text: "this is a test",
//     color: "transparent"
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {

// });