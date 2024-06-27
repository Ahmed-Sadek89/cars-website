import Image from 'next/image'

const ProfileTabs = () => {
    return (
        <div
            className='py-5 px-10 border border-[#A4A4A4] rounded flex flex-col gap-6'
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        >
            <div className='flex flex-col gap-4 relative'>
                <Image src={'/profile/profile.jpg'} alt='profile' width={100} height={100} className='object-cover rounded-full' />
                <h2 className='text-xl font-bold text-custom-black'>Welcome !</h2>
                <p className='text-sm text-custom-gray '>
                    To your Account , You can You can now control your profile and know all the details of the products that you have previously searched and other Managed
                </p>
            </div>
            <div className='flex flex-col gap-1 rounded-md border border-custom-black p-3 text-custom-black bg-transparent transition duration-300 hover:bg-[#405FF226] hover:border-[#405FF226]'>
                <h3 className='font-bold text-xl'>status orders</h3>
                <p className='text-xs'>Orders have not been completed and you have booked them</p>
            </div>
            <div>links</div>
        </div>
    )
}

export default ProfileTabs
