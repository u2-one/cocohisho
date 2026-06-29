import { PageData } from '../../types';
import { AZUMA_VOICES } from './voices/azuma';

export const aroundData: PageData = {
  pageName: '24時間対応中',
  theme: {
    primary: '#7a5a9e',
    secondary: '#d4af37', // Antique Gold
    background: '#0a0a0f',
    text: '#d1d1d1',
    accent: '#d4af37',
  },
  twitterUrl: 'https://x.com/ashiiibaya',
  youtubeUrl: 'https://www.youtube.com/@%E8%91%A6%E6%97%A9',
  niconicoUrl: 'https://www.nicovideo.jp/user/141658499',
  worldView: {
    title: 'Coming Soon......',
    description: '',
  },
  characters: [
    {
      id: 'azuma',
      name: '東眞',
      JPname: '東眞',
      ENname: 'Azuma',
      description: 'Coming soon......',
      imageUrl: 'assets/images/around/azuma_normal/azuma_full.png',
      listImageUrl: 'assets/images/around/azuma_normal/azuma_icon.png',
      detailImageUrl: 'assets/images/around/azuma_normal/azuma_full.png',
      iconUrl: 'assets/images/around/azuma_normal/azuma_icon.png',
      color: '#7a5a9e',
      type: '青年声',
      age: '29歳',
      sex: '男',
      birthday: '7/23',
      height: '180前後',
      favorite: '珈琲',
      first: '私',
      second: 'あなた/きみ',
      voiceLibraries: AZUMA_VOICES,
    },
  ],
};



