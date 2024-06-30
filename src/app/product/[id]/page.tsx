import { Metadata } from "next"

type props = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: props): Promise<Metadata> {
    return {
        title: `Auto Parts | Product #${params.id}`,
        description: `Generated for Auto Parts Product #${params.id} Cars`,
    }
}

const page = () => {
    return (
        <>
            product id
        </>
    )
}

export default page
