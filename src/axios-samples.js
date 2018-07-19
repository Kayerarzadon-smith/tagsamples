import axios from 'axios';

const instance = axios.create({
    databaseURL: 'https://tagsports-samples-e8a74.firebaseio.com/',
    storageBucket: 'gs://tagsports-samples-e8a74.appspot.com'
});

export default instance;