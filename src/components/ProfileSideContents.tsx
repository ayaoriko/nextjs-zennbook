import Link from 'next/link';
import Image from 'next/image'

export default function ProfileSideContents() {
    return (
        <>
            <div className='flex items-start justify-start lg:items-center'>
                <Image src="/images/profile-icon.png" alt="Profile" width={60} height={60} />
                <div className='ml-[15px]'>
                    <h2 className='font-16 font-bold mb-[12px] lg:mb-0 md:tracking-wide'>あやおり子</h2>
                    <p className='lg:hidden text-[14px] tracking-wide leading-[1.8] md-leading-[1.5]'>日々の思考を、技術と同じように並べてみる。ここは、あやおり子の思考メモです。<br />
                        このサイトは、あやおり子がNext.js（React）・TypeScript・Tailwind CSSを使って制作しました。</p>
                </div>
            </div>
            <p className='hidden lg:block text-[14px] tracking-wide leading-[1.8] md-leading-[1.5] lg:mt-[20px]'>日々の思考を、技術と同じように並べてみる。ここは、あやおり子の思考メモです。<br />
                このサイトは、あやおり子がNext.js（React）・TypeScript・Tailwind CSSを使って制作しました。</p>
        </>
    )
}

