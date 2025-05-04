import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const posts = [];

app.use(express.static(`public`));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render(`index.ejs`, { text: `hello world!`, posts: posts });
});

app.post("/post", (req, res) => {
    const postTitle = req.body["title"];
    const postText = req.body["text"].replaceAll(/\n/g, `<br>`);
    const postDate = new Date().toLocaleString().replaceAll(`/`, `-`);
    if (postTitle !== `` && postText !== ``) {
    posts.unshift({title: postTitle, text: postText, date: postDate});
    }

    res.redirect(`/`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})