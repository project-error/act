async function fetchNui<T = any, D = any>(
	eventName: string,
	data?: D,
): Promise<T> {
	const options = {
		method: "post",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
		},
		body: JSON.stringify(data),
	};

	const resourceName = (window as any).GetParentResourceName();

	const resp = await fetch(`https://${resourceName}/${eventName}`, options);

	const responseObj = await resp.json();

	return responseObj;
}

export default fetchNui;
