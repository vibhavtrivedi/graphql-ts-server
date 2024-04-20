import { User } from "./entity/User";
import { ResolverMap } from "./types/graphql.utils";
import * as bcrypt from "bcryptjs";
export const resolvers: ResolverMap = {
    Query: {
        hello: (_: any, name: any) => `${name }"Hello from Yoga!"`,
    },
    Mutation: {
        register: async (_: any, { email, password }) => {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = User.create({
                email,
                password: hashedPassword
            })
            await user.save();
            return true;
        }
    }
};
