import { root } from "../state/root";

export const effects = root.createEffects()

effects.addEffect({
    domain: 'delta',
    action: 'setSearchValue',
    type: 'takeLatest',
    async handler(ctx) {
        if (ctx.action.payload.value !== '') {
            ctx.actions.echo.setSearching({ searching: true })
            await sleep(2000)

            ctx.call(() => {
                console.log('"Started" fetch...')
            })

            ctx.actions.echo.setSearchResult({
                searchResult: ctx.state.echo.searchResult + 1
            })
        } else {
            ctx.actions.echo.setSearching({ searching: false })
        }
    }
})

const sleep = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
