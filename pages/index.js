import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl my-10">Welcome to the METAVERSE!</div>
        <button
          className="bg-yellow-500 p-3 rounded-lg font-bold hover:animate-pulse hover:underline"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
