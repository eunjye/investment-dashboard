import { useRecoilValue, useSetRecoilState } from 'recoil';
import { assetState } from '../recoil/atom/assetState';
import axios from 'axios';
import { userId } from '../recoil/atom/loginState';

const useAsset = () => {
  const atomUserId = useRecoilValue(userId);
  const setAssetData = useSetRecoilState(assetState);

  const handleAsset = async () => {
    try {
      console.log(atomUserId)
      const res = await axios.get('http://localhost:3002/users', { params: { username: atomUserId } });
      const userData = res.data[0];
      const assets = userData.assets;
      setAssetData(assets);

      return assets;
    } catch (err) {
      console.error(`asset error ::${err}`);
    }
  };
  
  const deleteAsset = async ({ id: assetId }) => {
    try {
      console.log(atomUserId)
      const res = await axios.get('http://localhost:3002/users', { params: { username: atomUserId } });
      const userData = res.data[0];
      const updateAssets = userData.assets.filter((item) => item.id !== assetId);

      await axios.put('http://localhost:3002/users', { ...userData, assets: updateAssets });

      setAssetData(updateAssets);
    } catch (err) {
      console.log(`asset delete error :: ${err}`);
    }
  };

  return { handleAsset, deleteAsset };
};

export default useAsset;
