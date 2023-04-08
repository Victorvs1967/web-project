import { deleteAsync } from 'del';

const clear = async () => await deleteAsync('./dist');

export default clear;