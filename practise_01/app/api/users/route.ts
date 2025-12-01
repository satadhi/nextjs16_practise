import Db from "@/app/api/db";

// GET http://localhost:3001/api/users
export async function GET() {
    return new Response(JSON.stringify(Db), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function POST(request: Request) {
    const reqBody = await request.json();
    const newUser = {
        id: Db.length + 1,
        name: reqBody.name,
        email: reqBody.email
    };
    Db.push(newUser);
    return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}