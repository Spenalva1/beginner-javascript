export async function fetchJoke(){
    const result = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json',
        }
    });
    const data = await result.json();
    return data.joke;
}