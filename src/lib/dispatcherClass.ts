// @ts-nocheck

export class Dispatcher {
    constructor(arg) {
        this.cancelled = false
        this.cancel = () => this.cancelled = true
        this.dispatch = arg.dispatch
        this.actions = new Proxy(this, {
            get(obj, domain) {
                const foundDomain = arg.domainsSkeleton[domain]
                if (!foundDomain) return
                return new Proxy(foundDomain, {
                    get(target, action) {
                        const foundAction = target[action]
                        if (foundAction) return (payload) => obj.handler({
                            type: action,
                            payload: payload,
                            domain: domain
                        });
                    }
                })
            }
        })
    }
    handler(action) {
        if (this.cancelled) return
        this.dispatch(action)
    }
}
