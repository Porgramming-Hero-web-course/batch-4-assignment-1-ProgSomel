{
    interface Profile {
        name:string;
        age:number;
        email:string
    }

    const validateKeys= <T extends Profile>(obj: T, keys:(keyof T)[]):boolean => {
        for(const key of keys){
            if(!(key in obj)){
                return false;
            }
        }
        return true;
    }

    const person = { name: "Alice", age: 25, email: "alice@example.com" };
}