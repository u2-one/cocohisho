import { VoiceLibrary } from '../../../types';

export const SHIELLE_VOICES: VoiceLibrary[] = [
    {
        id: 'shielle-normal',
        name: 'Normal',
        version: '1.0',
        description: '御緑シエレの基本となる音源。声変わり前のあどけなさを感じる少年声。',
        downloadUrl: 'https://bowlroll.net/file/249049',
        sampleYoutubeUrl: 'https://youtu.be/irfI0XxP_Kc?si=TcaDKj70kJa70x3R',
        // sampleNiconicoUrl: 'https://www.nicovideo.jp/watch/sm12345678',
        releaseDate: '2021-03-03',
        iconUrl: 'assets/images/node03/shielle_normal/shielle_icon.png', // Default icon
        imageUrl: 'assets/images/shielle_2x.png',
        tags: ['連続音', '多音階', 'キレ風音源'],
    },
    // {
    //     id: 'shielle-arsenic',
    //     name: 'Arsenic',
    //     version: '1.0',
    //     description: '鋭く、力強い表現に特化した追加音源。',
    //     downloadUrl: '#',
    //     releaseDate: '2024-02-15',
    //     iconUrl: '/assets/images/shielle_arsenic_icon.png', // Custom icon for this library
    //     tags: ['連続音', '多音階', '強音源'],
    // },
];
