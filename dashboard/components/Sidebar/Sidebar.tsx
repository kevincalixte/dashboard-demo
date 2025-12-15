import React from 'react'
import { Account } from './Account'
import { Search } from './Search'
import { RouteSelect } from './RouteSelect'

export const Sidebar = () => {
    return (
        <div>
            <Account />
            <Search />
            <RouteSelect />
        </div>
    )
}
