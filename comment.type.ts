export interface Id {
  $oid: string;
}

export interface User {
  id: number;
  firebaseId: string;
  name: string;
  profileUrl: string;
  profileId: string;
  _id: string;
}

export interface Reactions {
  totalLiked: number;
  totalDisliked: number;
}

export interface Stats {
  isLinkClickable: boolean;
  reactions: Reactions;
  totalReplies: number;
  isPinned: boolean;
  _id: string;
}

export interface Comment {
  message: string;
  contentId: string;
  contentType: string;
  user: User;
  stats: Stats;
  status: number;
  updatedAt: Date;
  createdAt: Date;
  _id: string;
  __v: number;
}

export interface Headers {
  host: string;
  "user-agent": string;
  accept: string;
  authorization: string;
  "content-type": string;
  "content-length": string;
}

export interface Body {
  message: string;
  contentId: string;
}

export interface CreatedAt {
  $date: Date;
}

export interface UpdatedAt {
  $date: Date;
}

export interface CommentLog {
  _id: Id;
  comment: Comment;
  headers: Headers;
  machineHostName: string;
  route: string;
  method: string;
  body: Body;
  query: Record<string, unknown>;
  requestId: string;
  path: string;
  url: string;
  createdAt: CreatedAt;
  updatedAt: UpdatedAt;
  __v: number;
}
