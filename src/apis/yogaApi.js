// api to get all yoga poses
// https://github.com/rebeccaestes/yoga_api/blob/master/yoga_api.json
// https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json
import axios from 'axios';

const proxy = `https://cors-anywhere.herokuapp.com/`;
const base = 'https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json';

export default axios.create({
	baseURL:`${proxy}${base}`,
});

