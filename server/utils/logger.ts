import colors from 'colors'

type Color = 'green' | 'blue' | 'yellow' | 'red'

export const log = (string: string, color?: Color) => {
    console.log(colors[color || 'green'](`> ${string}`))
}
