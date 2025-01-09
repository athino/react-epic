// @ts-nocheck

export const createDomainsSkeleton = (domains) => {
    return Object.entries(domains).reduce((accDomains, [domain, reducer]) => {
        return {
          ...accDomains,
          [domain]: reducer._actionTypes.reduce((accActions, actionType) => ({
            ...accActions,
            [actionType]: true
          }), {})
        }
    }, {})
}
