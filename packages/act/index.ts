import { useEffect, useRef, useState } from "react";
import fetchNui from "./fetch-nui";

export function useNui<T = {}>(event: string, data: T) {
	const [response, setResponse] = useState<T | null>(null);

	useEffect(() => {
		fetchNui(event, data).then((res) => {
			setResponse(res);
		});
	}, [data]);

	return response;
}

export function useNuiEvent<T = unknown>(
	event: string,
	callback: (data: T) => void,
) {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		window.addEventListener("message", (e) => {
			callbackRef.current(e.data);
		});

		return () => {
			window.removeEventListener("message", (e) => {
				callbackRef.current(e.data);
			});
		};
	}, [event]);
}
