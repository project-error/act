declare function useNui<T = {}>(event: string, data: T): T;
declare function useNuiEvent<T = unknown>(event: string, callback: (data: T) => void): void;

export { useNui, useNuiEvent };
