"use client"
import Provider from '@/lib/Providers/Provider'
import React from 'react'
import Header from "@/components/Home/Header"
import HouseCarrousel from "@/components/Home/HouseCarrousel"

import MockHouse from "@/mocks/houses.json"
import Settings from '@/components/Home/Settings'

function HomeClient() {
    const o = MockHouse[0]
    const Houses = Array.from({ length: 50 }, () => { return { ...o, _id: o._id + "d11d" + Math.random() } })

    return (
        <Provider>
            <Settings />
            <Header width="200" />
            <HouseCarrousel Houses={Houses} title="Guest Favorite" />
            <HouseCarrousel Houses={Houses} title="Your whitelist" />
            <HouseCarrousel Houses={Houses} />
            <HouseCarrousel Houses={Houses} title="Stay near in Ngaoundere" />
            <HouseCarrousel Houses={Houses} title="Stay Near in Buea" />
        </Provider>
    )
}

export default HomeClient