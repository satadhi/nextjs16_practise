import Image from 'next/image';

const Home = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  console.log(data);
  return <>
    <div className="text-2xl"> Home Page</div>
    <div className='flex flex-wrap gap-2'>
      {
        data.map((item: { id: number; title: string }) => (
          <div key={item.id} className="p-4 m-2 border rounded">
            <h2 className="text-xl font-bold"> {item.id} </h2>
            <p className="text-base"> {item.title} </p>
          </div>
        ))
      }
    </div>
  </>
}


export default Home;