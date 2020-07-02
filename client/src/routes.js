import Working from './routes/Working.svelte'
import Awesome  from './routes/Awesome.svelte'
const routes = {
    // Exact path
    '/': Working,
    '/fucking_awesome':Awesome,
 
 
    // Catch-all
    // This is optional, but if present it must be the last
    '*': Working,
}



export default routes
