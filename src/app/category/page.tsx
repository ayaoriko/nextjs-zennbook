import ProfileHeader from '@/components/ProfileHeader';
import CategoryList from '@/components/CategoryList';
import ArticleBoxTab from '@/components/ArticleBoxTab';

export default async function CategoryPageList() {

    return (
        <>
            <div className='max-w-[880px] mx-auto pt-[60px] pb-[40px]'>
                <ProfileHeader />
            </div>
            <div className='max-w-[880px] mx-auto'>
                <ArticleBoxTab tabID="category" />
            </div>
            <div className='bg-[#F7EDF5]'>
                <div className="max-w-[880px] mx-auto px-[14px] py-[40px]">
                    <CategoryList />
                </div>
            </div>
        </>
    )
}