import React from 'react'
import './style.scss'
import {CustomButton} from '../Button'
import {useTranslation} from '@/app/hooks/Translation'
import {useRouter} from 'next/navigation'
import { useNavigation } from '@/app/hooks/Navigation'

interface Item {
  id?: string;
  label?: string;
  path?: string;
}

interface AsideProps {
    items : Item[];
}

const Aside : React.FC < AsideProps > = ({items}) => {
    const {t} = useTranslation()
    const router = useRouter();
    const { navigate } = useNavigation();
     const generatePath = (item: { path?: string; id?: string }) => {
      return item.path ? `/${item.path}/${item.id}` : `/${item.id}`;
    };
    const handleClick = () => {
        router.push(`/`)
    }
    return (
        <div className='aside'>
            <div className='aside__title'>
                <CustomButton
                    as='button'
                    title={t('BackHome')}
                    iconLeft='left'
                    onClick={handleClick}/>
            </div>
            <div className='aside__list'>
                <ul className="mt-4 space-y-2">
                    {items.map((item) => {
                     
                    return(
                        <li key={item.id}>
                            <button className="text-blue-600 hover:underline" onClick={() => navigate(generatePath(item))}>
                                {item.label}
                            </button>
                        </li>
                    )})}
                </ul>
            </div>
        </div>
    )
}

export default Aside
