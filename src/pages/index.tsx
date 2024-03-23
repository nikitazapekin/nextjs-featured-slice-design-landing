
import Head from 'next/head';

import type { GetStaticProps } from 'next';
import { Header } from '@/widgets/Header';
import "./test.scss"
import "../app/theme/global.scss"
import DiscoverSection from '@/widgets/DiscoverSection';
import TrendingCollection from '@/widgets/TrendingCollection/TrendingCollection';
import TopCreators from '@/widgets/TopCreators';
import BrowseCategories from '@/widgets/BrowseCategories';
import DiscoverMoreNfts from '@/widgets/MoreNfts';
interface HomePageProps {
	
}
const HomePage = ({
	
}: HomePageProps) => {
	return (
		<>
			<Head>
				<meta name="description" content="Modsen client blog" />
				<title>Home </title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
		<Header /> 
		<DiscoverSection />
		<TrendingCollection />
		<TopCreators />
		<BrowseCategories />
		<DiscoverMoreNfts />
		 
		{/*
	*/}
		</>
	);
};

export default HomePage;

 //f618e3d6ad3833abcd8ce1bfaa8cd8248c2a254f


//https://www.figma.com/file/oVxRcV8M2sLcNqd5epk16k/ojjo-%2B?type=design&node-id=0%3A1&mode=design&t=6lb4VXIFZgGRCF6Z-1 ювелирка

// entity = компоненты  +- как комментарий и т д
//features - некие формы
// widgets - самостоятельные компоненты как навбар сайдбар и др
//shared - макс перемспользуемые модули и компоненты
//procesesses - многоэтапные процессы по типу регистрации на неск страниц
//app - роутеры конфигурация и т д и тп
//сегменты:
/*
UI 
Model - взаимодействие со стейтом экшоны стейты и тд
lib - функции - хелперы
config - конфишурация модуля к примеру react18next
api
consts
*/