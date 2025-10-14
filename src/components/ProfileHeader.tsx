import Image from "next/image";
import Link from 'next/link';

export default function ProfileHeader() {
    return (
        <>
            <h1>Hello, Next.js!</h1>
            <Image src="/next.svg" alt="Profile" width={100} height={100} /><br />
            <Link href="microcms">Go to microcms</Link><br />
            <Link href="blog">Go to Blog</Link><br />
            <Link href="dashboard">Go to Dashboard</Link>
        </>
    )
}

