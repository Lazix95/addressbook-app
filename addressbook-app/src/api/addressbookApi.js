import { http } from "./index";

export async function getAddressbookEntriesApi() {
  const response = await http.get('/entries');
  return response.data;
}

export async function postAddressbookEntriesApi(payload) {
  const response = await http.post('/entries', payload);
  return response.data;
}

export async function getAddressbookEntryApi({uuid}) {
  const response = await http.get(`/entries/${uuid}`);
  return response.data;
}

export async function putAddressbookEntriesApi(uuid, payload) {
  const response = await http.put(`/entries/${uuid}`, payload);
  return response.data;
}