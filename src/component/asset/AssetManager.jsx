import React, { useEffect } from 'react';
import AssetCard from './AssetCard';
// import { useRecoilValue } from 'recoil';
import useAsset from '../../hook/useAsset';
import { useRecoilValue } from 'recoil';
import { assetState } from '../../recoil/atom/assetState';

const AssetManager = () => {
  const { handleAsset } = useAsset(); // useAsset 훅을 사용하여 handleAsset 함수와 assetData를 가져옵니다.
  const arrAsset = useRecoilValue(assetState);

  useEffect(() => {
    handleAsset();
  }, []);


  return (
    <div>
      {
        arrAsset.length >= 1 && 
        arrAsset.map((assetItem, idx) => {
          return <AssetCard key={idx} asset={assetItem} />;
        })
        
      }
      {
        arrAsset.length < 1 && (
          <strong>아이템이 없습니다.</strong>
        )
      }
    </div>
  );
};

export default AssetManager;