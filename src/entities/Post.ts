export class Post {
    private readonly id: string;
    private body: string;
    private title: string;
    private tags?: Array<string>;

    constructor(title: string, body: string, tags?: Array<string>) {
        this.body = body;
        this.title = title;
        this.tags = tags;
        this.validateFormatPost();
    }
    validateFormatPost() {
        if (this.title.length <= 0 || this.body.length <= 0) {
            throw new Error("Invalid post format");
        }
    }
}