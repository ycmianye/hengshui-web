import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>蒸达人面粉经销</title>
        <meta
          name="description"
          content="衡水面粉经销，联系电话：18618436696。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            提供免费化验&排查&nbsp;电话微信同号：
            <code className={styles.code}>186-1843-6696</code>
          </p>

          <div>
            <a
              href="https://miantu.net?utm_source=zhengdaren&utm_medium=default-template&utm_campaign=zhengdaren"
              target="_blank"
              rel="noopener noreferrer"
            >
              Power By{" "}
              <Image
                src="/huanjing.svg"
                alt="环璟科技 Logo"
                className={styles.huanjingLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/zhengdaren.svg"
            alt="蒸达人 Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.hengshui}>
            <Image
              src="/hengshui.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a href="/story/mianfen" className={styles.card} target="_black">
            <h3>销售代理销售过万</h3>
            <p>
              常志刚从大学毕业后，来到了邢台市。他专注于销售工作，凭借自己的勤奋和努力，他很快就成为了一名育才面业销售代理。
            </p>
          </a>
        </div>

        <div className={styles.grid}>
          <a
            href="/faq"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              常见问题 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>制作工艺和技巧，以及面粉的选择。</p>
          </a>

          <a
            href="/contact"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              经营支持&咨询 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>经营管理、营销策略等相关内容。</p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              售后服务 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              免费化验&排查、售后服务等相关内容。
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
