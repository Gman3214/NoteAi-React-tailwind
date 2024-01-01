export async function LoginUserWithToken(token) {
    try {
        const response = await fetch("https://gj4rfv-3000.csb.app/api/v1/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: token })
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json();

        return data

    } catch (err) {
        return err
    }
}


export async function LoginUser(username, password) {
    try {
        const response = await fetch("https://gj4rfv-3000.csb.app/api/v1/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username, password: password })
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json();

        return data

    } catch (err) {
        return err
    }
}

export async function RegisterUser(email, username, password) {
    try {

        const response = await fetch('https://gj4rfv-3000.csb.app/api/v1/user/register', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json'

            },

            body: JSON.stringify({
                email: email,
                username: username,
                password: password
            })

        });

        const data = await response.json();

        return data;


    } catch (err) {
        console.log(err);
    }
}

export async function PatchUser(authToken, updates ) {
    try {
        const response = await fetch('https://gj4rfv-3000.csb.app/api/v1/user', {
        
            method: 'PATCH',
        
            headers: {
        
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + authToken
        
            },
        
            body: JSON.stringify({authToken, ...updates})
        
        })
        
        const data = await response.json();
        
        return data;
        
    } catch (err) {
        console.log(err)
    }
        
}

export async function DeleteUser(authToken, password) {
    try {
        const response = await fetch('https://gj4rfv-3000.csb.app/api/v1/user', {
        
            method: 'DELETE',
        
            headers: {
        
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + authToken
        
            },
        
            body: JSON.stringify({password: password})
        
        })
        
        const data = await response.json();
        
        return data;
        
    } catch (err) {
        console.log(err)
    }        
}






const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhbTIzIiwiaWF0IjoxNzAzNjg0MjY0LCJleHAiOjE3MDM3NzA2NjR9.reoNY6Mbxue_xD4C2DasM1XNsiXg4JRJlDtZ4wdTamleAUjoPTUQpG1pJLouy89TLo8u5z0S1rqR8BZ-V9YT3w"



// DeleteUser(token, "apassword").then((result) => {
//     console.log(result);
// }).catch((err) => {
    
// }); 

// PatchUser(token, {password: "apassword", apikey: "a diffrent api key"}).then((result) => {
//     console.log(result);
// }).catch((err) => {
    
// }); 

// RegisterUser("test@test.test", "ram2", "apassword").then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


// LoginUser("ram23", "apassword").then((result) => {
//     console.log(result);
// }).catch((err) => {
    
// });

