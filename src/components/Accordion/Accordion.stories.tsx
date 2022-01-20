import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired');
const itemClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: 'Users',
    collapsed: true,
    onChange: callback,
    items: []
}

export const MenuUncollapsedMode = () => {
    return <Accordion titleValue={'Users'}
                      collapsed={false}
                      onChange={callback}
                      items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}]}
                      onClick={itemClickCallback}
    />
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onChange={ () => {setValue(!value)}}
                      items={[
                          {title: "Dimych", value: 1},
                          {title: "Valera", value: 2}
                      ]}
                      onClick={ (value) => {alert(`user with ID ${value} `)} }
    />
}
