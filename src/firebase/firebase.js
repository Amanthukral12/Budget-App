import * as firebase from 'firebase';



firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
    name: 'Aman Thukral',
    age: 26,
    job: 'SDE',
    location: {
        city: 'Delhi',
        country: 'India'
    }
}).then(() => {
    console.log('data is saved!');
}).catch((e) => {
    console.log('this failed', e);
});

database.ref().update({
    job: 'Manager',
    'location/city': 'Mumbai'

});
