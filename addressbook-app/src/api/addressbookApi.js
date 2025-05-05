import { http } from "./index";

export async function getAddressbookEntriesApi({search} = {}) {
  const searchParam = search ? `search=${search}` : '';
  await new Promise(resolve => setTimeout(resolve, 800));
  const response = await http.get(`/entries?${searchParam}`);
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
export async function deleteAddressbookEntriesApi(uuid) {
  const response = await http.delete(`/entries/${uuid}`);
  return response.data;
}