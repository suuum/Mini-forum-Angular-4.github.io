import { User } from './User';

export class Post {
    attachments: Attachments[];
    author: string;
    user: User;
    body: string;
    date: Date;
    id: string;
    title: string;
}

export class Attachments {
    data: string;
    type: string;
}
