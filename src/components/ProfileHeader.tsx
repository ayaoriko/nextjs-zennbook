import Link from 'next/link';
import Image from 'next/image'

export default function ProfileHeader({ profileType = 'archive' }: {
    profileType?: string;
}) {
    return (
        <>
            <div className={profileType === 'single' ? 'flex items-start justify-start ' : 'md:flex items-center justify-center px-[16px] lg:p-0'}>
                {profileType === 'single' ?
                    <Image src="/images/profile-icon.png" alt="Profile" width={60} height={60} />
                    :
                    <Image src="/images/profile-icon.png" alt="Profile" width={120} height={120} />
                }
                <div className={profileType === 'single' ? 'ml-[15px]' : 'mt-[20px] md:mt-0 md:ml-[20px]'}>
                    <h2 className={profileType === 'single' ? 'text-[16px] font-bold mb-[12px] md:tracking-wide' : 'text-[24px] font-bold font-bold  md:tracking-wide mb-2'}>あやおり子</h2>
                    <p className={profileType === 'single' ? 'text-[14px] tracking-wide leading-[1.8] md-leading-[1.5]' : 'tracking-wide leading-[1.8] md-leading-[1.5]'}>日々の思考を、技術と同じように並べてみる。ここは、あやおり子の思考メモです。<br />
                        このサイトは、あやおり子がNext.js（React）・TypeScript・Tailwind CSSを使って制作しました。</p>
                </div>
            </div>
        </>
    )
}

