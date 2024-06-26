import styles from './index.module.scss';

import { Header } from '@/widgets/Header';
import "../../theme/global.scss"
import "../../theme/theme.scss"
import type { LayoutProps } from './interfaces';

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.layout}>
			{/*
			*/}
		 
			<main className={styles.main}>{children}</main>
		 
		</div>
	);
};