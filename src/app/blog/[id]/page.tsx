
export default async function BlogPage({
    params
}: {
    params: Promise<{id: string}>
}){
    const id = (await params).id;
    return(
        <div>
            Blog {id}
        </div>
    )
}