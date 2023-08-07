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
      alert('자산 조회를 실패했습니다.')
      console.error(`asset error ::${err}`);
    }
  };
  
  const deleteAsset = async ({ id: assetId }) => {
    try {
      const res = await axios.get('http://localhost:3002/users', { params: { username: atomUserId } });
      const userData = res.data[0];
      const updateAssets = userData.assets.filter((item) => item.id !== assetId);

      await axios.put(`http://localhost:3002/users/${userData.id}`, { ...userData, assets: updateAssets });

      setAssetData(updateAssets);
    } catch (err) {
      alert('삭제를 실패했습니다.')
      console.log(`asset delete error :: ${err}`);
    }
  };
  
  const addAsset = async ({ id: assetId }) => {
    try {
      
      // 추가하기
    } catch (err) {
      console.log(`asset add error :: ${err}`);
    }
  };

  return { handleAsset, deleteAsset, addAsset };
};

export default useAsset;
