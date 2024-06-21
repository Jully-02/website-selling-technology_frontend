type RequestOptions = {
    headers?: { [key: string]: string };
    method?: string;
    body?: any;
};

export async function request(url: string, options: RequestOptions = {}): Promise<any> {
    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}
