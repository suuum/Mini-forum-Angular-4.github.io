export class Post {
    attachments:Attachments [];
    author: String;
    body: String;
    date: Date;
    id: String;
    title: String;
}

export class Attachments {
    data: String;
    type: String;
}
