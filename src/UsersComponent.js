import useSWR from 'swr'
import IndividualUser from './IndividualUser'
import { useState } from 'react'

function UsersComponent() {
    const [id, setId] = useState(null);
    const { data, error, mutate} = useSWR(`http://localhost:3000/posts`,
    {
        // revalidateOnFocus: false,
        // refreshInterval :1000,
    }
    )

    if (error) {
        return <p>{error.message}</p>
    }

    if (!data) {
        return <p>Loading....</p>
    }

    return (
        <div>
            <h1>Users Component</h1>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            {/* <h4>{JSON.stringify(data)}</h4> */}
            <button onClick={() => mutate()}>Refresh.....</button>
            {data.map(user => (
                <p key={user.id} onClick={() => setId(user.id)}>{user.title}</p>
            ))}
            <div>
            <IndividualUser id={id} />
            </div>
         
        </div>
    )
}

export default UsersComponent
