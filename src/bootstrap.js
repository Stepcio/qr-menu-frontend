import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = 'https://api.qr-menu-project.xyz';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;