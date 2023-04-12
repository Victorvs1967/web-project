import { deleteAsync } from 'del';

import path from '../config/paths.js';

const clear = async () => await deleteAsync(path.root.concat('/index.html'), path.sass.dest, path.js.dest);

export default clear;