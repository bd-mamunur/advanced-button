import { TabPanel } from '@wordpress/components'
import { __ } from '@wordpress/i18n';
import './style.scss'
const MyTabPanel = ({normalComponent,hoverComponent}) => (
    <TabPanel
        className="my-tab-panel"
        activeClass="active-tab"
        tabs={ [
            {
                name: 'tab1',
                title: __("Normal",'advanced-button'),
                className: 'tab-one bdt-tab',
            },
            {
                name: 'tab2',
                title:  __('Hover','advanced-button'),
                className: 'tab-two bdt-tab',
            },
        ] }
    >
        { ( tab ) => {
            if(tab.name === "tab1"){
                return <>{normalComponent}</>
            }else if(tab.name==="tab2"){
                return <>{hoverComponent}</>
            }
        } }
    </TabPanel>
);

export default  MyTabPanel;

