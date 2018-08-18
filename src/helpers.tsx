export const randomId = () => Date.now() + Math.random()


export const createProject = (item: any, isOpen: boolean) => {
	return { id: item.id, isOpen, name: item.name }
}


export const createTask = (item: any, changeText?: Array<Object>) => {
	return { id: item.id, text: changeText ? changeText : item.text }
}