export async function get_exchanges({x}:{x:Number}) {
    try {
        let url = `${process.env.NEXT_PUBLIC_API_URL}/asset/random_exchange/${x}`;

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
