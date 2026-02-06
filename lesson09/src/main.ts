// Utility Types

// Partial
interface Assignment {
    studentId: number;
    title: string;
    grade: number;
    verified: boolean;
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate};
}
const assignGraded: Assignment = updateAssignment({studentId: 1, title: 'Final Project', grade: 0, verified: false}, {grade: 95});
console.log(updateAssignment({studentId: 1, title: 'Final Project', grade: 0, verified: false}, {grade: 95}));

//Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign;
}

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true };

recordAssignment({ ...assignGraded, verified: true });


//// Record

const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF'
}

type Students = 'Sara' | 'Kelly';
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'F' | 'U';

const finalGrades: Record<Students, LetterGrades> = {
    Sara: 'B',
    Kelly: 'U'
}

interface Grades {
    assign1: number;
    assign2: number;
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 92 },
    Kelly: { assign1: 79, assign2: 15 }
}


//pick and omit

type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;
const score: AssignResult = { studentId: 1, grade: 95 };

type AssignPreview = Omit<Assignment, 'verified' | 'grade'>;
const preview: AssignPreview = { studentId: 1, title: 'Final Project' };


/// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades , "U">

type highGrades = Extract<LetterGrades , "A" | "B">;

//NonNullable

type AllPossibleGrades = 'A' | 'B' | 'C' | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

// Return type

// type newAssign = {title: string, points: number};

const createNewAssign = (title: string, points: number) => {
    return {title, points};
}

type newAssign = ReturnType<typeof createNewAssign>

const tsAssign: newAssign = createNewAssign('Utility Types', 100);
console.log(tsAssign);


// parameters type

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ['Generics', 100];

const tsAssign2: newAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

//////////////////////////////////////////////////////////////////
// awaited help with return type of a promise

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if(err instanceof Error) {
            console.log(err.message);
        }
    });
    return data;
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then(users => console.log(users))