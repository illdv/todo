import axios from 'axios';

const API_URL = 'http://5b733b2e414e970014304b48.mockapi.io/Titles';

export default () =>
	axios.get(`${API_URL}`).then(res => res.data);


