interface fetchNewsInterface {
    page: string;
    pageSize: string;
    search?: string;
    created_after?: string;
};

export async function fetch_news({page, pageSize, search, created_after}: fetchNewsInterface) {
    try {
        let url = `http://127.0.0.1:8000/api/news?page=${page}&page_size=${pageSize}`;
        if (search) {
            url += `&search=${search}`;
        }
        if (created_after) {
            url += `&created_after=${created_after}`;
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


export async function fetch_single({id}:{id:string}) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/news/get/${id}`, {
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

export async function fetch_like({news_id, user_id}:{news_id:string,user_id:string}) {
    try {
        const data = {
            news_id:news_id,
            user_id:user_id
        };
        const response = await fetch(`http://127.0.0.1:8000/api/news/like`, {
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
        const response = await fetch(`http://127.0.0.1:8000/api/news/pages/${pageSize}`, {
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