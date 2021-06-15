/* eslint-disable */

type Tag = {
	id: number;
	title: string;
	legend: string;
};

type Teams = {
	id: number;
	title: string;
	legend: string;
};
type Transaction = {
	id: number;
	doneAt: string;
	details?: string;
	tag: Tag;
	amountInCents: string;
	team: Teams;
	currency: string;
};
