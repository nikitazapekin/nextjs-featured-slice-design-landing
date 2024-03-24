 

import '@/app/theme/normalize.scss';
import '@/app/theme/global.scss';
import { Layout } from '@/app/Wrappers/Layout';
import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
	return (
	<> 
	<Layout>
	{<Component {...pageProps} />}
	</Layout>
	</>
	);
}
export default MyApp;
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