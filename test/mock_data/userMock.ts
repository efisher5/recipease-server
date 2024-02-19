import { user as User } from '@prisma/client';

export const userExample: User = {
    id: '',
    first_name: 'Pichu',
    last_name: 'Fisher',
    email: 'admin@admin.com',
    created_ts: new Date("2024-02-16T12:00.00.000Z"),
    updated_ts: null
}