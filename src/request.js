export default class Request {

    post(path, body) {
        return new Promise((resolve, reject) => {
            fetch('http://18.233.246.3/api' + (path.startsWith('/') ? path : '/' + path),
                {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(body),
            }).then(response => resolve(response.json())).catch(error => reject(error))
        })
    }
}