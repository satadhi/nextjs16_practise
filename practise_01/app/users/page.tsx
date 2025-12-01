import Image from 'next/image';

const Home = async () => {
    const response = await fetch('http://localhost:3001/api/users');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log(data);
    return <>
        <div className="text-2xl"> Uses Lists</div>
        <div className='flex flex-wrap gap-2'>
            {
                data.map((item: { id: number; name: string, email: string }) => (
                    <div key={item.id} className="p-4 m-2 border rounded">
                        <h2 className="text-xl font-bold"> {item.name} </h2>
                        <p className="text-base"> {item.email} </p>
                    </div>
                ))
            }
        </div>
    </>
}


export default Home;