import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import { Counter } from "~/components";

export const loader = () => {
  return json({ message: "Hello Remix HMR" });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-6xl text-red-500">Remix HMR</h1>
      <Counter />
      <p className="text-lg">{data.message}</p>
    </div>
  );
}
