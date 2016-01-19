interface UserData {
    Name: string;
    PersonalIdentifier: string;
}

export function normalizeDataTest(jsonIn: string) {
    let data: UserData = JSON.parse(jsonIn);
    return {
        name: data.Name,
        id: Number(data.PersonalIdentifier)
    };
}