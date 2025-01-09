import { createRoot } from '../../src/index'
import { createSubdomain as delta } from "../delta/deltaReducer";
import { createSubdomain as echo } from "../echo/echoReducer";

const root = createRoot({
    delta: delta(),
    echo: echo()
})
