interface fetchNewsInterface {
    page: string;
    pageSize: string;
    search?: string;
    created_after?: string;
};

export async function fetch_news({page, pageSize, search, created_after}: fetchNewsInterface) {
    try {
        let url = `${process.env.NEXT_PUBLIC_API_URL}/news?page=${page}&page_size=${pageSize}`;
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


export async function fetch_single({news_id}:{news_id:string}) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/get/${news_id}`, {
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/like`, {
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/pages/${pageSize}`, {
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