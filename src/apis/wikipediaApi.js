import axios from 'axios';

// const proxy = `https://cors-anywhere.herokuapp.com/`;
const base = 'http://en.wikipedia.org/w/api.php';
const proxy = `https://cors-anywhere.herokuapp.com/`;

export default axios.create({
	baseURL:`${proxy}${base}`,
});

