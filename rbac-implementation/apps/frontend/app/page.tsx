export default async function Page() {
  const res = await fetch("http://localhost:4000/api/hello");
  const data = await res.json();

  const p = await fetch("http://localhost:4000/api/permission/user");
  const data2 = await p.json();
  console.log(data2)
  return (
    <main style={{ padding: 20 }}>
      <h1>Frontend (Next.js)</h1>
      <p>Backend says: {data.message}</p>
    </main>
  );
}
