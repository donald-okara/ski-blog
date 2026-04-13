package ke.don.core

import kotlinx.serialization.json.Json

object PostParser {

    private val json = Json {
        ignoreUnknownKeys = true
        prettyPrint = true
    }

    fun parse(raw: String): Post {
        return json.decodeFromString(Post.serializer(), raw)
    }
}