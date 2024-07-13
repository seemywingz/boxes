'use-strict';

import * as tb from '3base';
import Boxes from './Boxes';

alert('Hello world!');
let manager = new tb.Manager({
    "onLoad": () => {
        document.getElementById('loading-screen').classList.add('fade-out');
    }
});
manager.loadScene(Boxes);