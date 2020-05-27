import "./FirebaseInit"

function getCollection(name) {
    db.collection(name).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            setBlogPosts(doc.data());
        });
    });
}
