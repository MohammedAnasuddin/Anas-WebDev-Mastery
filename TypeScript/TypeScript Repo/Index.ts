let demo:string = "Hello World";

let num_array: number[] = [1, 2 , 3]
type typeId = string | number;

function addNumber (a:number , b:number): number{
    return a+b;
}

interface ObjTypes {
    id: number;
    name: string;
    age?: number;
    greet(para1: string): void;
}

const User : ObjTypes = {
    id: 123,
    name : "Anas",
    greet: (message: string) =>{ console.log(`Hello ${message}`)}
}

// const getId : typeId (  )=> { }
// --- Intersection Types ---

// Let's define another shape for something that is employable.
interface Employable {
    employeeId: string;
    department: 'Engineering' | 'Marketing' | 'HR';
}

// We can create a new type that is the INTERSECTION of ObjTypes and Employable.
// An 'Employee' must have all properties from BOTH types.
type Employee = ObjTypes & Employable;

const newEmployee: Employee = {
    id: 456,
    name: "Jane Doe",
    employeeId: "E7890",
    department: "Engineering",
    greet: (message: string) => { console.log(`Welcome, ${message}`); }
};

// --- Case Study: The "Trust, but Verify" API ---

// 1. Define the "blueprint" for the data you EXPECT from the API.
interface UserProfile {
    id: number;
    username: string;
    profile: {
        name: string;
        lastActive: string; // We expect this property!
    };
}

/*
// 2. Write the function using the blueprint.
async function displayUserProfile(userId: number) {
    const response = await fetch(`/api/user/${userId}`);
    // Use a type assertion to tell TypeScript what shape to expect.
    const user = await response.json() as UserProfile;

    // If you change `lastActive` to `lastSeen` in the interface above,
    // TypeScript will immediately show an error on the line below.
    // This prevents runtime errors!
    console.log(user.profile.lastActive);
}
*/