// const API_ROOT = 'https://pokeapi.co/api/v2/pokemon/ditto';

export function* getApi(path) {
	return yield callApi(path, 'GET');
}

export function* getApiWithRealUser(path) {
	return yield callApi(path, 'GET');
}

export function* postApi(path, params) {
	return yield callApi(path, 'POST', params);
}

export function* postApiWithRealUser(path) {
	return yield callApi(path, 'POST');
}

export function* putApi(path, params) {
	return yield callApi(path, 'PUT', params);
}

export function* patchApi(path, params) {
	return yield callApi(path, 'PATCH', params);
}

export function* deleteApi(path) {
	return yield callApi(path, 'DELETE');
}

export function* callApi(path, method,) {
	return yield fetch(path, method);
}
