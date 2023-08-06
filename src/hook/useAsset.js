import { useSetRecoilState } from 'recoil';
import { assetState } from '../recoil/atom/assetState';
import axios from 'axios';
import useAuth from './useAuth';

const useAsset = () => {
  const { userId } = useAuth();
  const setAssetData = useSetRecoilState(assetState);

  const handleAsset = async () => {
    try {
      const res = await axios.get('http://localhost:3000/users', { params: { username: userId } });
      const userData = res.data[0];
      const assets = userData.assets;
      setAssetData(assets);

      return assets;
    } catch (err) {
      console.error(`asset error ::${err}`);
    }
  };

  
  return { setAssetData, handleAsset };
};

export default useAsset;