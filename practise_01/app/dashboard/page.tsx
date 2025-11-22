import Link from "next/link";

const Dashboard = () => {

  return <>
  <div className="text-4xl"> Users a list</div>
  <ol>
    <li className="text-4xl"><Link href="/dashboard/1">User 1</Link></li>
    <li className="text-4xl"><Link href="/dashboard/2">User 2</Link></li>
    <li className="text-4xl"><Link href="/dashboard/3">User 3</Link></li>
    <li className="text-4xl"><Link href="/dashboard/4">User 4</Link></li>
  </ol>
    </>
}


export default Dashboard;