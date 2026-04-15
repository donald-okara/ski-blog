import { Author } from "@/types/blog";

export const AUTHORS: Author[] = [
  {
    id: "donald",
    slug: "donald",
    name: "Donald Isoe",
    bio: "Android Engineer & Technical Writer focused on Jetpack Compose and Modern Android Development.",
    description: "Donald is a passionate Android developer who loves deep-diving into Compose internals and sharing his findings with the community. He currently works on building delightful mobile experiences and exploring the boundaries of declarative UI.",
    avatar: "/profiles/donald.jpg",
    socials: [
      {
        id: "github",
        name: "GitHub",
        url: "https://github.com/disoe",
        icon: "github"
      },
      {
        id: "twitter",
        name: "Twitter",
        url: "https://twitter.com/donald_isoe",
        icon: "twitter"
      },
      {
        id: "linkedin",
        name: "LinkedIn",
        url: "https://linkedin.com/in/donaldisoe",
        icon: "linkedin"
      }
    ]
  },
  {
    id: "alexdev",
    slug: "alexdev",
    name: "Alex Rivera",
    bio: "Senior Mobile Architect and Kotlin Multiplatform enthusiast.",
    description: "Alex has over a decade of experience in mobile development and is a frequent speaker at Android conferences worldwide. He specializes in architecture and performance optimization.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    socials: [
      {
        id: "github",
        name: "GitHub",
        url: "https://github.com/alexdev",
        icon: "github"
      },
      {
        id: "twitter",
        name: "Twitter",
        url: "https://twitter.com/alexdev",
        icon: "twitter"
      }
    ]
  }
];
