import { useGetTimeBasedContent } from "./hooks";

export function Welcome({ name }: { name: string }) {
  const { icon, greeting } = useGetTimeBasedContent();
  return (
    <h1 className="text-2xl  flex items-center gap-2">
      <p>{greeting}</p>,<p>{name}!</p>
      <span>{icon}</span>
    </h1>
  );
}
