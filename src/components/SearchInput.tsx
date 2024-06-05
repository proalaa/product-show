import { Input } from "@/components/ui/input";

export default function SearchInput({
  model,
  setModel,
}: {
  model: string;
  setModel: (args: any) => void;
}) {
  return (
    <div className="flex w-full items-center space-x-2">
      <Input
        type="search"
        placeholder="Search..."
        className="rounded-lg"
        name={"search"}
        value={model}
        onChange={(event: any) => setModel(event.target.value)}
      />
    </div>
  );
}
