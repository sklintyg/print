export function Debug({ data }: { data: unknown }) {
  return (
    <pre className="overflow-auto bg-slate-800 text-green-400 p-4">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
