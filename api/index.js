module.exports = app => {



    app.get('/api/posts', (req, res) => {

        posts ={
            1: {title: "arketa", body: "einai logiko?"},
            2: {title: "chicken", body: "ko kok ko"},
            3: {title: "pig", body: "grrrrrrr"}

        }

        res.json(posts);
    })
}