{
    interface Profile {
        name:string;
        age:number;
        email:string;
    }

    const updateProfile = (obj:Profile, updates: {[k in keyof Profile]?: Profile[k]}):Profile => {
        return {...obj , ...updates };
    }

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    updateProfile(myProfile, { age: 26 });

}