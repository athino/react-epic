import { useActions } from "../common/state/state"

export const Component = () => {

    const {actions, data} = useActions(({delta}) => ({
        foo: delta.id
    }))

    return (
        <button onClick={() => actions.delta.fetchUser({id: '3'})}>
            {data.foo}
        </button>
    )
}
