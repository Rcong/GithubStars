function auth(opts = {}, username, password) {
    return {...opts, headers: {
        ...opts.headers,
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
    }};
}

// export async function fetchUser(username, password) {
//     return await fetch('https://api.github.com/user', auth({}, username, password)).then(res => res.json());
// }


export function fetchUser(username, password) {
    return fetch('https://api.github.com/user', auth({}, username, password)).then(res => res.json());
}

export function fetchStars(url, username, password) {
    console.info('fetchStars', url);
    let links;
    const result = await fetch(url, auth({type: 'json'}, username, password)).then(res => {
        links = parseLink(res.headers.get('Link'));
        return res.json();
    });
    return {
        result: result.map(selectStar),
        links,
    };
}