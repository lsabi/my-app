const data = [
    {
        id: 1,
        name: "blabla"
    },
    {
        id: 111,
        name: "blabla"
    }
];

export async function get({ params })
{
    const { id } = params;
    if(id)
        return {
            body: data.filter(x => x.id == id)
        }

    return {
        body: data
    }
} 
