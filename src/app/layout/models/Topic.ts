export class Topic{
    author: string;
    body: string;
    date: Date;
    id: string;
    posts:string[];
    sticky: boolean;
    title: string;
    showChild:boolean = true;
}