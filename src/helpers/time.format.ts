export const calculateEstimatedTimeToRead = (text: string) => {
	const wpm = 225 // words per minut
	const words = text.trim().split(/\s+/).length
	const time = Math.ceil(words / wpm)
	return time
}
