import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let posts = [];

app.use(express.static(`public`));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render(`index.ejs`, { posts: posts });
});

app.post("/post", (req, res) => {
    const postTitle = req.body["title"];
    const postName = req.body["name"];
    const postText = req.body["text"].replaceAll(/\n/g, `<br>`);
    const postDate = new Date().toLocaleString().replaceAll(`/`, `-`);
    if (postTitle !== `` && postText !== `` && postName !== ``) {
        posts.unshift({
            id: Date.now(),
            name: postName,
            title: postTitle,
            text: postText,
            date: postDate,
            stars: 0,
        });
        res.redirect(`/`);
    }
});

app.delete("/delete/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    posts = posts.filter(post => post.id !== postId);
    res.redirect(`/`);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})