export const fetcher = async <T>({
    url,
    params
}: { url: string, params: Record<string, any> }): Promise<T> => {
    const refinedParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v !== ''));
    const response = await fetch(`${url}?${new URLSearchParams(refinedParams).toString()}`);
    return response.json();
}