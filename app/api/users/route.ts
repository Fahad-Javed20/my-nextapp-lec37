import { NextResponse } from "next/server";

const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "jdoe@me.com",
    gender: "male",
    password: "1234",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    email: "jadoe@me.com",
    gender: "female",
    password: "1234",
  },
  {
    id: 3,
    firstName: "Jim",
    lastName: "Beam",
    email: "jbeam@me.com",
    gender: "male",
    password: "1234",
  },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const newUser = await request.json();
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("id") || "0", 10);
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0];
    return NextResponse.json(deletedUser);
  } else {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}

export async function PATCH(request: Request) {
  const updatedUser = await request.json();
  const index = users.findIndex((user) => user.id === updatedUser.id);
  if (index !== -1) {
    users[index] = updatedUser;
    return NextResponse.json(updatedUser);
  } else {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}


