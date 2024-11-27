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
	fontSizeOptions,
} from 'src/constants/articleProps';

import { RadioGroup } from 'src/ui/radio-group';
import { ThemeConfig } from 'src/index';

interface ChildProps {
	themeChange: (themeConfig: ThemeConfig) => void;
}

export const ArticleParamsForm: React.FC<ChildProps> = ({ themeChange }) => {
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

	function closeButton() {
		setIsOpen(!isOpen);
	}

	const [fontSelected, setFontSelected] = useState(
		defaultArticleState.fontFamilyOption
	);

	const [fontsizeSelected, setFontsizeSelected] = useState(
		defaultArticleState.fontSizeOption
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
					<RadioGroup
						selected={fontsizeSelected}
						name='radio'
						onChange={setFontsizeSelected}
						options={fontSizeOptions}
						title='РАЗМЕР ШРИФТА'
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
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={() => {
								themeChange({
									fontFamily: defaultArticleState.fontFamilyOption.value,
									fontSize: defaultArticleState.fontSizeOption.value,
									fontColor: defaultArticleState.fontColor.value,
									containerWidth: defaultArticleState.contentWidth.value,
									bgColor: defaultArticleState.backgroundColor.value,
								});
								closeButton();
								setFontSelected(defaultArticleState.fontFamilyOption);
								setFontsizeSelected(defaultArticleState.fontSizeOption);
								setcolorSelected(defaultArticleState.fontColor);
								setbackColorSelected(defaultArticleState.backgroundColor);
								setContentSelected(defaultArticleState.contentWidth);
							}}
						/>
						<Button
							title='Применить'
							htmlType='button'
							type='apply'
							onClick={() => {
								themeChange({
									fontFamily: fontSelected.value,
									fontSize: fontsizeSelected.value,
									fontColor: colorSelected.value,
									containerWidth: contentSelected.value,
									bgColor: backColorSelected.value,
								});
								closeButton();
							}}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
