import { User as PrismaUser } from 'generated/prisma/client';
export class User implements PrismaUser {
  name: string;
  id: number;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
