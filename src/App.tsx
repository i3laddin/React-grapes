import React, {useEffect, useState} from 'react';
import GrapesJS from 'grapesjs';
import {GEditor, GrapesPluginType} from "grapesjs-react";
import 'grapesjs/dist/css/grapes.min.css';
import {timerPluginRef} from "./timer/consts";
import addTimerPlugin from './timer';
import TemplateDisplay from "./templateDisplay";
import Timer from "react-compound-timer";



const App: React.FC = () => {

    const [htmlString, setHtmlString] = useState(null);
    const [cssString, setCssString] = useState("");
    const [pluginLoaded, setPluginLoaded] = useState(false);

    if (!pluginLoaded) {
        // Pass the state setters to the timer plugin, so that each time the bell is pressed these gets called
        // and the TemplateDisplay gets updated withthe new values
        addTimerPlugin(setHtmlString, setCssString);
        setPluginLoaded(true);
    }

    return (
        <>
            <GEditor id="geditor" plugins={[timerPluginRef]}/>
            <TemplateDisplay htmlString={htmlString} cssString={cssString} />
        </>
    );
}

export default App;