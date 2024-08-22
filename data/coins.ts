interface fetchCoinInterface {
    page: string;
    pageSize: string;
    search?: string;
};

export async function fetch_coin({page, pageSize, search}: fetchCoinInterface) {
    try {
        let url = `http://127.0.0.1:8000/api/asset/list?page=${page}&page_size=${pageSize}`;
        if (search) {
            url += `&search=${search}`;
        }

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

export async function fetch_single({id}:{id:any}) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/asset/get/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            return {};
        }

        const result = response.json();
        console.log(result)
        return result;
    } catch (error) {
        return {};
    }
}

export async function add_to_favorite({asset_id, user_id}:{asset_id:string,user_id:string}) {
    try {
        const data = {
            asset_id:asset_id,
            user_id:user_id
        };
        const response = await fetch(`http://127.0.0.1:8000/api/asset/favorite`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            return 'error';
        }

        const result = response.json();
        return result;
    } catch (error) {
        return 'error';
    }
}

export async function check_favorite({asset_id, user_id}:{asset_id:string,user_id:string}) {
    try {
        const data = {
            asset_id:asset_id,
            user_id:user_id
        };
        const response = await fetch(`http://127.0.0.1:8000/api/asset/isFavorite`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            return 'error';
        }

        const result = response.json();
        return result;
    } catch (error) {
        return 'error';
    }
}

export async function fetch_pages({pageSize}:{pageSize:string}) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/asset/pages/${pageSize}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            return 'error';
        }

        const result = response.json();
        return result;
    } catch (error) {
        return 'error';
    }
}