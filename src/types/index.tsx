export default interface StoreState {
	projects: Array<any>;
	tasks: Array<any>;
	currentId: any;
}
export interface Itext {
	id: number;
	text: string;
}
export interface Itask {
	id: number,
	text: Array<Itext>
};
export interface Iproject {
	id: number,
	isOpen: boolean,
	name: string
};


export interface Iaction {
	type: string;
	payload: any
}