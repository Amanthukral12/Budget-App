import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };








// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapShot) => {
// //         expenses.push({
// //             id: childSnapShot.key,
// //             ...childSnapShot.val()
// //         });
// //     });
// //     console.log(expenses);
// // });

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((childSnapShot) => {
// //             expenses.push({
// //                 id: childSnapShot.key,
// //                 ...childSnapShot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     });

// database.ref('expenses').push({
//     description: 'coffee',
//     note: '',
//     amount: 250,
//     createdAt: '27-July-2020'
// });

// // database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // })

// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('Error', e);
// //     })

// // database.ref().set({
// //     name: 'Aman Thukral',
// //     age: 26,
// //     stressLevel: 7,
// //     job: {
// //         title: 'SDE',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Delhi',
// //         country: 'India'
// //     }
// // }).then(() => {
// //     console.log('data is saved!');
// // }).catch((e) => {
// //     console.log('this failed', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Mumbai'

// // });
