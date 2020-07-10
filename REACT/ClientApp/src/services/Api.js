const BASE_URL = window.location.protocol + '//' + window.location.host;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) => delay(randomNumber(min, max));

export async function callApi(endpoint, options = {}) {
    await simulateNetworkLatency();
    options.headers = {'Content-Type': 'application/json',  Accept: 'application/json',};
    const url = BASE_URL + endpoint;
    //console.log(url);
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

export default callApi;