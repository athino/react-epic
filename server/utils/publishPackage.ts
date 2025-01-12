import {execSync} from 'child_process'

export const publishPackage = () => {
    try {
        const result = execSync('npm publish', {encoding: 'utf-8'})
        return result
    } catch (error) {
        console.error('Error checking git status:', error)
        return 'error'
    }
}
