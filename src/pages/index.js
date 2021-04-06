import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'PINE pro'
  const siteDescription = 'Landing page for messaging app PINE'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              PINE proは既存の全てを超越する
              <br />
              超最強のメッセージングアプリです
            </h2>
          </header>
          <p>
            PINE proの使用に必要なものはメールアドレスだけです。あなたの個人情報や追加料金は一切必要ありません。
            初めて使う時からすでに手に馴染んでいるかのような明快なユーザーインターフェース、ミニマルで美しいデザイン、豊富な機能。
            PINE proはあなたの日常のコミュニケーションをまったく新しい次元に引き上げます。
          </p>
          <div className="row">
            <ul className="actions">
              <li>
                <a href="https://apps.apple.com/jp/app/pine-pro/id1560540009" className="button" target='_blank'>
                  App Store
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=net.votepurchase.pine" className="button" target='_blank'>
                  Google Play
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="two">
          <h2>PINE proのご紹介</h2>

          <Gallery />
          
        </section>

        <section id="three">
          <div className="row">
            <div className="8u 12u$(small)">
              <div className="row uniform 50%">
              <h4>行動規範</h4>
                <p>
                  PINE proは、主にアプリユーザーの情報共有・交流・コラボレーションを目的とするコミュニティです。<br/>
                  我々(PINE pro運営)はすべての参加者がそのコミュニティから歓迎され、楽しんで頂くことをめざしています。そのためには、PINE pro関連コミュニティにおける主催者やスタッフ、出展者、観客などのすべての参加者の皆様は、本行動規範に則って他の参加者に対して敬意と礼儀をもってコミュニティに参加いただくようにお願いいたします。<br/>
                  PINE pro関連コミュニティでは全ての人を歓迎します。そのために、他の参加者が不快に感じる行為はそれがどのような形であっても許容いたしません。参加者の皆さまは他の参加者の様々な背景に配慮してください。あなたの何気ない投稿や行動で悲しむ人がいるかもしれません。注意深く、優しく振る舞ってください。我々運営は参加者の皆さまの権利を守るため、規範に反する方へ注意だけではなくコミュニティから退場させたり、場合によっては法的機関への相談など、適切と思われる対応をおこないます。もしあなた、ないしは他の参加者がハラスメント行為を受けた場合、お近くのPINE proスタッフにご相談いただくか、アプリに明記された連絡窓口にご連絡ください。お知らせ頂いた内容は法的な情報開示の必要性がある場合を除いて、あなたの同意がないかぎり匿名で扱いますのでご安心ください。開発者はご相談いただいた内容の事実確認をする場合にのみデータベースに保存された内容を確認します。
                </p>
              </div>
              <div className="row uniform 50%">
              <h4>プライバシポリシー</h4>
                <p>
                  PINE proは一切のユーザー情報を取得しません。ユーザーの個人情報には1ミリも興味がありません。これまでも、そしてこれからも。<br/>
                </p>
              </div>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:pinepro.staff@gmail.com">pinepro.staff@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
