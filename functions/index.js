const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const dateNow = new Date().toLocaleTimeString;

let setTestPost = {
    author: 'aurelio',
    text: 'blob of data',
    date: 'dateNow',
    tags: ['Building', 'Programming']
};

const result = admin.firestore().collection('blog').doc('articles').set({article2: setTestPost});