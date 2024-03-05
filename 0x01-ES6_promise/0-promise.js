function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous API call
        setTimeout(() => {
            // Assuming the API call is successful, resolve the promise
            resolve("Response from API");
        }, 1000); // Simulating a delay of 1 second
    });
}

export default getResponseFromAPI;