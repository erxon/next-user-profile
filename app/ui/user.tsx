import { fetchUserByEmail } from "../lib/data";
import PersonIcon from "@mui/icons-material/Person";
import { auth } from "@/auth";
import Image from "next/image";
import { clsx } from "clsx";

export default async function User({
  email,
}: {
  email: string | undefined | null;
}) {
  const user = await fetchUserByEmail(email);
  
  if (user) {
    return (
      <div>
        <div className="mb-3">
          <Avatar />
        </div>
        <p className="font-semibold">{user.name}</p>
        <p className={clsx(!user.email && "text-gray-500")}>
          {user.email ? user.email : "No email provided"}
        </p>
      </div>
    );
  }
}

function Avatar() {
  return (
    <div className="rounded-full bg-teal-600 w-fit p-3 mx-auto">
      <PersonIcon sx={{ width: "100px", height: "100px", color: "white" }} />
    </div>
  );
}

function AvatarFromProviders({ image }: { image: string }) {
  return <Image width={56} height={56} src={image} alt="Profile Picture" />;
}
