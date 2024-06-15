import Image from "next/image";
import { getAll } from "../lib/database/user-db";
import { User } from "../lib/types";

export default async function Users({query}: {query: string;}) {
  const users = await getAll(query);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-center">
      {users.map((user: User, index) => {
        return (
          <div key={index} className="rounded bg-gray-100 p-4">
            {user.image && (
              <Image className="w-[48px] h-[48px] rounded-full object-cover mx-auto mb-3" width={1000} height={1000} src={user.image} alt="avatar" />
            )}
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm">{user.email}</p>
          </div>
        );
      })}
    </section>
  );
}
