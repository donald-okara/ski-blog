package ke.don.ski_blog.content

import ke.don.core.DocBlock
import ke.don.core.Post

val post = Post(
    id = "lazy-list",
    title = "Lazy List Basics",
    blocks = listOf(
        DocBlock.H("Lazy Lists in Compose"),
        DocBlock.P("This explains how LazyColumn works."),
        DocBlock.Demo("lazy-list-demo")
    )
)