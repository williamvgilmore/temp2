// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name: string;
        };
    }

    interface JWT {
        user: {
            id: string;
            name: string;
        };
    }
}