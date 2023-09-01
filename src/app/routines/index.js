
import Utils from '../../utils/utils';

import MainController from '../controllers/MainController';

const { second, minute, hour } = Utils.times();

const init = () => {
    runTest();
    
}

const runTest = () => {
    setInterval(async () => {
        await MainController.test();
    }, 5 * second);
} 

export default init;