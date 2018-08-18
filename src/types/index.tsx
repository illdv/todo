export default interface StoreState {
	projects: Array<Object>;
	tasks: Array<Object>;
	currentId: number;
	toggles: boolean;
}