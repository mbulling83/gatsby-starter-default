import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1/">Page 1</Link>
            </li>
            <li>
              <Link to="/page2/">Page 2</Link>
            </li>
            <li>
              <Link to="/page3/">Page 3</Link>
            </li>
            <li>
              <Link to="/page4/">Page 4</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <header>
          <Link to="/">My Gatsby Site</Link>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/about/">About Us</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h1>Welcome to my Gatsby site!</h1>
        <p>This is the index page.</p>
      </div>
    </div>
  )
}
