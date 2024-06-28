import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Auto Parts | 404 Not Found',
    description: 'Generated for Auto Parts',
}

const NotFoundPage = () => {
    return (
        <>
            <div className="relative w-full h-[60vh] mt-10">
                <Image src={'/not-found.svg'} alt="notfound" fill className="object-contain" />
            </div>
            <h2 className="text-center text-custom-black text-5xl my-10 tracking-wide font-bold">
                This page will be <span className="text-custom-blue">launched</span> soon
            </h2>
        </>
    )
}

export default NotFoundPage
