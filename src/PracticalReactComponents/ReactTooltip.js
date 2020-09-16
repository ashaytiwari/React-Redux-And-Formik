import React, {forwardRef} from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const ColorCustomTooltip = () => {
    return <span style={{color: 'yellow'}}>React component Tooltip</span>
}

const ChildComponent = forwardRef((props,ref) => {
    return <div ref={ref}>
        <div>First Line</div>
        <div>Second Line</div>
    </div>
}) 

function ReactTooltip() {
    return (
        <div className='rCard'>
            <h4>React Tippy Tooltip</h4>
            <Tippy content='Basic Tooltip'>
                <button type='button' className='rButton'>Hover</button>
            </Tippy>
            <Tippy content={<span style={{color: 'orange'}}>Color Tooltip</span>}>
                <button type='button' className='rButton'>Custom Tooltip</button>
            </Tippy>
            <Tippy content={<ColorCustomTooltip></ColorCustomTooltip>}>
                <button type='button' className='rButton'>React component Tooltip</button>
            </Tippy>
            <Tippy content={<ColorCustomTooltip></ColorCustomTooltip>}>
                <ChildComponent></ChildComponent>
            </Tippy>
            <Tippy content='Extra Props Tooltip' arrow={false} delay={1000}>
                <button type='button' className='rButton'>Extra props tooltip</button>
            </Tippy>
        </div>
    )
}

export default ReactTooltip
