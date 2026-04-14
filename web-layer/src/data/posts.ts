import { Post } from "@/types/blog";
import { stateHoistingPost } from "./posts/state-hoisting";
import { contextReceiversPost } from "./posts/context-receivers";
import { customLayoutsPost } from "./posts/custom-layouts";

export const POSTS: Post[] = [
  stateHoistingPost,
  contextReceiversPost,
  customLayoutsPost
];
