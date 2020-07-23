import * as firebase from 'firebase';



firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
    name: 'Aman Thukral',
    age: 26,
    isSingle: true,
    location: {
        city: 'Delhi',
        country: 'India'
    },

});



database.ref('age').set(27);
database.ref('location/city').set('Patparganj');
database.ref('attributes').set({
    height: 1.5,
    weight: 75
});

console.log('data changed');
