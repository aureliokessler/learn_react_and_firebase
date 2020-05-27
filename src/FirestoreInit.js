import firebase from "./FirebaseInit"
import "firebase/firestore";

/* load db data */
const db = firebase.firestore();

/* how your get te local firebase firestor emulator data */
if (window.location.hostname === "localhost") {
    db.settings({
      host: "localhost:8080",
      ssl: false
    });
}

export default db;