import fs from 'fs/promises'

export type User = {
    name: string
    email: string,
    password: string
}

const filePath = process.cwd() + '/src/app/data/users.json';

async function readJSONFile(): Promise<User[]> {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error('Error reading file:', err);
      throw new Error("Error reading users database");
      
    }
  }

async function writeToJsonFile(jsonData: User[]) {
    try {
      fs.writeFile(filePath, JSON.stringify(jsonData))
    } catch(err) {
        console.log("Error writting to file:", err);
        throw new Error("Error adding user to database");
    }
    
}

export async function addUser(user: User) {
    const data: User[] = await readJSONFile();
    
    data.push({ name: user.name, email: user.email, password: user.password });

    await writeToJsonFile(data);
     
}

export async function getUser(email: string, password:string) {
  const data = await readJSONFile();
  
  const user = data.find(user => user.email === email && user.password === password);  

  return user || null;
  
}
