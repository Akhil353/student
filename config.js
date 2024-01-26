export var url;
if (location.hostname === "localhost") {
        url = "http://localhost:8086";
} else if (location.hostname === "127.0.0.1") {
        url = "http://127.0.0.1:8086";
} else {
        url = "https://flask2.nighthawkcodingsociety.com";
}

export const options = {
    method: 'GET', 
    mode: 'cors', 
    cache: 'default',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
    },
};