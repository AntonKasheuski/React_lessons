import React from "react";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
}

export const BaseExample = () => {

    return <Select items={[
                       {title: 'Minsk', value: 1},
                       {title: 'Vilnius', value: 2},
                       {title: 'Riga', value: 3},
                       {title: 'Moscow', value: 4},
                       {title: 'Kiev', value: 5},
                       {title: 'Warsaw', value: 6}
                   ]}
    />
}