import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { clsx } from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { Separator } from 'src/ui/separator';
import { useRef, useState } from 'react';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
import { Select } from 'src/ui/select';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
} from 'src/constants/articleProps';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	function handleToggleSidebar() {
		setIsOpen(!isOpen);
	}

	const sideBarRef = useRef(null);

	useOutsideClickClose({
		isOpen,
		rootRef: sideBarRef,
		onChange: () => {
			setIsOpen(false);
		},
	});

	const [fontSelected, setFontSelected] = useState(
		defaultArticleState.fontFamilyOption
	);
	const [colorSelected, setcolorSelected] = useState(
		defaultArticleState.fontColor
	);
	const [backColorSelected, setbackColorSelected] = useState(
		defaultArticleState.backgroundColor
	);
	const [contentSelected, setContentSelected] = useState(
		defaultArticleState.contentWidth
	);

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleToggleSidebar} />
			<aside
				ref={sideBarRef}
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>
					<h2>ЗАДАЙТЕ ПАРАМЕТРЫ</h2>
					<Select
						selected={fontSelected}
						onChange={setFontSelected}
						options={fontFamilyOptions}
						title='ШРИФТ'
					/>
					<Select
						selected={colorSelected}
						onChange={setcolorSelected}
						options={fontColors}
						title='ЦВЕТ ШРИФТА'
					/>
					<Separator />
					<Select
						selected={backColorSelected}
						onChange={setbackColorSelected}
						options={backgroundColors}
						title='ЦВЕТ ФОНА'
					/>
					<Select
						selected={contentSelected}
						onChange={setContentSelected}
						options={contentWidthArr}
						title='ШИРИНА КОНТЕНТА'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
