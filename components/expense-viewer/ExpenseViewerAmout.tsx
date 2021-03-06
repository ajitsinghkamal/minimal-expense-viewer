import css from "./ExpenseViewerAmout.module.scss";

type Props = {
	label: string;
	amount: number;
	currency: string;
};
function ExpenseViewerAmount({ label, amount, currency }: Props) {
	return (
		<div className={css.amount}>
			<span className={css.amount_label}>{label}</span>
			<div className={css.amount_value}>
				<sup className={css.amount_value_currency}>{currency}</sup>
				<span className={css.amount_value_spent}>
					{(amount / 100).toLocaleString()}
				</span>
			</div>
		</div>
	);
}

export default ExpenseViewerAmount;
