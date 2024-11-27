import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
export interface ThemeConfig {
	fontFamily: string;
	fontSize: string;
	fontColor: string;
	containerWidth: string;
	bgColor: string;
}
const App = () => {
	const [theme, setTheme] = useState<ThemeConfig>({
		fontFamily: defaultArticleState.fontFamilyOption.value,
		fontSize: defaultArticleState.fontSizeOption.value,
		fontColor: defaultArticleState.fontColor.value,
		containerWidth: defaultArticleState.contentWidth.value,
		bgColor: defaultArticleState.backgroundColor.value,
	});
	function changeState(themeConfig: ThemeConfig) {
		setTheme(themeConfig);
	}

	// useEffect(function () {
	// 	console.log('Hello222');
	// 	setTimeout(() => {
	// 		changeState();
	// 		// 	setTheme((prevState) => {
	// 		// 		return { ...prevState, fontFamily: 'Ubuntu' };
	// 		// 	});
	// 	}, 5000);
	// }, []);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': theme.fontFamily,
					'--font-size': theme.fontSize,
					'--font-color': theme.fontColor,
					'--container-width': theme.containerWidth,
					'--bg-color': theme.bgColor,
				} as CSSProperties
			}>
			<ArticleParamsForm themeChange={changeState} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
