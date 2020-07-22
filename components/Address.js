import css from "./Address.module.css"

export default function Address() {
  return (
    <address className={css.root}>
      <ul>
        <li>
          <a href="https://bearjam.dev/about" className={css.website}>
            Bio
          </a>
        </li>
        <li>
          <a href="mailto:hello@magdairis.com" className={css.email}>
            hello@magdairis.com
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/magdairispetford/" className={css.linkedIn}>
            Magda Iris Petford
          </a>
        </li>
        <li>
          <a href="https://instagram.com/bymagdairis" className={css.instagram}>
            @bymagdairis
          </a>
        </li>
        <li>
          <a href="https://twitter.com/bymagdairis" className={css.twitter}>
            @bymagdairis
          </a>
        </li>
      </ul>
    </address>
  )
}
