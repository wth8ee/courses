export function getLessons(program) {
    const lessons = []
    for (let block of program) {
        for (let lesson of block.lessons) {
            lessons.push(lesson)
        }
    }
    return lessons
}