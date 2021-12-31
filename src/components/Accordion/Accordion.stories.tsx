import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    onChange: callback
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);

    return <Accordion titleValue={'Menu'} collapsed={value} onChange={ () => {setValue(!value)}} />
}
