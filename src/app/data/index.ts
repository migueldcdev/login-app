export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

//mocked db actions
export async function createUser(user: User) {
  return user;
}

export async function getUser(email: string, password: string) {
  if (email === "user@mail.com" && password === "user") return 1;
}
