export default async function Page() {
  const res = await fetch("http://localhost:4000/api/hello");
  const data = await res.json();

  return (
    <main style={{ padding: 20 }}>
      <h1>Frontend (Next.js)</h1>
      <p>Backend says: {data.message}</p>
    </main>
  );
}
