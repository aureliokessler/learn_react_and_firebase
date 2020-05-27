import db from "./FirestoreInit"

export function AddBlogPost(data) {
    data = {
        title: "that is it!",
        text_blob: "a blob of text",
        author: "I",
        tags: ["programming", "learning", "practice"]
    }

    db.collection('blog').add({
        title: data.title,
        text_blob: data.text_blob,
        created_at: Date.now(),
        author: data.author,
        tags: data.tags
    });
}