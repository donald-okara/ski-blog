package ke.don.ski_blog

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform