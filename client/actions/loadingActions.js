import { IS_LOADING, IS_NOT_LOADING } from '../types';

const isLoading = () => ({ type: IS_LOADING });
const isNotLoading = () => ({ type: IS_NOT_LOADING });

export default {
  isLoading,
  isNotLoading,
};
