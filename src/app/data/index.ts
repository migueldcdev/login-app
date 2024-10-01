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
  console.log(email, password);
  return 1;
}
