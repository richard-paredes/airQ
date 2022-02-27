export const fetcher = async <T>({
    url,
    params
}: { url: string, params: Record<string, any> }): Promise<T> => {
    const refinedParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v !== '' && v !== undefined && v !== null));
    const response = await fetch(`${url}?${new URLSearchParams(refinedParams).toString()}`);
    return response.json();
}