export async function get_exchanges({x}:{x:Number}) {
    try {
        let url = `http://127.0.0.1:8000/api/asset/random_exchange/${x}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            return [{}];
        }

        const result = response.json();
        return result;
    } catch (error) {
        return [{}];
    }
}
