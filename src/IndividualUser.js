import useSWR from 'swr'

function IndividualUser({id}) {
    const { data, error} = useSWR(id ? `http://localhost:3000/posts/${id}` : null)

    if (error) {
        return <p>{error.message}</p>
    }

    if (!data) {
        return <p>Loading....</p>
    }

  return (
    <div>
       <h4>{JSON.stringify(data)}</h4>
    </div>
  )
}

export default IndividualUser
