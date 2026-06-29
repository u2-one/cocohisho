import { TopPageData } from '../types';

export const topPageData: TopPageData = {
  title: 'Cocohisho',
  subtitle: 'UTAU音声ライブラリ配布サイト',
  description: '無料で利用できるUTAU向け音声ライブラリを配布しています。',
  pages: [
    {
      id: 'node03',
      name: 'NODE03',
      path: '/NODE03',
      closeImageUrl: 'images/node03_button_close.png',
      openImageUrl: 'images/node03_button_open.png',
      description: '近未来的な世界観の音声ライブラリ',
    },
    {
      id: 'mayoi',
      name: 'まよい奇象報告',
      path: '/Mayoi_Anomaly_Report',
      closeImageUrl: 'images/mayoi_button_close.png',
      openImageUrl: 'images/mayoi_button_open.png',
      description: '日本の夏をテーマにした音声ライブラリ',
    },
    {
      id: 'around',
      name: '24時間対応中',
      path: '/Around_the_Clock',
      closeImageUrl: 'images/around_button_close.png',
      openImageUrl: 'images/around_button_open.png',
      description: '暗い洋風の屋敷をイメージした音声ライブラリ',
    },
  ],
};



