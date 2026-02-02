export type Message = {
    user_id: string;
    created_at: {
        seconds: number;
        nanoseconds: number;
    } | null;
    photoURL: string;
    text: string;

};