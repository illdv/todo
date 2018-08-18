export const addId = (item: Array<string>, title?: string) =>
	({ id: Date.now() + Math.random(), [title ? 'name' : 'text']: item })


export const createObj = (item: any, bool: boolean, changeText?: Array<Object>) => {
	return { id: item.id, isOpen: bool, text: changeText ? changeText : item.text }
}