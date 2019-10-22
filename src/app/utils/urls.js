export const origin = 'http://localhost:3001';
const baseUrl = 'http://localhost:3001/api/v1';
const urls = {
  login: `${baseUrl}/login`,
  loginRedirect: `${baseUrl}/google-auth`,
  fetchAppContacts: `${baseUrl}/contacts`,
  fetchUserContacts: `${baseUrl}/user/contacts`,
  fetchUserMessages: `${baseUrl}/user/contacts/messages`,
  sendMessage: `${baseUrl}/send`,
};

export default urls;
