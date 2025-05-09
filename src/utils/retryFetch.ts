export const retryFetch = async <T>(fetchFn : () => Promise<T>, maxRetries = 3, delayMs = 300) => {
    let lastError:Error|null = null
    for (let i = 0; i<maxRetries; i++){
        try{
            return await fetchFn();
        }
        catch(error){
            console.warn(error);
            lastError = error instanceof Error ? error : new Error(String(error));
            if (i < maxRetries-1){
                await new Promise((resolve) => setTimeout(resolve, delayMs));
            }
        }
    }
    throw lastError;
}