 

import '@/app/theme/normalize.scss';
import '@/app/theme/global.scss';
import { Layout } from '@/app/Wrappers/Layout';
import type { AppProps } from 'next/app';
import { Header } from '@/widgets/Header';
 
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

/* ============================================================================================================

page.tsx
import Image from "next/image";
 
import "./page.css"
export default function Home() {
  return (
    <div className="test">
dwwfe
    </div>
  );
}
//f618e3d6ad3833abcd8ce1bfaa8cd8248c2a254f

 */
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