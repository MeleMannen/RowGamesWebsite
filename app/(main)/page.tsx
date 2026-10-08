import Image from "next/image";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { Hero } from "@/components/hero/hero";
import { RatingLaurelsBadge } from "@/components/rating_laurels_badge/rating_laurels_badge";
import styles from "./page.module.css";

const IMAGE_PATH = "/app_view/app_images/";
const ROW_GAMES_BEZEL = "iPhone 16 Pro Max Space Black";

const GAMES = [
  {
    name: "Nim",
    image: "04-nim-midgame.png",
    alt: "A clean Nim game in progress on the game board.",
    number: "01",
    description: "Take turns removing counters from the rows and plan each move.",
    imageClass: "nimScreenshot",
  },
  {
    name: "4 in a Row",
    image: "07-four-in-a-row-advanced.png",
    alt: "A colorful 4 in a Row game in progress.",
    number: "02",
    description: "Drop counters into the grid and connect four to win.",
    imageClass: "fourScreenshot",
  },
  {
    name: "Tic Tac Toe",
    image: "09-tic-tac-toe-advanced.png",
    alt: "An advanced Tic Tac Toe game in progress.",
    number: "03",
    description: "Place Xs and Os on the grid and get three in a row to win.",
    imageClass: "ticScreenshot",
  },
];

const OPPONENTS = [
  {
    name: "Two player",
    detail: "Take turns on the same iPhone.",
    number: "01",
  },
  {
    name: "Siri",
    detail: "Play a quick game against Siri.",
    number: "02",
  },
  {
    name: "Smart Siri",
    detail: "Choose a more challenging Siri opponent.",
    number: "03",
  },
  {
    name: "Big Brain Siri",
    detail: "Play against the most challenging Siri opponent.",
    number: "04",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <div className={styles.ratingBadge}>
            <RatingLaurelsBadge
              showStars={true}
              rating={5.0}
              caption="Worldwide rating"
            />
          </div>
          <p className={styles.eyebrow}>THREE GAMES FOR IPHONE</p>
          <h1 id="hero-title">
            Nim, 4 in a Row,
            <br />
            <span>and Tic Tac Toe.</span>
          </h1>
          <p className={styles.heroDescription}>
            Play with a friend on one iPhone or choose Siri at one of three
            difficulty levels. The app also keeps your stats and match history.
          </p>
          <div className={styles.heroActions}>
            <DownloadActionButton size="medium" label="Get Row Games" />
            <a className={styles.textLink} href="#games">
              Meet the games <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className={styles.availability}>Two player and Siri modes · Game stats and history</p>
        </div>

        <div className={styles.heroArtwork}>
          <div className={styles.artGlow} aria-hidden="true" />
          <Hero.Image
            src={`${IMAGE_PATH}04-nim-midgame.png`}
            alt="A clean game of Nim in progress on iPhone."
            bezel={ROW_GAMES_BEZEL}
          />
        </div>
      </section>

      <section className={styles.gamesSection} id="games" aria-labelledby="games-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionKicker}>CHOOSE A GAME</p>
            <h2 id="games-title">Three games, one app.</h2>
          </div>
          <p>Play with a friend or against Siri.</p>
        </div>
        <div className={styles.gameGrid}>
          {GAMES.map((game) => (
            <article className={styles.gameCard} key={game.name}>
              <div className={`${styles.gameVisual} ${styles[game.imageClass]}`}>
                <Image
                  src={`${IMAGE_PATH}${game.image}`}
                  alt={game.alt}
                  fill
                  sizes="(max-width: 560px) 90vw, (max-width: 850px) 44vw, 30vw"
                  className={styles.gameScreenshot}
                />
              </div>
              <div className={styles.gameInfo}>
                <span className={styles.gameNumber}>GAME {game.number}</span>
                <h3>{game.name}</h3>
                <p>{game.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.opponentsSection} aria-labelledby="opponents-title">
        <div className={styles.opponentIntro}>
          <p className={styles.sectionKicker}>CHOOSE AN OPPONENT</p>
          <h2 id="opponents-title">
            Play with a friend
            <br />
            or challenge Siri.
          </h2>
          <p>
            Take turns on one iPhone, or choose from three Siri difficulty
            levels.
          </p>
        </div>
        <div className={styles.opponentList}>
          {OPPONENTS.map((opponent) => (
            <article className={styles.opponentItem} key={opponent.number}>
              <span className={styles.opponentNumber}>{opponent.number}</span>
              <div>
                <h3>{opponent.name}</h3>
                <p>{opponent.detail}</p>
              </div>
              <span className={styles.opponentArrow} aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.progressSection} aria-labelledby="progress-title">
        <div className={styles.progressHeading}>
          <p className={styles.sectionKicker}>PLAYER STATS AND MATCH HISTORY</p>
          <h2 id="progress-title">Review your games.</h2>
        </div>
        <div className={styles.progressGrid}>
          <article className={styles.progressCard}>
            <div className={styles.progressVisual}>
              <Image
                src={`${IMAGE_PATH}10-statistics-overview.png`}
                alt="Row Games statistics showing games played, win rate, wins, losses, draws, and opponent records."
                fill
                sizes="(max-width: 560px) 90vw, 48vw"
                className={styles.progressScreenshot}
              />
            </div>
            <div className={styles.progressCopy}>
              <span className={styles.gameNumber}>01 / STATISTICS</span>
              <h3>Track your results.</h3>
              <p>See games played, win rate, wins, losses, draws, and results against each opponent.</p>
            </div>
          </article>
          <article className={styles.progressCard}>
            <div className={styles.progressVisual}>
              <Image
                src={`${IMAGE_PATH}12-history.png`}
                alt="Row Games history with past Tic Tac Toe, 4 in a Row, and Nim matches."
                fill
                sizes="(max-width: 560px) 90vw, 48vw"
                className={styles.progressScreenshot}
              />
            </div>
            <div className={styles.progressCopy}>
              <span className={styles.gameNumber}>02 / MATCH HISTORY</span>
              <h3>Browse past games.</h3>
              <p>Review each game with its opponent, score, and time played.</p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.closingSection} aria-labelledby="closing-title">
        <p className={styles.sectionKicker}>ROW GAMES FOR IPHONE</p>
        <h2 id="closing-title">Play all three games.</h2>
        <p>Choose Nim, 4 in a Row, or Tic Tac Toe. Play with a friend or Siri.</p>
        <DownloadActionButton size="medium" label="Get Row Games" />
      </section>
    </main>
  );
}
