import { root } from "../state/root";

export const effects = root.createEffects()

effects.addEffect({
    domain: 'delta',
    action: 'setSearchValue',
    type: 'takeLatest',
    async handler(ctx) {
        await sleep(2000)

        ctx.call(() => {
            console.log('"Started" fetch...')
        })

        ctx.actions.echo.setSearchResult({
            searchResult: ctx.state.echo.searchResult + 1
        })
    }
})

const sleep = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
