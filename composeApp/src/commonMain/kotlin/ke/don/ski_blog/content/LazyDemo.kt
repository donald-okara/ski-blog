package ke.don.ski_blog.content

val post = Post(
    id = "lazy-list",
    title = "Lazy List Basics",
    blocks = listOf(
        H("Lazy Lists in Compose"),
        P("This explains how LazyColumn works."),
        Demo("lazy-list-demo")
    )
)