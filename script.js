const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';

axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
    console.log('server response:',resp)
}).catch(err => {
    console.log('There was an error:',err.message);
});

const newItem = {
    title: 'new Item',
    details:'Some neat details go here'
};

// axios.post(`${BASE_URL}/todos${API_KEY}`,newItem).then(resp => {
//     console.log('Add response:', resp);
// });

const itemId = '58eecfe316c1437ff8f24602';

//http://api.reactprototypes.com/todos/id
axios.get(`${BASE_URL}/todos/${itemId}${API_KEY}`).then(resp => {
    console.log('Details item response:', resp);
});
