export interface IPosts {
    id: string;
    title: string;
    body: string;
    tags?: Array<string>;
}

export const postsInMemory: IPosts[] = [
    {
        id: "92bj0nko",
        title: "In-memory data is the novelty of the century",
        body: "Databases are too slow!",
        tags: ["#News", "#Backend"]
    },
    {
        id: "h4tqhxeb",
        title: "Back home database",
        body: "Databases are better than any other option for saving data. (Except for Notepad)",
        tags: ["#Database", "#Backend"]
    },
    {
        id: "73rh16ih",
        title: "Notepad - Far From Home",
        body: "Developers have adopted new technique to save data!",
        tags: ["#Notepad", "#Backend"]
    },
]

interface User {
    id: string;
    email: string;
    password: string;
    name: string;
}

export const user: User = {
    id: "6id6s5f4",
    email: "teste@email.com",
    name: "Teste Parker",
    password: "teste1962"
};