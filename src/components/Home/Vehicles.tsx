import { vehicles } from '@/mocks/vehicles'
import Image from 'next/image'
import Link from 'next/link'

const Vehicles = () => {
    return (
        <section className='custom-container2 pt-5 pb-10'>
            <div className={`grid grid-cols-${vehicles.length} items-center gap-5`}>
                {
                    vehicles.map((vehicle, index) => (
                        <Link href="#" key={index} className='flex flex-col items-center text-center gap-3 group cursor-pointer'>
                            <div className='h-[100px] w-[100px] rounded-full flex items-center justify-center bg-[#D9D9D9] transition duration-300 hover:bg-custom-blue group-hover:bg-custom-blue'>
                                <Image src={vehicle.image} alt={vehicle.name} width={50} height={50} className='object-cover' />
                            </div>
                            <h5 className='text-custom-black font-bold text-sm'>{vehicle.name}</h5>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default Vehicles