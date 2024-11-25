import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { clsx } from 'clsx';
import styles from './ArticleParamsForm.module.scss';
// import { RadioGroup } from '../../ui/radio-group';
// import { Text } from '../../ui/text';
import { Separator } from '../../ui/separator';
import { useRef, useState } from 'react';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';

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

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleToggleSidebar} />
			<aside
				ref={sideBarRef}
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>
					<p>ЗАДАЙТЕ ПАРАМЕТРЫ</p>
					<div>{/* <Text /> */}</div>
					<div>
						<Separator />
					</div>
					<div>{/* <RadioGroup /> */}</div>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
