import React, { useState } from 'react';
import SocialLinks from '../components/SocialLinks';
import { aroundData } from '../data/around/aroundData';
import { mayoiData } from '../data/mayoi/mayoiData';
import { node03Data } from '../data/node03/node03Data';
import '../styles/AboutPage.css';

const creators = [
  {
    name: 'SüA',
    description: '"NODE03"の管理者。\nこのサイト作った。デザインもした。たまに絵も描くことがある。\nサイトに問題があったらひとまず私宛に連絡ください。',
    icon: 'assets/images/node03/sua_icon.png',
    theme: 'node03',
    social: {
      twitterUrl: node03Data.twitterUrl,
      youtubeUrl: node03Data.youtubeUrl,
      niconicoUrl: node03Data.niconicoUrl,
    },
  },
  {
    name: '蝸牛',
    description: '"まよい奇象報告"の管理者。\n絵とか動画とかよく担当してる。このサイトの挿し絵も描いてくれた。',
    icon: 'assets/images/mayoi/kagyuu_icon.png',
    theme: 'mayoi',
    social: {
      twitterUrl: mayoiData.twitterUrl,
      youtubeUrl: mayoiData.youtubeUrl,
      niconicoUrl: mayoiData.niconicoUrl,
    },
  },
  {
    name: '葦早',
    description: '"24時間対応中"の管理者。\nMIXとかMIXとかMIXとか担当していることが多い。中心人物。',
    icon: 'assets/images/around/ashibaya_icon.png',
    theme: 'around',
    social: {
      twitterUrl: aroundData.twitterUrl,
      youtubeUrl: aroundData.youtubeUrl,
      niconicoUrl: aroundData.niconicoUrl,
    },
  },
];

function CreatorIcon({ icon, name }: { icon: string; name: string }): JSX.Element {
  const [showImage, setShowImage] = useState(true);

  if (!showImage) {
    return (
      <div className="about-creator-icon about-creator-icon--fallback" aria-hidden="true">
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <img
      className="about-creator-icon"
      src={icon}
      alt={`${name}のアイコン`}
      onError={() => setShowImage(false)}
    />
  );
}

function AboutPage(): JSX.Element {
  return (
    <div className="about-page">
      <div className="about-page-container">
        <h1 className="about-page-title">関係者</h1>
        <div className="about-page-content">
          <section className="about-section">
            <h2>避暑地の皆サマー（夏だけに）</h2>
            <div className="about-creators">
              {creators.map((creator) => (
                <div className={`about-creator about-creator--${creator.theme}`} key={creator.name}>
                  <CreatorIcon icon={creator.icon} name={creator.name} />
                  <div className="about-creator-body">
                    <h3>{creator.name}</h3>
                    <p>{creator.description}</p>
                    <SocialLinks
                      twitterUrl={creator.social.twitterUrl}
                      youtubeUrl={creator.social.youtubeUrl}
                      niconicoUrl={creator.social.niconicoUrl}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
