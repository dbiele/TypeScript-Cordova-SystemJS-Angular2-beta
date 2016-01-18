interface UserData {
    Name: string;
    PersonalIdentifier: string;
}

export function normalizeDataTest(jsonIn) {
    var data: UserData = JSON.parse(jsonIn);
    return {
        name: data.Name,
        id: Number(data.PersonalIdentifier)
    };
}