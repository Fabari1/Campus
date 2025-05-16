import { defineStore } from 'pinia'
import { ref } from 'vue'



export const useAppStore = defineStore('app', () => {

    /*  
    The composition API way of defining a Pinia store
    ref() s become state properties
    computed() s become getters
    function() s become actions  
    */

    const login = async (username, password) => {
        // FETCH REQUEST WILL TIMEOUT AFTER 20 SECONDS
        const controller = new AbortController();
        const signal = controller.signal;
        const id = setTimeout(() => { controller.abort() }, 60000);
        const URL = `/api/login`;
        const data = { userId: username, password: password };
        try {
            const response = await fetch(URL, {
                method: 'POST',
                signal: signal,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const data = await response.json();
                let keys = Object.keys(data);
                if (keys.includes("message")) {
                    if (data["message"] == "Login successful") {
                        return data;
                    }else{
                        return "Login failed";
                    }
                }
                else {
                    console.log("Login failed: ", data);
                }
            }else {
                const data = await response.text();
                console.log("Login failed: ", data);
            }
        }
        catch (err) {
            console.error('Login error: ', err.message);
        }
        return "Login failed"
    }

    const getStudentCourses = async (studentId) => {
        // FETCH REQUEST WILL TIMEOUT AFTER 20 SECONDS
        const controller = new AbortController();
        const signal = controller.signal;
        const id = setTimeout(() => { controller.abort() }, 60000);
        const URL = `/api/student/${studentId}/courses`;
        const token = localStorage.getItem("token");
        if (token) {
            console.log("Token found: ", token);
        } else {
            console.log("Token not found");
        }
        try {
            const response = await fetch(URL, { method: 'GET', signal: signal, headers: { 'Authorization': `Bearer ${token}` } });
            if (response.status == 401) {
                console.log("Unauthorized: ", response.status);
                return []
            }
            if (response.ok) {
                const data = await response.json();
                let keys = Object.keys(data);
                if (keys.includes("courses")) {
                    if (data["courses"].length > 0) {
                        return data["courses"];
                    }
                    if (data["courses"].length == 0) {
                        console.log("getStudentCourses returned no data");
                    }
                }
            }
            else {
                const data = await response.text();
                console.log(data);
            }
        }
        catch (err) {

            console.error('getStudentCourses error: ', err.message);
        }
        return []
    }


    const getUser = async (identification) => {
        // FETCH REQUEST WILL TIMEOUT AFTER 20 SECONDS
        const controller = new AbortController();
        const signal = controller.signal;
        const id = setTimeout(() => { controller.abort() }, 60000);
        const URL = `/api/user/${identification}`;
        const token = localStorage.getItem("token");

        if (token) {
            console.log("Token found: ", token);
        } else {
            console.log("Token not found");
        }

        try {
            const response = await fetch(URL, { 
                method: 'GET', 
                signal: signal, 
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                let keys = Object.keys(data);
                console.log(data);
                if (keys.includes("user")) {

                        return data;

          
                    
                }
            }
            else {
                const data = await response.text();
                console.log(data);
            }
        }
        catch (err) {
            console.error('getUser error: ', err.message);
        }
        return []
    }


    



    return {
        // EXPORTS	
        login,
        getStudentCourses,
        getUser,
    }
}, { persist: true });