// import {ReactComponent as UndoIcon} from '../../public/icons/undo.svg'
// import {ReactComponent as RedoIcon} from '../../public/icons/redo.svg'
import { ReactComponent as ZoomInIcon } from '../../public/icons/zoom_in.svg';
import { ReactComponent as ZoomOutIcon } from '../../public/icons/zoom_out.svg';
import {ReactComponent as RunIcon} from '../../public/icons/run.svg';
import { useReactFlow } from '@xyflow/react';

import './customController.scss';
import { useNavigate } from 'react-router';

const CustomControls = () => {
    const {zoomIn, zoomOut} = useReactFlow()
    const navigate = useNavigate()

    const handleZoomIn = () => {
        zoomIn();
    };

    const handleZoomOut = () => {
        zoomOut();
    };

    return (
        <div className='control'>
            {/* <div>
                <UndoIcon />
            </div>

            <div>
                <RedoIcon />
            </div> */}

            <div onClick={handleZoomIn} >
                <ZoomInIcon />
            </div>

            <div >
                <ZoomOutIcon onClick={handleZoomOut}/>
            </div>

            <div className='run' onClick={() => navigate('NewWorkflow/TestRun')}>
                <RunIcon />
                Run
            </div>

        </div>
    );
};

export default CustomControls;