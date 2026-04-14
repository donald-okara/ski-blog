package ke.don.core

import kotlinx.serialization.Serializable

@Serializable
sealed class DocBlock {
    @Serializable
    data class H(val text: String) : DocBlock()
    @Serializable
    data class P(val text: String) : DocBlock()
    @Serializable
    data class Demo(val id: String) : DocBlock()
    @Serializable
    data class Code(val code: String, val language: String) : DocBlock()
    @Serializable
    data class Callout(val calloutType: String, val title: String? = null, val text: String) : DocBlock()
    @Serializable
    data class Presentation(val presentationType: String, val embedUrl: String, val title: String) : DocBlock()
}

@Serializable
data class Post(
    val id: String,
    val title: String,
    val blocks: List<DocBlock>
)